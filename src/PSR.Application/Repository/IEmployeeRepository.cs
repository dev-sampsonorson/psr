using System.Threading.Tasks;
using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Application.Repository
{
    public interface IEmployeeRepository : IRepository<Employee> {
        void Update(Employee entity);
        void Delete(Employee entity);
        Task<Employee> GetByUserIdAsync(string userId);
         
    }
}