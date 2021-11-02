using AutoMapper;
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
    public class UsersController : BaseController
    {
        private readonly IAuthService _authService;
        private readonly IIdentityService _identityService;
        private readonly IMapper _mapper;

        public UsersController(
            IAuthService authService,
            IIdentityService identityService,
            ILoggerFactory loggerFactory,
            IMapper mapper) : base(loggerFactory) 
        {
            _authService = authService;
            _identityService = identityService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllUsers() {
            var users = _identityService.GetAllUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(string id) {

            var user = await _authService.GetUserByIdAysnc(id);

            return Ok(user);

            /* var user = await _identityService.GetUserByIdAsync(id);

            if (user is null)
                throw new EntityNotFoundException(nameof(user), id);

            return Ok(_mapper.Map<ApplicationUser, UserRegistrationRes>(user)); */
        }

        [HttpPost("exists")]
        public async Task<IActionResult> CheckUserExists(CheckUserExistsReq request) {
            var userExists = await _identityService.GetUserByEmailAsync(request.Email);

            if (userExists is not null)
                return Ok(Result<string>.Success("invalid"));

            return Ok(Result<string>.Success("valid"));
        }
        
    }
}