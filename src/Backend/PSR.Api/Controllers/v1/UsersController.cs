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
    public class UsersController : BaseController
    {
        private readonly IIdentityService _identityService;

        public UsersController(
            IIdentityService identityService,
            ILoggerFactory loggerFactory) : base(loggerFactory) 
        {            
            _identityService = identityService;
        }

        [HttpGet]
        public IActionResult GetAllUsers() {
            var users = _identityService.GetAllUsers();
            return Ok(users);
        }
        
    }
}