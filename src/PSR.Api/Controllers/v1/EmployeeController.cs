using Microsoft.AspNetCore.Mvc;
using PSR.Application.Repository;

namespace PSR.Api.Controllers.v1
{
    public class EmployeeController : BaseController
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(IEmployeeRepository employeeRepository, ILoggerFactory loggerFactory) : base(loggerFactory)
        {
            _employeeRepository = employeeRepository ?? throw new ArgumentNullException(nameof(employeeRepository));
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployees() {

            var employees = await _employeeRepository.ListAsync();

            return Ok(employees);
        }
    }
}