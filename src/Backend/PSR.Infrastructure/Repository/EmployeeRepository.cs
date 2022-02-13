using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PSR.Application.Repository;
using PSR.Domain;
using PSR.Infrastructure.Data;
using PSR.SharedKernel.Exceptions;

namespace PSR.Infrastructure.Repository
{
    public class EmployeeRepository : BaseEntityRepository<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(AppDbContext context, ILogger<EmployeeRepository> logger) : base(context, logger) { }
        
        public void Delete(Employee entity)
        {
            dbSet.Remove(entity);
        }

        public async Task<Employee> GetByUserIdAsync(string userId)
        {
            return await dbSet.FirstOrDefaultAsync(x => x.UserId == userId);
        }

        public void Update(Employee entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
        }

        public override async Task<Employee> GetByIdAsync(Guid id)
        {
            return await dbSet
                .Include(x => x.Skills)
                .Include(x => x.SkillRatings)
                .ThenInclude(x => x.Skill.Category)
                .Include(x => x.SkillRatings)
                .ThenInclude(x => x.Skill.SubCategory)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public override async Task<(IEnumerable<Employee> Result, long TotalRecords)> ListAsync<TKey>(int page, int pageSize, Expression<Func<Employee, TKey>> keySelector) {
            var totalRecords = await dbSet.LongCountAsync();
            var result = await dbSet
                .Include(x => x.Skills)
                .Include(x => x.SkillRatings)
                .ThenInclude(x => x.Skill.Category)
                .Include(x => x.SkillRatings)
                .ThenInclude(x => x.Skill.SubCategory)
                .OrderBy(keySelector)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            return (result, totalRecords);
        }
        
        public override async Task<(IEnumerable<Employee> Result, long TotalRecords)> ListDescAsync<TKey>(int page, int pageSize, Expression<Func<Employee, TKey>> keySelector) {
            var totalRecords = await dbSet.LongCountAsync();
            var result = await dbSet
                .Include(x => x.Skills)
                .Include(x => x.SkillRatings)
                .ThenInclude(x => x.Skill.Category)
                .Include(x => x.SkillRatings)
                .ThenInclude(x => x.Skill.SubCategory)
                .OrderByDescending(keySelector)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            return (result, totalRecords);
        }

        public async Task<bool> CheckSkillExists(Guid employeeId, Guid skillId) {
            var employee = await dbSet
                .Include(x => x.Skills)
                .FirstOrDefaultAsync(x => x.Id == employeeId);
            if (employee is null)
                throw new EntityNotFoundException("Employee not found");

            return employee.Skills.Any(x => x.Id == skillId);
        }

        public async Task<SkillRating?> GetSkillRatingAsync(Guid employeeId, Guid skillId) {
            var employee = await dbSet
                 .Include(x => x.SkillRatings).ThenInclude(x => x.Skill)
                 .FirstOrDefaultAsync(x => x.Id == employeeId);

            if (employee is null)
                throw new EntityNotFoundException("Employee not found");
            
            return employee.SkillRatings.SingleOrDefault(x => x.Skill.Id == skillId);
        }

        public async Task<IEnumerable<SkillRating>> GetSkillRatingsAsync(Guid employeeId) {
            var employee = await dbSet
                .Include(x => x.SkillRatings).ThenInclude(x => x.Skill)
                .FirstOrDefaultAsync(x => x.Id == employeeId);;

            if (employee is null)
                throw new EntityNotFoundException("Employee not found");

            return employee.SkillRatings;
        }

        public async Task<IEnumerable<SkillRating>> GetSkillRatingsAsync(Guid categoryId, Guid subcategoryId, Guid employeeId) {
            var employee = await dbSet
                .Include(x => x.SkillRatings).ThenInclude(x => x.Skill.Category)
                .Include(x => x.SkillRatings).ThenInclude(x => x.Skill.SubCategory)
                .FirstOrDefaultAsync(x => x.Id == employeeId);

            if (employee is null)
                throw new EntityNotFoundException("Employee not found");

            return employee.SkillRatings.Where(x => x.Skill.CategoryId == categoryId && x.Skill.SubCategoryId == subcategoryId);
        }
    }
}