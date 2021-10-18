using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BlitzkriegSoftware.SecureRandomLibrary;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PSR.Auth.Configuration;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.Auth.Models.Request;
using PSR.Auth.Models.Response;
using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Auth.Services
{
    public class AuthService : IAuthService
    {
        private readonly IIdentityService _identityService;
        private readonly JwtSettings _jwtSettings;
        private readonly TokenValidationParameters _tokenValidationParams;
        private readonly IRefreshTokenRepository _refreshTokenRepository;
        
        public AuthService(
            IIdentityService identityService, 
            IOptionsMonitor<JwtSettings> optionsMonitor,
            TokenValidationParameters tokenValidationParams,
            IRefreshTokenRepository refreshTokenRepository) 
        {
            _identityService = identityService;
            _jwtSettings = optionsMonitor.CurrentValue;
            _tokenValidationParams = tokenValidationParams;
            _refreshTokenRepository = refreshTokenRepository;
        }

        public async Task<(AuthRes Response, ApplicationUser? User)> LoginAsync(UserLoginReq loginReq) {
            // get ApplicationUser
            var applicationUser = await _identityService.GetUserByEmailAsync(loginReq.Email);

            if (applicationUser == null) {
                var respose = AuthRes.Failure(new List<string> {
                    "Invalid authentication request"
                });
                return (respose, null);
            }

            // verify user name and password
            var isValid = await _identityService.VerifyPassword(applicationUser, loginReq.Password);

            if (!isValid) {
                var respose = AuthRes.Failure(new List<string> {
                    "Invalid authentication request"
                });
                return (respose, null);
            }

            return (AuthRes.Success(), applicationUser);
        }
        
        public async Task<(AuthRes Response, ApplicationUser? User)> RegisterAsync(UserRegistrationReq registrationReq) {
            // check if the email exist
            var applicationUser = await _identityService.GetUserByEmailAsync(registrationReq.Email);
            if (applicationUser is not null) {
                var response = AuthRes.Failure(new List<string> {
                    "Email already in use"
                });
                
                return (response, null);
            }            

            var newUser = new ApplicationUser {
                Email = registrationReq.Email,
                UserName = registrationReq.Email,
                EmailConfirmed = true // TODO build email functionality to send to the user to confirm email
            };

            // register user
            var identityResult = await _identityService.CreateUserAsync(newUser, registrationReq.Password);

            return (identityResult, applicationUser);
        }

        public async Task<AuthRes> RefreshTokenAsync(string token, string refreshToken) {
            var jwtTokenHanlder = new JwtSecurityTokenHandler();

            try {
                // make sure the token is a valid jwt token and not a random string
                var claimsPrincipal = jwtTokenHanlder.ValidateToken(token, _tokenValidationParams, out var validatedToken);

                // Validation 2 - Validate encryption algorithm
                // is it a JwtSecurityToken
                // IsJwtWithValidSecurityAlgorithm
                if (!IsJwtWithValidSecurityAlgorithm(validatedToken)) {
                    return AuthRes.Failure(new List<string> {
                        "Invalid authentication request"
                    });
                }
                
                // check that the token is not expired
                var utcExpiryDate = long.Parse(claimsPrincipal?.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp)?.Value ?? "0");
                var expiryDate = UnixTimeStapToDateTime(utcExpiryDate);
                if (expiryDate > DateTime.UtcNow) {
                    return AuthRes.Failure(new List<string> {
                        "Token has not yet expired"
                    });
                }
                
                // does the token exists in our database
                var storedRefreshToken = await _refreshTokenRepository.GetByRefreshTokenAsync(refreshToken);
                if (storedRefreshToken is null) {
                    return AuthRes.Failure(new List<string> {
                        "Token does not exist"
                    });
                }
                
                // has refresh token been used
                if (storedRefreshToken.IsUsed) {
                    return AuthRes.Failure(new List<string> {
                        "Token has been used"
                    });
                }

                // validate if revoked
                if (storedRefreshToken.IsRevorked) {
                    return AuthRes.Failure(new List<string> {
                        "Token has been revoked"
                    });
                }

                // matches jti in our db and validate it (id)
                var jti = claimsPrincipal?.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Jti)?.Value ?? "";
                if (storedRefreshToken.JwtId != jti) {  
                    return AuthRes.Failure(new List<string> {
                        "Token doesn't match"
                    });
                }

                // update current token
                storedRefreshToken.IsUsed = true;
                _refreshTokenRepository.Update(storedRefreshToken);
                await _refreshTokenRepository.UnitOfWork.SaveEntitiesAsync();

                // get logged in user base on the information from the JWT token 
                var userExisting = await _identityService.GetUserByIdAsync(storedRefreshToken.UserId);
                
                var firstName = claimsPrincipal?.Claims.FirstOrDefault(x => x.Type == AuthClaimTypes.FirstName)?.Value!;
                var lastName = claimsPrincipal?.Claims.FirstOrDefault(x => x.Type == AuthClaimTypes.LastName)?.Value!;

                // generate new token
                return await JwtTokenAsync(userExisting, firstName, lastName);
            } catch(Exception ex) {
                if(ex.Message.Contains("Lifetime validation failed. The token is expired.")) {
                    return AuthRes.Failure(new List<string> {
                        "Token has expired please re-login"
                    });               
                }

                return AuthRes.Failure(new List<string> {
                    "Something went wrong."
                });
            }
        }

        public async Task<AuthRes> JwtTokenAsync(ApplicationUser user, string firstName, string lastName) {
            var jwtHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(new [] {                    
                    new Claim(AuthClaimTypes.UserId, user.Id),
                    new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(AuthClaimTypes.FirstName, firstName),
                    new Claim(AuthClaimTypes.LastName, lastName),
                }),
                Expires = DateTime.UtcNow.Add(_jwtSettings.TokenLifetime), // TODO: update the expiration time to minutes
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature // TODO: review the algorithm
                )
            };
            
            var token = jwtHandler.CreateToken(tokenDescriptor);
            var jwtToken = jwtHandler.WriteToken(token);

            var refreshToken = GenerateRefreshToken(token.Id, user.Id);

            await _refreshTokenRepository.AddAsync(refreshToken);
            await _refreshTokenRepository.UnitOfWork.SaveEntitiesAsync();

            return AuthRes.Success(jwtToken, refreshToken.Token);
        }
        
        private RefreshToken GenerateRefreshToken(string securityTokenId, string userId) {
            var secureRandom = new SecureRandom();
            var randomBytes = new byte[64];
            secureRandom.NextBytes(randomBytes);
            var refreshTokenString = Convert.ToBase64String(randomBytes);

            var refreshToken = new RefreshToken() {
                JwtId = securityTokenId,
                IsUsed = false,
                IsRevorked = false,
                UserId = userId,
                AddedDate = DateTime.UtcNow,
                ExpiryDate = DateTime.UtcNow.AddMonths(6),
                Token = refreshTokenString
            };

            return refreshToken;
        }
        
        private bool IsJwtWithValidSecurityAlgorithm(SecurityToken? validatedToken) {
            if (validatedToken is JwtSecurityToken jwtSecurityToken) {
                // checks if the sent token is encrypted with the right algorithm
                return jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase);
            }

            return false;
        }

        private DateTime UnixTimeStapToDateTime(long unixTimeStamp) {
            var dateTimeVal = new DateTime(1970, 1,1,0,0,0,0, DateTimeKind.Utc);
            dateTimeVal = dateTimeVal.AddSeconds(unixTimeStamp).ToUniversalTime();
            return dateTimeVal;
        }
    }
}