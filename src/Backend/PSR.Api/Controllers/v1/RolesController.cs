using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PSR.Api.Interfaces;
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
    public class RolesController : BaseController
    {
        private readonly IIdentityService _identityService;

        public RolesController(
            IIdentityService identityService,
            ILoggerFactory loggerFactory) : base(loggerFactory) 
        {            
            _identityService = identityService;
        }

        [HttpGet]
        public IActionResult GetAllRoles() {
            var roles = _identityService.GetAllRoles();
            return Ok(roles);
        }

        [HttpPost]
        public async Task<IActionResult> CreateRole(string name) {
            var roleResult = await _identityService.CreateRoleAsync(name);

            if (!roleResult.Succeeded)
                return BadRequest(new {
                    error = $"The role {name} has not been added"
                });  
            
            return Ok(Result.Success($"The role {name} has been added successfully"));          
        }

        [HttpPost]
        [Route("AddUserToRole")]
        public async Task<IActionResult> AddUserToRole([FromBody] AddUserToRoleReq request) {
            var result = await _identityService.AddUserToRoleAsync(request.Email, request.RoleName);

            if (!result.Succeeded)
                return BadRequest(Result.Failure("The user was not able to be added to the role"));

            return Ok(Result.Success("User has been added to the role"));            
        }

        [HttpGet]
        [Route("GetUserRoles")]
        public async Task<IActionResult> GetUserRoles(string email) {
            var rolesResult = await _identityService.GetUserRolesAsync(email);

            return Ok(rolesResult.Value);
        }

        [HttpPost]
        [Route("RemoveUserFromRole")]
        public async Task<IActionResult> RemoveUserFromRole(RemoveUserFromRoleReq request) {  
            var result = await _identityService.RemoveUserFromRoleAsync(request.Email, request.RoleName);

            return Ok(Result.Success($"User {request.Email} has been removed from role {request.RoleName}"));
        }
    }
}