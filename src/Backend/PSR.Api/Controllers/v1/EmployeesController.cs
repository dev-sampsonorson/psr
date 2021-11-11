using System.Net;
using Microsoft.AspNetCore.Mvc;
using PSR.Api.Helpers;
using PSR.Application.Common.Models.Request;
using PSR.Application.Common.Models.Response;
using PSR.Application.Interfaces;
using PSR.Application.Models.Request;
using PSR.Application.Models.Response;
using PSR.Application.Repository;
using PSR.Domain;

namespace PSR.Api.Controllers.v1
{
    public class EmployeesController : BaseController
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly ISkillRepository _skillRepository;
        private readonly IEmployeeManagementService _employeeManagementService;

        public EmployeesController(
            IEmployeeRepository employeeRepository, 
            ISkillRepository skillRepository,
            IEmployeeManagementService employeeManagementService,
            ILoggerFactory loggerFactory
        ) : base(loggerFactory)
        {

            ArgumentNullException.ThrowIfNull(employeeRepository, nameof(employeeRepository));
            ArgumentNullException.ThrowIfNull(skillRepository, nameof(skillRepository));
            ArgumentNullException.ThrowIfNull(employeeManagementService, nameof(employeeManagementService));

            _employeeRepository = employeeRepository;
            _skillRepository = skillRepository;
            _employeeManagementService = employeeManagementService;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployees() {

            var employees = await _employeeRepository.ListAsync();

            return Ok(employees);
        }

        // https://www.jerriepelser.com/blog/paging-in-aspnet-webapi-pagination-links/
        [HttpGet]
        [Route("items", Name = nameof(GetEmployees))]
        public async Task<IActionResult> GetEmployees([FromQuery] PaginatedItemsReq request) {
            // page => must be greater than 0
            // pageSize => must be greater than 0
            // pageSize => 

            var result = await _employeeManagementService.GetEmployees(request.Page, request.PageSize);
            var builder = new PaginationLinkBuilder<EmployeeRes>(Url, nameof(GetEmployees), request.Page, request.PageSize, result.TotalRecords, result.Employees);

            return Ok(builder.BuildResponse());
        }

        // [HttpPost("{id}/skills/add")]
        [HttpPost("add-skill-rating")]
        public async Task<IActionResult> AddSkillToEmployee(AddSkillToEmployeeReq request) {
            
            var response = await _employeeManagementService.AddSkillRatingToEmployee(request);


            return Ok(response);
            
        }

        [HttpPut("update-skill-rating")]
        public async Task<IActionResult> UpdateEmployeeSkillRating(UpdateEmployeeSkillRatingReq request) {
            
            var response = await _employeeManagementService.UpdateSkillRatingToEmployee(request);


            return Ok(response);
            
        }
    }
}