using PSR.Application.Models.Request;
using PSR.Application.Models.Response;

namespace PSR.Application.Interfaces
{
    public interface IEmployeeManagementService
    {
         Task<AddEmployeeSkillRatingRes> AddSkillRatingToEmployee(AddEmployeeSkillRatingReq request);
         Task<UpdateEmployeeSkillRatingRes> UpdateSkillRatingToEmployee(UpdateEmployeeSkillRatingReq request);
         Task<SkillRatingRes> AddSkillRating(Guid employeeId, Guid skillId, double rating);
         Task<SkillRatingRes> UpdateSkillRating(Guid employeeId, Guid skillId, double rating);
         Task<bool> IsRatingAssigned(Guid employeeId, Guid skillId);
         Task<(IEnumerable<EmployeeRes> Employees, long TotalRecords)> GetEmployees(int page, int pageSize);
         Task<IEnumerable<SkillRatingRes>> GetSkillRatingsAsync(Guid employeeId);
         Task<IEnumerable<SkillRatingRes>> GetSkillRatingsAsync(Guid categoryId, Guid subcategoryId, Guid employeeId);
    }
}