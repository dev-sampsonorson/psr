using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Application.Repository
{
    public interface ISkillRepository : IEntityRepository<Skill>, IRepository<Skill>
    {
         void Update(Skill entity);
         void Delete(Skill entity);
         Task<List<Skill>> GetSkillsByCategory(Guid categoryId);
         Task<List<Skill>> GetSkillsByCategory(Guid categoryId, Guid subCategoryId);
         List<SkillCategory> GetSkillCategories();
         List<SkillSubCategory> GetSkillSubCategories();
         Task<SkillCategory> AddCategoryAsync(SkillCategory category);
         Task<SkillSubCategory> AddSubCategoryAsync(SkillSubCategory category);
         Task<bool> SlugExistsAsync(Guid skillId, string slug);
    }
}