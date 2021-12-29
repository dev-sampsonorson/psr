using AutoMapper;
using PSR.Application.Common.Models.Response;
using PSR.Application.Interfaces;
using PSR.Application.Models.Request;
using PSR.Application.Models.Response;
using PSR.Application.Repository;
using PSR.Domain;
using PSR.SharedKernel.Exceptions;

namespace PSR.Application.Services
{
    public class SkillService : ISkillService
    {

    private readonly ISkillRepository _skillRepository;
        private readonly IMapper _mapper;

        public SkillService(
            ISkillRepository skillRepository, 
            IMapper mapper

        )
        {
            ArgumentNullException.ThrowIfNull(nameof(skillRepository));
            ArgumentNullException.ThrowIfNull(nameof(mapper));

            _skillRepository = skillRepository;
            _mapper = mapper;
        }
        public async Task<CheckExistsRes> CheckSlugExists(CheckSlugExistsReq request)
        {
            var uow = _skillRepository.UnitOfWork;
            var slugExists = await _skillRepository.SlugExistsAsync(request.SkillId, request.Slug);

            if (slugExists)
                return CheckExistsRes.Invalid();
                    
            return CheckExistsRes.Valid();
        }

        public async Task<CheckExistsRes> CheckSkillExists(CheckSkillExistsReq request) {
            var uow = _skillRepository.UnitOfWork;
            var slugExists = await _skillRepository.SkillExistsAsync(
                request.Name, 
                request.CategoryId,
                request.SubcategoryId
            );

            if (slugExists)
                return CheckExistsRes.Invalid();
                    
            return CheckExistsRes.Valid();
        }

        public async Task<AddSkillCategoryRes> CreateCategory(AddSkillCategoryReq request)
        {
            using (var uow = _skillRepository.UnitOfWork) {
                var newCategory = _mapper.Map<AddSkillCategoryReq, SkillCategory>(request);
    
                var createdCategory = await _skillRepository.AddCategoryAsync(newCategory);    
                var response = _mapper.Map<SkillCategory, AddSkillCategoryRes>(createdCategory);

                await uow.SaveChangesAsync();
    
                return response;
            }
        }

        public async Task<AddSkillRes> CreateSkill(AddSkillReq request)
        {
            /* using (var uow = _skillRepository.UnitOfWork) {
                var uow = _skillRepository.UnitOfWork
                var newSkill = _mapper.Map<AddSkillReq, Skill>(request);
    
                var createdSkill = await _skillRepository.AddAsync(newSkill);    
                var response = _mapper.Map<Skill, AddSkillRes>(createdSkill);

                await uow.SaveEntitiesAsync();
    
                return response;
            }   */

            var uow = _skillRepository.UnitOfWork;
            var newSkill = _mapper.Map<AddSkillReq, Skill>(request);
    
            var createdSkill = await _skillRepository.AddAsync(newSkill);    
            var response = _mapper.Map<Skill, AddSkillRes>(createdSkill);

            await uow.SaveEntitiesAsync();
    
            return response;
        }
        public async Task<UpdateSkillRes> UpdateSkill(UpdateSkillReq request)
        {
            using (var uow = _skillRepository.UnitOfWork) {
                var skill = await _skillRepository.GetByIdAsync(request.Id);                
                var skillToUpdate = _mapper.Map<UpdateSkillReq, Skill>(request, skill);
    
                _skillRepository.Update(skillToUpdate);    
                var response = _mapper.Map<Skill, UpdateSkillRes>(skillToUpdate);

                await uow.SaveEntitiesAsync();
    
                return response;
            }  
        }

        public async Task<AddSkillSubCategoryRes> CreateSubCategory(AddSkillSubCategoryReq request)
        {
            using (var uow = _skillRepository.UnitOfWork) {
                var newSubCategory = _mapper.Map<AddSkillSubCategoryReq, SkillSubCategory>(request);

                var createdSubCategory = await _skillRepository.AddSubCategoryAsync(newSubCategory);
                var response = _mapper.Map<SkillSubCategory, AddSkillSubCategoryRes>(createdSubCategory);

                await uow.SaveChangesAsync();

                return response;
            }
        }


        public async Task<SkillRes> GetSkill(Guid id)
        {
            var uow = _skillRepository.UnitOfWork;
            var skill = await _skillRepository.GetByIdAsync(id);
            return _mapper.Map<Skill, SkillRes>(skill);
        }

