using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using BlitzkriegSoftware.SecureRandomLibrary;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PSR.Application.Common.Exceptions;
using PSR.Application.Common.Mappings;
using PSR.Auth.Configuration;
using PSR.Auth.Domain;
using PSR.Auth.Exceptions;
using PSR.Auth.Interfaces;
using PSR.Auth.Models.Response;

namespace PSR.Auth.Services
{
    public class TokenManagerService : ITokenManagerService
    {
        private readonly IIdentityService _identityService;
        private readonly JwtSettings _jwtSettings;
        private readonly TokenValidationParameters _tokenValidationParams;
        private readonly IRefreshTokenRepository _refreshTokenRepository;
        private readonly IMapper _mapper;
        
        public TokenManagerService(
            IIdentityService identityService, 
            IOptionsMonitor<JwtSettings> optionsMonitor,
            TokenValidationParameters tokenValidationParams,
            IRefreshTokenRepository refreshTokenRepository,
            IMapper mapper) 
        {
            _identityService = identityService;
            _jwtSettings = optionsMonitor.CurrentValue;
            _tokenValidationParams = tokenValidationParams;
            _refreshTokenRepository = refreshTokenRepository;
            _mapper = mapper;
        }
        
        public async Task<UserAuthRes> RefreshTokenAsync(string token, string refreshToken) {
            var jwtTokenHanlder = new JwtSecurityTokenHandler();

            try {
                // make sure the token is a valid jwt token and not a random string
                var claimsPrincipal = jwtTokenHanlder.ValidateToken(token, _tokenValidationParams, out var validatedToken);

                // Validation 2 - Validate encryption algorithm
                // is it a JwtSecurityToken
                // IsJwtWithValidSecurityAlgorithm
                if (!IsJwtWithValidSecurityAlgorithm(validatedToken)) {
                    throw new AppException("Authentication failed", "Invalid authentication request");
                    /* return AuthRes.Failure(new List<string> {
                        "Invalid authentication request"
                    }); */
                }
                
                // check that the token is not expired
                var utcExpiryDate = long.Parse(claimsPrincipal?.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp)?.Value ?? "0");
                var expiryDate = UnixTimeStapToDateTime(utcExpiryDate);
                if (expiryDate > DateTime.UtcNow) {
                    throw new AppException("Authentication failed", "Token has not yet expired");
                    /* return AuthRes.Failure(new List<string> {
                        "Token has not yet expired"
                    }); */
                }
                
                // does the token exists in our database
                var storedRefreshToken = await _refreshTokenRepository.GetByRefreshTokenAsync(refreshToken);
                if (storedRefreshToken is null) {
                    throw new AppException("Authentication failed", "Token does not exist");
                    /* return AuthRes.Failure(new List<string> {
                        "Token does not exist"
                    }); */
                }
                
                // has refresh token been used
                if (storedRefreshToken.IsUsed) {
                    throw new AppException("Authentication failed", "Token has been used");
                    /* return AuthRes.Failure(new List<string> {
                        "Token has been used"
                    }); */
                }

                // validate if revoked
                if (storedRefreshToken.IsRevorked) {
                    throw new AppException("Authentication failed", "Token has been revoked");
                    /* return AuthRes.Failure(new List<string> {
                        "Token has been revoked"
                    }); */
                }

                // matches jti in our db and validate it (id)
                var jti = claimsPrincipal?.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Jti)?.Value ?? "";
                if (storedRefreshToken.JwtId != jti) {  
                    throw new AppException("Authentication failed", "Token doesn't match");
                    /* return AuthRes.Failure(new List<string> {
                        "Token doesn't match"
                    }); */
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
                var tokenResult = await JwtTokenAsync(userExisting, firstName, lastName);
                
                var userAuthResponse = _mapper.MergeInto<UserAuthRes>(userExisting, tokenResult);
                userAuthResponse.FirstName = firstName;
                userAuthResponse.LastName = lastName;

                return userAuthResponse;
            } catch(Exception ex) {
                if(ex.Message.Contains("Lifetime validation failed. The token is expired.")) {
                    throw new AppException("Authentication failed", "Token has expired please re-login");
                    /* return AuthRes.Failure(new List<string> {
                        "Token has expired please re-login"
                    }); */               
                }

                // throw new AppException("Authentication failed", "Something went wrong.");
                /* return AuthRes.Failure(new List<string> {
                    "Something went wrong."
                }); */
                throw;
            }
        }

        public async Task ChangePreviousTokensToUsedAsync(string userId) {
            await _refreshTokenRepository.ChangePreviousTokensToUsedAsync(userId);
        }

        public async Task<AuthRes> JwtTokenAsync(ApplicationUser user, string firstName, string lastName) {
            var jwtHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtSettings.Secret);

