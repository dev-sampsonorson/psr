using AutoMapper;
using PSR.Api.Interfaces;
using PSR.Application.Common.Exceptions;
using PSR.Application.Common.Mappings;
using PSR.Application.Repository;
using PSR.Auth.Interfaces;
using PSR.Auth.Models.Request;
using PSR.Auth.Models.Response;
using PSR.Domain;
using PSR.SharedKernel.Exceptions;

namespace PSR.Api.Services
{
    public class AuthService : IAuthService
    {
        private readonly ITokenManagerService _tokenManager;
        private readonly IIdentityService _identityService;
        private readonly IUserService _userService;
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IMapper _mapper;

        public AuthService(
            ITokenManagerService tokenManager,
            IUserService userService,
            IEmployeeRepository employeeRepository,
            IIdentityService identityService,
            IMapper mapper) {
            _tokenManager = tokenManager;
            _userService = userService;
            _employeeRepository = employeeRepository;
            _identityService = identityService;
            _mapper = mapper;
        }

        public async Task<UserAuthRes> LoginAsync(UserLoginReq loginReq) {
            var result = await _userService.LoginAsync(loginReq);
            var user = result.Value;

            if (!result.Succeeded || user is null)
                throw new AppException("Login failed", result.Errors);
            
            var employee = await _employeeRepository.GetByUserIdAsync(user.Id);

            // Generate Jwt token
            var tokenResult = await _tokenManager.JwtTokenAsync(
                user, employee.Id, employee.FirstName, employee.LastName);

            return _mapper.MergeInto<UserAuthRes>(user, employee, tokenResult);
        }

        public async Task<UserAuthRes> RegisterAsync(UserRegistrationReq registrationReq)
        {
            var user = await _userService.RegisterAsync(registrationReq);

            // add user to role
            var role = await _identityService.GetRoleByNameAsync("AppUser");
            if (role is not null)
               await _identityService.AddUserToRoleAsync(user, "AppUser");

            // Register employee
            var employeeToSave = new Employee {
                UserId = user.Id,
                FirstName = registrationReq.FirstName,
                LastName = registrationReq.LastName,
                TimeZone = registrationReq.TimeZone,
                WorkHours = registrationReq.WorkHours,
                CoreHours = registrationReq.CoreHours,
                Country = registrationReq.Country,
                Status = EmployeeStatus.Active
            };

            await _employeeRepository.AddAsync(employeeToSave);

            if (await _employeeRepository.UnitOfWork.SaveEntitiesAsync() <= 0) {
                throw new AppException("Registration failed", "Registration unsuccessful");
            }

            // Generate Jwt token
            var tokenResult = await _tokenManager.JwtTokenAsync(
                user, employeeToSave.Id, registrationReq.FirstName, registrationReq.LastName);

            if (!tokenResult.Succeeded)
                throw new AppException("Registration failed", "Token generation failed");

            return _mapper.MergeInto<UserAuthRes>(user, employeeToSave, tokenResult);
            

            // Generate Jwt token
            /* return await _authService.JwtTokenAsync(
                regResponse.User, registrationReq.FirstName, registrationReq.LastName); */
        }

        public async Task<UserRes> GetUserByIdAysnc(string userId) {
            var user = await _identityService.GetUserByIdAsync(userId);
            if (user is null)
                throw new EntityNotFoundException(nameof(user), userId);
            
            var employee = await _employeeRepository.GetByUserIdAsync(userId);
            if (employee is null)
                throw new EntityNotFoundException(nameof(employee), userId);

            return _mapper.MergeInto<UserRes>(user, employee);
        }
    }
}