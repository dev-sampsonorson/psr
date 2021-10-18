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

        public AuthController(
            ILoggerFactory loggerFactory,
            IAuthService authService,
            IUserAuthFacade authFacade) : base(loggerFactory)
        {
            _authService = authService;
            _authFacade = authFacade;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserRegistrationReq registrationReq) {
            if (!ModelState.IsValid) {
                return BadRequest(Result.Failure(new List<string>() {
                    "Invalid payload"
                }));
            }

            var authResponse = await _authFacade.RegisterAsync(registrationReq);

            if (!authResponse.Succeeded) {
                return BadRequest(authResponse);
            }

            return Ok(authResponse);
        }
        
        [HttpPost]
        [Route("authenticate")]
        public async Task<IActionResult> Login([FromBody] UserLoginReq loginReq) {
            if (!ModelState.IsValid) {
                return BadRequest(AuthRes.Failure(new List<string>() {
                    "Invalid payload"
                }));
            }

            var response = await _authFacade.LoginAsync(loginReq);

            return Ok(response);
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
            return Ok(result);
        }
    }
}