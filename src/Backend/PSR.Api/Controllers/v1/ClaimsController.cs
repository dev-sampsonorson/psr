using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using PSR.Api.Interfaces;
using PSR.Application.Models.Request;
using PSR.Auth.Configuration;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.Auth.Models.Request;
using PSR.Auth.Models.Response;
using PSR.SharedKernel;
using PSR.Application.Common.Models;

namespace PSR.Api.Controllers.v1
{
    public class ClaimsController : BaseController
    {
        private readonly IIdentityService _identityService;

        public ClaimsController(
            IIdentityService identityService,
            ILoggerFactory loggerFactory) : base(loggerFactory) 
        {            
            _identityService = identityService;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllClaims(string email) {
            var user = await _identityService.GetUserByEmailAsync(email);
            if (user is null)
                return BadRequest(Result.Failure("User does not exist"));

            var userClaims = await _identityService.GetClaimsAsync(user);

            return Ok(userClaims);
        }

        [HttpPost]
        [Route("AddClaimToUser")]
        public async Task<IActionResult> AddClaimToUser(AddClaimToUserReq request) {
            var user = await _identityService.GetUserByEmailAsync(request.Email);
            if (user is null)
                return BadRequest(Result.Failure("User does not exist"));

            var userClaim = new Claim(request.ClaimName, request.ClaimValue);
            var result = await _identityService.AddClaimAsync(user, userClaim);

            if (!result.Succeeded) {
                return BadRequest(result);
            }

            return Ok(Result.Success($"User {user.Email} has a claim {request.ClaimName} added to them"));
        }

        [HttpPost]
        [Route("RemoveClaimFromUser")]
        public async Task<IActionResult> RemoveClaimFromUser(AddClaimToUserReq request) {
            var user = await _identityService.GetUserByEmailAsync(request.Email);
            if (user is null)
                return BadRequest(Result.Failure("User does not exist"));

            var userClaim = new Claim(request.ClaimName, request.ClaimValue);
            var result = await _identityService.RemoveClaimFromUser(user, userClaim);

            if (!result.Succeeded) {
                return BadRequest(result);
            }

            return Ok(Result.Success($"Claim {request.ClaimName} has been removed from user {user.Email}"));
        }
    }
}