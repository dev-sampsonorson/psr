using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PSR.Application.Repository;
using PSR.Domain;
using PSR.Infrastructure.Data;

namespace PSR.Infrastructure.Repository
{
    public class EmployeeRepository : BaseRepository<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(AppDbContext context, ILogger<EmployeeRepository> logger) : base(context, logger) { }
        
        public void Delete(Employee entity)
        {
            dbSet.Remove(entity);
        }

        public void Update(Employee entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
        }
    }
}