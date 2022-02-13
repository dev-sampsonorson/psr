using System.Net;
using AutoMapper;
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
        private readonly ISkillService _skillService;
        private readonly IMapper _mapper;

        public EmployeesController(
            IEmployeeRepository employeeRepository, 
            ISkillRepository skillRepository,
            IEmployeeManagementService employeeManagementService,
            ISkillService skillService, 
            IMapper mapper,
            ILoggerFactory loggerFactory
        ) : base(loggerFactory)
        {

            ArgumentNullException.ThrowIfNull(employeeRepository, nameof(employeeRepository));
            ArgumentNullException.ThrowIfNull(skillRepository, nameof(skillRepository));
            ArgumentNullException.ThrowIfNull(employeeManagementService, nameof(employeeManagementService));
            ArgumentNullException.ThrowIfNull(skillService, nameof(skillService));
            ArgumentNullException.ThrowIfNull(mapper, nameof(mapper));

            _employeeRepository = employeeRepository;
            _skillRepository = skillRepository;
            _employeeManagementService = employeeManagementService;
            _skillService = skillService;
            _mapper = mapper;
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
        public async Task<IActionResult> AddSkillToEmployee(AddEmployeeSkillRatingReq request) {
            
            var response = await _employeeManagementService.AddSkillRatingToEmployee(request);


            return Ok(response);
            
        }

        [HttpPut("update-skill-rating")]
        public async Task<IActionResult> UpdateEmployeeSkillRating(UpdateEmployeeSkillRatingReq request) {
            
            var response = await _employeeManagementService.UpdateSkillRatingToEmployee(request);


            return Ok(response);
            
        }

        [HttpPost("upsert-skill-rating")]
        public async Task<IActionResult> UpsertEmployeeSkillRating(UpsertSkillRatingReq request) {
            var isRatingAssigned = await _employeeManagementService.IsRatingAssigned(request.EmployeeId, request.SkillId);

            if(isRatingAssigned) {
                // var updateReq = _mapper.Map<UpsertEmployeeSkillRatingReq, UpdateEmployeeSkillRatingReq>(request);
                var updateRes = await _employeeManagementService.UpdateSkillRating(request.EmployeeId, request.SkillId, request.Rating);
                return Ok(_mapper.Map<SkillRatingRes, UpsertSkillRatingRes>(updateRes));
            }
            
            // var addReq = _mapper.Map<UpsertEmployeeSkillRatingReq, AddEmployeeSkillRatingReq>(request);
            var addRes = await _employeeManagementService.AddSkillRating(request.EmployeeId, request.SkillId, request.Rating);
            return Ok(_mapper.Map<SkillRatingRes, UpsertSkillRatingRes>(addRes));
            
        }

        [HttpGet()]
        [Route("{employeeId}/categories")]
        public async Task<IActionResult> GetSkillCategoriesByEmployee(Guid employeeId) {
            return Ok(await _skillService.GetSkillCategoriesByEmployeeAsync(employeeId));
        }

        [HttpGet()]
        [Route("{employeeId}/categories/{categoryId}/subcategories")]
        public async Task<IActionResult> GetSkillSubCategoriesByEmployee(Guid categoryId, Guid employeeId) {
            return Ok(await _skillService.GetSkillSubCategoriesByEmployeeAsync(employeeId, categoryId));
        }

        [HttpGet]
        [Route("{employeeId}/categories/{categoryId}/subcategories/{subcategoryId}/skills")]
        public async Task<IActionResult> GetSkillsByEmployee(Guid categoryId, Guid subcategoryId, Guid employeeId) {
            return Ok(await _skillService.GetSkillsByEmployeeAsync(employeeId, categoryId, subcategoryId));            
        }

        [HttpGet]
        [Route("{employeeId}/categories/{categoryId}/subcategories/{subcategoryId}/skillratings")]
        public async Task<IActionResult> GetSkillRatingsByEmployee(Guid categoryId, Guid subcategoryId, Guid employeeId) {
            return Ok(await _employeeManagementService.GetSkillRatingsAsync(categoryId, subcategoryId, employeeId));            
        }
    }
}