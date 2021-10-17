using PSR.Domain;

namespace PSR.Application.Repository
{
    public interface IEmployeeRepository : IRepository<Employee> {
        void Update(Employee entity);
        void Delete(Employee entity);
         
    }
}