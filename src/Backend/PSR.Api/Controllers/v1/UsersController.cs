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
    public class UsersController : BaseController
    {
        private readonly IIdentityService _identityService;
        private readonly IMapper _mapper;

        public UsersController(
            IIdentityService identityService,
            ILoggerFactory loggerFactory,
            IMapper mapper) : base(loggerFactory) 
        {            
            _identityService = identityService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllUsers() {
            var users = _identityService.GetAllUsers();
            return Ok(users);
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(string id) {
            var user = await _identityService.GetUserByIdAsync(id);
            return Ok(_mapper.Map<UserRegistrationRes>(user));
        }

        [HttpPost("exists")]
        public async Task<IActionResult> CheckEmailExists(EmailExistsReq request) {
            var userExists = await _identityService.GetUserByEmailAsync(request.Email);
            if (userExists is null)
                return Ok(Result<string>.Success("valid"));

            return Ok(Result<string>.Success("invalid", $"User with {request.Email} exists"));

            // return Conflict(Result.Failure());
        }        
    }
}