using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PSR.Api.Interfaces;
using PSR.Application.Models.Request;
using PSR.Auth.Configuration;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.Auth.Models.Request;
using PSR.Auth.Models.Response;
using PSR.SharedKernel;

namespace PSR.Api.Controllers.v1
{
    public class AuthController : BaseController
    {
        private readonly IAuthService _authService;
        private readonly IUserAuthFacade _authFacade;
        private readonly IMapper _mapper;

        public AuthController(
            ILoggerFactory loggerFactory,
            IAuthService authService,
            IUserAuthFacade authFacade,
            IMapper mapper) : base(loggerFactory)
        {
            _authService = authService;
            _authFacade = authFacade;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserRegistrationReq registrationReq) {
            if (!ModelState.IsValid) {
                return BadRequest(Result.Failure(new List<string>() {
                    "Invalid payload"
                }));
            }

            var result = await _authFacade.RegisterAsync(registrationReq);

            if (!result.Response.Succeeded) {
                return BadRequest(result);
            }

            /* if (result.Succeeded && !string.IsNullOrEmpty(result.RefreshToken))
                SetTokenCookie(result.RefreshToken); */
            
            return CreatedAtRoute("GetUser", new { id = result.User?.Id }, _mapper.Map<UserRegistrationRes>(result.User));
        }
        
        [HttpPost]
        [Route("authenticate")]
        public async Task<IActionResult> Login([FromBody] UserLoginReq loginReq) {
            if (!ModelState.IsValid) {
                return BadRequest(AuthRes.Failure(new List<string>() {
                    "Invalid payload"
                }));
            }

            var result = await _authFacade.LoginAsync(loginReq);

            if (result.Succeeded && !string.IsNullOrEmpty(result.RefreshToken))
                SetTokenCookie(result.RefreshToken);

            return Ok(result);
        }
        
        [HttpPost]
        [Route("refresh")]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenReq tokenReq) {
            if (!ModelState.IsValid) {
                return BadRequest(AuthRes.Failure(new List<string>() {
                    "Invalid payload"
                }));
            }

            var result = await _authService.RefreshTokenAsync(tokenReq.Token, tokenReq.RefreshToken);

            if (result.Succeeded && !string.IsNullOrEmpty(result.RefreshToken))
                SetTokenCookie(result.RefreshToken);

            return Ok(result);
        }

        [HttpPost]
        [Route("revoke")]
        public async Task<IActionResult> RevokeToken(RevokeTokenReq revokeReq)
        {
            // accept refresh token in request body or cookie
            var refreshToken = revokeReq.RefreshToken ?? Request.Cookies["refreshToken"];

            if (string.IsNullOrEmpty(refreshToken)) {
                return BadRequest(AuthRes.Failure(new List<string>() {
                    "Invalid payload"
                }));
            }

            var result = await _authService.RevokeTokenAsync(refreshToken);

            return Ok(result);
        }

        private void SetTokenCookie(string refreshToken) {
            // append cookie with refresh token to the http response
            var cookieOptions = new CookieOptions {
                HttpOnly = true,
                Expires = DateTime.UtcNow.AddDays(7)
            };
            Response.Cookies.Append("refreshToken", refreshToken, cookieOptions);
        }
    }
}