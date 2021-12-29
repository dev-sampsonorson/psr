using PSR.Application.Common.Models.Response;
using PSR.Application.Models.Request;
using PSR.Application.Models.Response;

namespace PSR.Application.Interfaces
{
    public interface ISkillService
    {
         Task<IEnumerable<SkillRes>> GetSkills();
         Task<IEnumerable<SkillRes>> GetSkills(Guid categoryId, Guid subcategoryId);
         Task<IEnumerable<SkillRes>> GetSkillsByEmployeeAsync(Guid employeeId, Guid categoryId, Guid subCategoryId);
         Task<SkillRes> GetSkill(Guid id);
         IEnumerable<SkillCategoryRes> GetSkillCategories();
         Task<IEnumerable<SkillCategoryRes>> GetSkillCategoriesByEmployeeAsync(Guid employeeId);
         IEnumerable<SkillSubCategoryRes> GetSkillSubCategories();
         Task<IEnumerable<SkillSubCategoryRes>> GetSkillSubCategoriesByEmployeeAsync(Guid employeeId, Guid categoryId);
         Task<IEnumerable<SkillSubCategoryRes>> GetSkillSubCategoryByCategoryAsync(Guid categoryId);
         Task<SkillCategoryRes> GetCategory(Guid id);
         Task<SkillSubCategoryRes> GetSubCategory(Guid id);
         Task<AddSkillCategoryRes> CreateCategory(AddSkillCategoryReq request);
         Task<AddSkillSubCategoryRes> CreateSubCategory(AddSkillSubCategoryReq request);
         Task<AddSkillRes> CreateSkill(AddSkillReq request);
         Task<UpdateSkillRes> UpdateSkill(UpdateSkillReq request);
         Task DeleteSkill(DeleteSkillReq request);
         Task<CheckExistsRes> CheckSlugExists(CheckSlugExistsReq request);
         Task<CheckExistsRes> CheckSkillExists(CheckSkillExistsReq request);
         
    }
}