using System.Threading.Tasks;
using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Application.Repository
{
    public interface IEmployeeRepository : IRepository<Employee>, IEntityRepository<Employee> {
        void Update(Employee entity);
        void Delete(Employee entity);
        Task<Employee> GetByUserIdAsync(string userId);
        Task<bool> CheckSkillExists(Guid employeeId, Guid skillId);
        Task<SkillRating?> GetSkillRatingAsync(Guid employeeId, Guid skillId);
        Task<IEnumerable<SkillRating>> GetSkillRatingsAsync(Guid employeeId);
        Task<IEnumerable<SkillRating>> GetSkillRatingsAsync(Guid categoryId, Guid subcategoryId, Guid employeeId);
         
    }
}