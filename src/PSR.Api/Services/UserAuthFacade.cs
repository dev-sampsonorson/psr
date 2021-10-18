using PSR.Api.Interfaces;
using PSR.Application.Models.Request;
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
        private readonly IAuthService _authService;
        private readonly IEmployeeRepository _employeeRepository;

        public UserAuthFacade(
            IAuthService authService,
            IEmployeeRepository employeeRepository) {
            _authService = authService;
            _employeeRepository = employeeRepository;
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

        public async Task<AuthRes> RegisterAsync(UserRegistrationReq registrationReq)
        {
            var regResponse = await _authService.RegisterAsync(registrationReq);
            if (!regResponse.Response.Succeeded || regResponse.User is null) {
                return regResponse.Response;
            }

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
                return AuthRes.Failure(new List<string>() {
                    "Registration unsuccessful"
                });
            }

            // Generate Jwt token
            return await _authService.JwtTokenAsync(
                regResponse.User, registrationReq.FirstName, registrationReq.LastName);
        }
    }
}