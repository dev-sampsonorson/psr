using PSR.Application.Models.Request;
using PSR.Application.Models.Response;

namespace PSR.Application.Interfaces
{
    public interface IEmployeeManagementService
    {
         Task<AddSkillToEmployeeRes> AddSkillRatingToEmployee(AddSkillToEmployeeReq request);
         Task<UpdateEmployeeSkillRatingRes> UpdateSkillRatingToEmployee(UpdateEmployeeSkillRatingReq request);
         Task<(IEnumerable<EmployeeRes> Employees, long TotalRecords)> GetEmployees(int page, int pageSize);
    }
}