        public async Task<IEnumerable<SkillRes>> GetSkillsByEmployeeAsync(Guid employeeId, Guid categoryId, Guid subCategoryId) {
            using (var uow = _skillRepository.UnitOfWork) {
                var skills = await _skillRepository.GetSkillsByEmployeeAsync(employeeId, categoryId, subCategoryId);

                return _mapper.Map<IEnumerable<Skill>, IEnumerable<SkillRes>>(skills);
            }
        }

        public IEnumerable<SkillCategoryRes> GetSkillCategories()
        {
            using (var uow = _skillRepository.UnitOfWork) {
                var categories = _skillRepository.GetSkillCategories();

                return _mapper.Map<IEnumerable<SkillCategory>, IEnumerable<SkillCategoryRes>>(categories);
            }
        }

        public async Task<IEnumerable<SkillCategoryRes>> GetSkillCategoriesByEmployeeAsync(Guid employeeId) {
            using (var uow = _skillRepository.UnitOfWork) {
                var categories = await _skillRepository.GetSkillCategoriesByEmployeeAsync(employeeId);

                return _mapper.Map<IEnumerable<SkillCategory>, IEnumerable<SkillCategoryRes>>(categories);
            }
        }

        public IEnumerable<SkillSubCategoryRes> GetSkillSubCategories()
        {
            using (var uow = _skillRepository.UnitOfWork) {
                var subCategories = _skillRepository.GetSkillSubCategories();

                return _mapper.Map<IEnumerable<SkillSubCategory>, IEnumerable<SkillSubCategoryRes>>(subCategories);
            }
        }
        
        public async Task<IEnumerable<SkillSubCategoryRes>> GetSkillSubCategoriesByEmployeeAsync(Guid employeeId, Guid categoryId) {
            using (var uow = _skillRepository.UnitOfWork) {
                var subCategories = await _skillRepository.GetSkillSubCategoriesByEmployeeAsync(employeeId, categoryId);

                return _mapper.Map<IEnumerable<SkillSubCategory>, IEnumerable<SkillSubCategoryRes>>(subCategories);
            }
        }

        public async Task<IEnumerable<SkillSubCategoryRes>> GetSkillSubCategoryByCategoryAsync(Guid categoryId) {
            using (var uow = _skillRepository.UnitOfWork) {
                var subCategories = await _skillRepository.GetSkillSubCategoryByCategoryAsync(categoryId);

                return _mapper.Map<IEnumerable<SkillSubCategory>, IEnumerable<SkillSubCategoryRes>>(subCategories);
            }
        }

        public async Task<IEnumerable<SkillRes>> GetSkills()
        {
            using (var uow = _skillRepository.UnitOfWork) {
                var skills = await _skillRepository.ListAsync();
                return _mapper.Map<IEnumerable<Skill>, IEnumerable<SkillRes>>(skills);
            }
        }
        public async Task<IEnumerable<SkillRes>> GetSkills(Guid categoryId, Guid subcategoryId)
        {
            using (var uow = _skillRepository.UnitOfWork) {
                var skills = await _skillRepository.GetSkillsByCategoryAndSubcategory(categoryId, subcategoryId);
                return _mapper.Map<IEnumerable<Skill>, IEnumerable<SkillRes>>(skills);
            }
        }

        public async Task<SkillCategoryRes> GetCategory(Guid id)
        {
            var category = await _skillRepository.GetSkillCategoryAsync(id);

            return _mapper.Map<SkillCategory, SkillCategoryRes>(category);
        }

        public async Task<SkillSubCategoryRes> GetSubCategory(Guid id)
        {
            var subCategory = await _skillRepository.GetSkillSubCategoryAsync(id);

            return _mapper.Map<SkillSubCategory, SkillSubCategoryRes>(subCategory);
        }

        public async Task DeleteSkill(DeleteSkillReq request)
        {
            var uow = _skillRepository.UnitOfWork;
            var skill = await _skillRepository.GetByIdAsync(request.Id);

            if (skill is null)
                throw new EntityNotFoundException(nameof(skill), request.Id);

            _skillRepository.Delete(skill);
            await uow.SaveEntitiesAsync();
        }

        /* private string GenerateSlug(string name) {
            return Regex.Replace(name.ToLowerInvariant(), RegexPattern.NotAlphanumeric, "-");
        } */

    }
}