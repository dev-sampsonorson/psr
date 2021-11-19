using PSR.Application.Common.Models.Response;
using PSR.Application.Models.Request;
using PSR.Application.Models.Response;

namespace PSR.Application.Interfaces
{
    public interface ISkillService
    {
         Task<IEnumerable<SkillRes>> GetSkills();
         Task<IEnumerable<SkillRes>> GetSkills(Guid categoryId, Guid subcategoryId);
         Task<SkillRes> GetSkill(Guid id);
         IEnumerable<SkillCategoryRes> GetSkillCategories();
         IEnumerable<SkillSubCategoryRes> GetSkillSubCategories();
         Task<IEnumerable<SkillSubCategoryRes>> GetSkillSubCategoryByCategoryAsync(Guid categoryId);
         Task<SkillCategoryRes> GetCategory(Guid id);
         Task<SkillSubCategoryRes> GetSubCategory(Guid id);
         Task<AddSkillCategoryRes> CreateCategory(AddSkillCategoryReq request);
         Task<AddSkillSubCategoryRes> CreateSubCategory(AddSkillSubCategoryReq request);
         Task<AddSkillRes> CreateSkill(AddSkillReq request);
         Task<UpdateSkillRes> UpdateSkill(UpdateSkillReq request);
         Task<CheckExistsRes> CheckSlugExists(CheckSlugExistsReq request);
         
    }
}