using System.Text.RegularExpressions;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PSR.Application.Common.Models;
using PSR.Application.Common.Models.Response;
using PSR.Application.Models.Request;
using PSR.Application.Models.Response;
using PSR.Application.Repository;
using PSR.Auth.Validators;
using PSR.Domain;

namespace PSR.Api.Controllers.v1
{
    public class SkillsController : BaseController
    {

        private readonly ISkillRepository _skillRepository;
        private readonly IMapper _mapper;

        public SkillsController(
            ISkillRepository skillRepository, 
            ILoggerFactory loggerFactory,
            IMapper mapper

        ) : base(loggerFactory)
        {
            ArgumentNullException.ThrowIfNull(nameof(skillRepository));
            ArgumentNullException.ThrowIfNull(nameof(mapper));

            _skillRepository = skillRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetSkills() {
            using (var uow = _skillRepository.UnitOfWork) {
                var skills = await _skillRepository.ListAsync();

                var response = _mapper.Map<IEnumerable<Skill>, IEnumerable<SkillRes>>(skills);

                return Ok(response);
            }
            
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSkill(Guid id) {
            var skill = await _skillRepository.GetByIdAsync(id);
            return Ok(skill);
        }

        [HttpGet("categories/{id}")]
        public async Task<IActionResult> GetCategory(Guid id) {
            var skill = await _skillRepository.GetByIdAsync(id);
            return Ok(skill);
        }

        [HttpGet("subcategories/{id}")]
        public async Task<IActionResult> GetSubCategory(Guid id) {
            var skill = await _skillRepository.GetByIdAsync(id);
            return Ok(skill);
        }

        [HttpPost("categories")]
        public async Task<IActionResult> CreateCategory([FromBody] AddSkillCategoryReq request) {
            using (var uow = _skillRepository.UnitOfWork) {
                var newCategory = _mapper.Map<AddSkillCategoryReq, SkillCategory>(request);
    
                var createdCategory = await _skillRepository.AddCategoryAsync(newCategory);    
                var response = _mapper.Map<SkillCategory, AddSkillCategoryRes>(createdCategory);

                await uow.SaveChangesAsync();
    
                return CreatedAtAction(nameof(GetCategory), new { id = response.Id }, response);
            }
        }

        [HttpPost("subcategories")]
        public async Task<IActionResult> CreateSubCategory([FromBody] AddSkillSubCategoryReq request) {
            using (var uow = _skillRepository.UnitOfWork) {
                var newSubCategory = _mapper.Map<AddSkillSubCategoryReq, SkillSubCategory>(request);

                var createdSubCategory = await _skillRepository.AddSubCategoryAsync(newSubCategory);
                var response = _mapper.Map<SkillSubCategory, AddSkillSubCategoryRes>(createdSubCategory);

                await uow.SaveChangesAsync();

                return CreatedAtAction(nameof(GetSubCategory), new { id = response.Id }, response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateSkill([FromBody] AddSkillReq request) {
            using (var uow = _skillRepository.UnitOfWork) {
                var newSkill = _mapper.Map<AddSkillReq, Skill>(request);
    
                var createdSkill = await _skillRepository.AddAsync(newSkill);    
                var response = _mapper.Map<Skill, AddSkillRes>(createdSkill);

                await uow.SaveEntitiesAsync();
    
                return CreatedAtAction(nameof(GetSkill), new { id = response.Id }, response);
            }           
        }
        
        
        [HttpPost("slug-exists")]
        public async Task<IActionResult> CheckSlugExists(CheckSlugExistsReq request) {
            using (var uow = _skillRepository.UnitOfWork) {
                var slugExists = await _skillRepository.SlugExistsAsync(request.SkillId, request.Slug);

                if (slugExists)
                    return Ok(CheckExistsRes.Invalid());
                    
                return Ok(CheckExistsRes.Valid());
            }
        }

        /* private string GenerateSlug(string name) {
            return Regex.Replace(name.ToLowerInvariant(), RegexPattern.NotAlphanumeric, "-");
        } */
        
    }
}