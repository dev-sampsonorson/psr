using AutoMapper;
using PSR.Api.Interfaces;
using PSR.Application.Common.Exceptions;
using PSR.Application.Common.Mappings;
using PSR.Application.Repository;
using PSR.Auth.Interfaces;
using PSR.Auth.Models.Request;
using PSR.Auth.Models.Response;
using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Api.Services
{
    public class UserAuthFacade : IUserAuthFacade
    {
        private readonly IIdentityService _identityService;
        private readonly IAuthService _authService;
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IMapper _mapper;

        public UserAuthFacade(
            IAuthService authService,
            IEmployeeRepository employeeRepository,
            IIdentityService identityService,
            IMapper mapper) {
            _authService = authService;
            _employeeRepository = employeeRepository;
            _identityService = identityService;
            _mapper = mapper;
        }

        public async Task<AuthRes> LoginAsync(UserLoginReq loginReq) {
            var result = await _authService.LoginAsync(loginReq);
            if (!result.Response.Succeeded || result.User is null) {
                return result.Response;
            }

            
            var employee = await _employeeRepository.GetByUserIdAsync(result.User.Id);

            // Generate Jwt token
            return await _authService.JwtTokenAsync(
                result.User, employee.FirstName, employee.LastName);
        }

        public async Task<UserRegistrationRes> RegisterAsync(UserRegistrationReq registrationReq)
        {
            var regResponse = await _authService.RegisterAsync(registrationReq);
            if (!regResponse.Response.Succeeded || regResponse.User is null) {
                throw new AppException(regResponse.Response.Errors);
            }

            // add user to role
            var role = await _identityService.GetRoleByNameAsync("AppUser");

            if (role is not null)
               await _identityService.AddUserToRoleAsync(regResponse.User, "AppUser");

            // Register employee
            var newEmployee = new Employee {
                UserId = regResponse.User.Id,
                FirstName = registrationReq.FirstName,
                LastName = registrationReq.LastName,
                TimeZone = registrationReq.TimeZone,
                WorkHours = registrationReq.WorkHours,
                CoreHours = registrationReq.CoreHours,
                Country = registrationReq.Country,
                Status = EmployeeStatus.Active
            };

            await _employeeRepository.AddAsync(newEmployee);
            var isSuccessful = await _employeeRepository.UnitOfWork.SaveEntitiesAsync();
            if (!isSuccessful) {
                throw new AppException("Registration unsuccessful");
            }

            // Generate Jwt token
            var tokenResult = await _authService.JwtTokenAsync(
                regResponse.User, registrationReq.FirstName, registrationReq.LastName);

            if (!tokenResult.Succeeded)
                throw new AppException("Token generation failed");

            return _mapper.MergeInto<UserRegistrationRes>(regResponse.User, newEmployee, tokenResult);
            

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