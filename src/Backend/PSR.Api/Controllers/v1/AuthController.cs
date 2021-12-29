using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PSR.Api.Interfaces;
using PSR.Application.Common.Exceptions;
using PSR.Application.Common.Models;
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
        private readonly ITokenManagerService _tokenManager;
        private readonly JwtSettings _jwtSettings;

        public AuthController(
            ILoggerFactory loggerFactory,
            IAuthService authService,
            IOptionsMonitor<JwtSettings> optionsMonitor,
            ITokenManagerService tokenManager) : base(loggerFactory)
        {
            _authService = authService;
            _jwtSettings = optionsMonitor.CurrentValue;
            _tokenManager = tokenManager;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserRegistrationReq registrationReq) {
            var userResponse = await _authService.RegisterAsync(registrationReq);

            if (!string.IsNullOrEmpty(userResponse.RefreshToken))
                SetTokenCookie(userResponse.RefreshToken);

            return CreatedAtRoute("GetUser", new { id = userResponse.Id }, userResponse);
        }
        
        [HttpPost]
        [Route("authenticate")]
        public async Task<IActionResult> Login([FromBody] UserLoginReq loginReq) {
            var userResponse = await _authService.LoginAsync(loginReq);

            if (!string.IsNullOrEmpty(userResponse.RefreshToken))
                SetTokenCookie(userResponse.RefreshToken);

            return Ok(userResponse);
        }
        
        [HttpPost]
        [Route("refresh")]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenReq tokenReq) {
            // accept refresh token in request body or cookie
            var refreshToken = string.IsNullOrEmpty(tokenReq.RefreshToken) 
                ? Request.Cookies["refreshToken"]
                : tokenReq.RefreshToken;

            if (refreshToken is null)
                throw new RequestFormatException(nameof(refreshToken));

            var result = await _tokenManager.RefreshTokenAsync(tokenReq.Token, refreshToken);

            if (!string.IsNullOrEmpty(result.RefreshToken))
                SetTokenCookie(result.RefreshToken);

            return Ok(result);
        }

        [HttpPost]
        [Route("revoke")]
        [Authorize]
        public async Task<IActionResult> RevokeToken(RevokeTokenReq revokeReq)
        {            
            // accept refresh token in request body or cookie
            var refreshToken = string.IsNullOrEmpty(revokeReq.RefreshToken) 
                ? (revokeReq.RefreshToken ?? Request.Cookies["refreshToken"]) 
                : revokeReq.RefreshToken;

            if (string.IsNullOrEmpty(refreshToken)) {
                throw new AppException("Logout failed", "Invalid payload");
            }

            var result = await _tokenManager.RevokeTokenAsync(refreshToken);
            if (!result.Succeeded) {
                throw new AppException("Logout failed", "Revoke failed");
            }

            Response.Cookies.Delete("refreshToken");

            return Ok(result.Succeeded);
        }

        private void SetTokenCookie(string refreshToken) {
            // append cookie with refresh token to the http response
            var cookieOptions = new CookieOptions {
                HttpOnly = true,
                // Expires = _tokenManager.CalcJwtExpiration(_jwtSettings),
                Expires = DateTime.UtcNow.Add(_jwtSettings.CookieTokenLifetime)
            };
            Response.Cookies.Append("refreshToken", refreshToken, cookieOptions);
        }
    }
}