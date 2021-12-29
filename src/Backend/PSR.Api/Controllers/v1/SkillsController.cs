using System.Text.RegularExpressions;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PSR.Application.Common.Models;
using PSR.Application.Common.Models.Response;
using PSR.Application.Interfaces;
using PSR.Application.Models.Request;
using PSR.Application.Models.Response;
using PSR.Application.Repository;
using PSR.Auth.Validators;
using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Api.Controllers.v1
{
    public class SkillsController : BaseController
    {

        private readonly ISkillService _skillService;
        private readonly IUnitOfWork _unitOfWork;

        public SkillsController(
            ISkillService skillService, 
            IUnitOfWork unitOfWork,
            ILoggerFactory loggerFactory

        ) : base(loggerFactory)
        {
            ArgumentNullException.ThrowIfNull(nameof(skillService));

            _skillService = skillService;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetSkills() {
            return Ok(await _skillService.GetSkills());            
        }

        [HttpGet]
        [Route("categories/{categoryId}/subcategories/{subcategoryId}/list")]
        public async Task<IActionResult> GetSkills(Guid categoryId, Guid subcategoryId) {
            return Ok(await _skillService.GetSkills(categoryId, subcategoryId));            
        }

        [HttpGet]
        [Route("categories/{categoryId}/subcategories/{subcategoryId}/list/{employeeId}")]
        public async Task<IActionResult> GetSkillsByEmployee(Guid categoryId, Guid subcategoryId, Guid employeeId) {
            return Ok(await _skillService.GetSkillsByEmployeeAsync(employeeId, categoryId, subcategoryId));            
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSkill(Guid id) {
            var result = await _skillService.GetSkill(id);

            return Ok(result);
            // return Ok(await _skillService.GetSkill(id));
        }

        [HttpGet("categories/{id}")]
        public async Task<IActionResult> GetCategory(Guid id) {
            return Ok(await _skillService.GetCategory(id));
        }

        [HttpGet("subcategories/{id}")]
        public async Task<IActionResult> GetSubCategory(Guid id) {
            return Ok(await _skillService.GetSubCategory(id));
        }

        [HttpGet()]
        [Route("categories")]
        public IActionResult GetSkillCategories() {
            return Ok(_skillService.GetSkillCategories());
        }

        [HttpGet()]
        [Route("subcategories")]
        public IActionResult GetSkillSubCategories() {
            return Ok(_skillService.GetSkillSubCategories());
        }

        [HttpGet()]
        [Route("categories/{categoryId}/subcategories")]
        public async Task<IActionResult> GetSkillSubCategories(Guid categoryId) {
            return Ok(await _skillService.GetSkillSubCategoryByCategoryAsync(categoryId));
        }

        [HttpPost("categories")]
        public async Task<IActionResult> CreateCategory([FromBody] AddSkillCategoryReq request) {
            var response = await _skillService.CreateCategory(request);
            return CreatedAtAction(nameof(GetCategory), new { id = response.Id }, response);
        }

        [HttpPost("subcategories")]
        public async Task<IActionResult> CreateSubCategory([FromBody] AddSkillSubCategoryReq request) {
            var response = await _skillService.CreateSubCategory(request);
            return CreatedAtAction(nameof(GetSubCategory), new { id = response.Id }, response);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSkill([FromBody] AddSkillReq request) {
            var response = await _skillService.CreateSkill(request);
            return CreatedAtAction(nameof(GetSkill), new { id = response.Id }, response);          
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSkill([FromBody] UpdateSkillReq request) {
            var response = await _skillService.UpdateSkill(request);
            return CreatedAtAction(nameof(GetSkill), new { id = response.Id }, response);          
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteSkill([FromRoute] DeleteSkillReq request) {
            // throw new Exception();
            var skill = await _skillService.GetSkill(request.Id);

            if (skill is null)
                return NotFound();

            await _skillService.DeleteSkill(request);
            return NoContent();     
        }

        /* [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id) {
            var existItem = await _context.Items.FirstOrDefaultAsync(x => x.Id == id);

            if (existItem == null)
                return NotFound();

            _context.Items.Remove(existItem);
            await _context.SaveChangesAsync();

            return Ok(existItem);




            var owner = _repository.Owner.GetOwnerById(id);
        if(owner == null)
        {
            _logger.LogError($"Owner with id: {id}, hasn't been found in db.");
            return NotFound();
        }
        _repository.Owner.DeleteOwner(owner);
                _repository.Save();
        return NoContent();
        } */
        
        
        [HttpPost("slug-exists")]
        public async Task<IActionResult> CheckSlugExists(CheckSlugExistsReq request) {
            return Ok(await _skillService.CheckSlugExists(request));
        }
    }
}