using PSR.Application.Common.Exceptions;
using PSR.Application.Common.Models;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.Auth.Models.Request;

namespace PSR.Auth.Services
{
    public class UserService : IUserService
    {
        private readonly IIdentityService _identityService;
        
        public UserService(IIdentityService identityService) {
            _identityService = identityService;
        }

        public async Task<Result<ApplicationUser>> LoginAsync(UserLoginReq loginReq) {
            // get ApplicationUser
            var applicationUser = await _identityService.GetUserByEmailAsync(loginReq.Email);

            if (applicationUser == null)
                throw new AppException("Login failed", "Invalid authentication request");

            // verify user name and password
            var isValid = await _identityService.VerifyPassword(applicationUser, loginReq.Password);

            if (!isValid)
                throw new AppException("Login failed", "Invalid authentication request");


            return Result<ApplicationUser>.Success(applicationUser);
        }
        
        public async Task<ApplicationUser> RegisterAsync(UserRegistrationReq registrationReq) {
            // check if the email exist
            var applicationUser = await _identityService.GetUserByEmailAsync(registrationReq.Email);
            if (applicationUser is not null)
                throw new AppException("Registration failed", "Email already in use");         

            var userToSave = new ApplicationUser {
                Email = registrationReq.Email,
                UserName = registrationReq.Email,
                EmailConfirmed = true // TODO build email functionality to send to the user to confirm email
            };

            // register user
            var identityResult = await _identityService.CreateUserAsync(userToSave, registrationReq.Password);
            if (!identityResult.Succeeded)
                throw new AppException("Registration failed", identityResult.Errors);

            return userToSave;
        }
        
    }
}