            var claims = await GetAllValidClaimsAsync(user, firstName, lastName);

            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.Add(_jwtSettings.TokenLifetime), // TODO: update the expiration time to minutes
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature // TODO: review the algorithm
                )
            };
            
            var token = jwtHandler.CreateToken(tokenDescriptor);
            var jwtToken = jwtHandler.WriteToken(token);

            await ChangePreviousTokensToUsedAsync(user.Id);

            var refreshToken = GenerateRefreshToken(token.Id, user.Id);

            await _refreshTokenRepository.AddAsync(refreshToken);
            RemoveOldRefreshTokens(user.Id);
            await _refreshTokenRepository.UnitOfWork.SaveEntitiesAsync();           
            

            return AuthRes.Success(jwtToken, refreshToken.Token);
        }
        
        public async Task<AuthRes> RevokeTokenAsync(string refreshToken) {
            var token = await _refreshTokenRepository.GetByRefreshTokenAsync(refreshToken);
            if (token is null) {                
                return AuthRes.Failure(new List<string> {
                    "Invalid token"
                });
            }

            var user = await _identityService.GetUserByIdAsync(token.UserId);

            if (token.IsUsed || token.IsRevorked) {
                return AuthRes.Failure(new List<string> {
                    "Invalid token"
                });
            }

            // revoke token and save
            RevokeRefreshToken(token, "Revoked without replacement");

            var result = await _refreshTokenRepository.UnitOfWork.SaveEntitiesAsync();

            if (!result) {
                return AuthRes.Failure(new List<string> {
                    "Revoke token failed"
                });
            }

            return AuthRes.Success("Token revoked");
        }

        public string ExtractUserIdFromJwtToken(string token) {
            if (string.IsNullOrEmpty(token))
                throw new InvalidJwtTokenException("Token not found");

            try {
                var jwtTokenHanlder = new JwtSecurityTokenHandler();
    
                // make sure the token is a valid jwt token and not a random string
                var claimsPrincipal = jwtTokenHanlder.ValidateToken(token, _tokenValidationParams, out var validatedToken);
    
                // Validation 2 - Validate encryption algorithm
                // is it a JwtSecurityToken
                // IsJwtWithValidSecurityAlgorithm
                if (!IsJwtWithValidSecurityAlgorithm(validatedToken)) {
                    throw new InvalidJwtTokenException("Invalid authentication request");
                }

                // check if the token is expired
                var utcExpiryDate = long.Parse(claimsPrincipal?.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp)?.Value ?? "0");
                var expiryDate = UnixTimeStapToDateTime(utcExpiryDate);
                if (expiryDate < DateTime.UtcNow) {
                    throw new InvalidJwtTokenException("Token has not yet expired");
                }
                
                var userId = claimsPrincipal?.Claims.FirstOrDefault(x => x.Type == AuthClaimTypes.UserId)?.Value ?? "";

                return userId;

            } catch {
                throw;
            }
        }
        
        private async Task<List<Claim>> GetAllValidClaimsAsync(ApplicationUser user, string firstName, string lastName) {
            var _options = new IdentityOptions();
            var claims = new List<Claim> {
                new Claim(AuthClaimTypes.UserId, user.Id),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(AuthClaimTypes.FirstName, firstName),
                new Claim(AuthClaimTypes.LastName, lastName),
            };

            // Getting the claims that we have assigned to the user
            var userClaims = await _identityService.GetClaimsAsync(user);
            claims.AddRange(userClaims);

            // Get the user role and ad it to the claims
            var userRoles = await _identityService.GetRolesAsync(user);
            foreach(var userRole  in userRoles) {
                var role = await _identityService.GetRoleByNameAsync(userRole);

                if (role != null) {
                    claims.Add(new Claim(ClaimTypes.Role, userRole));

                    var roleClaims = await _identityService.GetClaimsAsync(role);
                    foreach(var roleClaim in roleClaims) {
                        claims.Add(roleClaim);
                    }
                }
            }

            return claims;
        }
        private void RevokeRefreshToken(RefreshToken token, string? reason = null) {
            // string ipAddress, string reason = null, string replacedByToken = null
            token.IsRevorked = true;
            token.RevokedDate = DateTime.UtcNow;
            token.ReasonRevoked = reason;
        }

        private RefreshToken GenerateRefreshToken(string securityTokenId, string userId) {
            var secureRandom = new SecureRandom();
            var randomBytes = new byte[64];
            secureRandom.NextBytes(randomBytes);
            var refreshTokenString = Convert.ToBase64String(randomBytes);

            var refreshTokenExpiry = DateTime.UtcNow.AddMonths(6);

            var refreshToken = new RefreshToken() {
                JwtId = securityTokenId,
                IsUsed = false,
                IsRevorked = false,
                UserId = userId,
                AddedDate = DateTime.UtcNow,
                ExpiryDate = refreshTokenExpiry,
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
        private void RemoveOldRefreshTokens(string userId) {
            // remove old used refresh tokens based on TTL
            _refreshTokenRepository.Delete(x => x.IsUsed &&
                    x.AddedDate.AddDays(_jwtSettings.RefreshTokenTTL) <= DateTime.UtcNow);
        }

        
        
    }
}