using AutoMapper;
using PSR.Application.Common.Models.Response;
using PSR.Application.Interfaces;
using PSR.Application.Models.Request;
using PSR.Application.Models.Response;
using PSR.Application.Repository;
using PSR.Domain;

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
            using (var uow = _skillRepository.UnitOfWork) {
                var slugExists = await _skillRepository.SlugExistsAsync(request.SkillId, request.Slug);

                if (slugExists)
                    return CheckExistsRes.Invalid();
                    
                return CheckExistsRes.Valid();
            }
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
            using (var uow = _skillRepository.UnitOfWork) {
                var newSkill = _mapper.Map<AddSkillReq, Skill>(request);
    
                var createdSkill = await _skillRepository.AddAsync(newSkill);    
                var response = _mapper.Map<Skill, AddSkillRes>(createdSkill);

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
            using (var uow = _skillRepository.UnitOfWork) {
                var skill = await _skillRepository.GetByIdAsync(id);
                return _mapper.Map<Skill, SkillRes>(skill);
            }
        }

        public IEnumerable<SkillCategoryRes> GetSkillCategories()
        {
            using (var uow = _skillRepository.UnitOfWork) {
                var categories = _skillRepository.GetSkillCategories();

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

        /* private string GenerateSlug(string name) {
            return Regex.Replace(name.ToLowerInvariant(), RegexPattern.NotAlphanumeric, "-");
        } */
        
    }
}