using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Application.Repository
{
    public interface ISkillRepository : IEntityRepository<Skill>, IRepository<Skill>
    {
         void Update(Skill entity);
         void Delete(Skill entity);         
         Task<SkillCategory> GetSkillCategoryAsync(Guid id);
         Task<SkillSubCategory> GetSkillSubCategoryAsync(Guid id);
         Task<List<Skill>> GetSkillsByCategory(Guid categoryId);
         Task<List<Skill>> GetSkillsByCategoryAndSubcategory(Guid categoryId, Guid subCategoryId);
         List<SkillCategory> GetSkillCategories();
         Task<List<SkillCategory>> GetSkillCategoriesByEmployeeAsync(Guid employeeId);
         List<SkillSubCategory> GetSkillSubCategories();
         Task<List<SkillSubCategory>> GetSkillSubCategoriesByEmployeeAsync(Guid employeeId, Guid categoryId);
         Task<IEnumerable<SkillSubCategory>> GetSkillSubCategoryByCategoryAsync(Guid categoryId);
         Task<List<Skill>> GetSkillsByEmployeeAsync(Guid employeeId, Guid categoryId, Guid subCategoryId);
         Task<SkillCategory> AddCategoryAsync(SkillCategory category);
         Task<SkillSubCategory> AddSubCategoryAsync(SkillSubCategory category);
         Task<bool> SlugExistsAsync(Guid skillId, string slug);
         Task<bool> SkillExistsAsync(string name, Guid categoryId, Guid subcategoryId);
    }
}