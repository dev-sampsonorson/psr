using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PSR.Application.Common.Exceptions;
using PSR.Application.Repository;
using PSR.Domain;
using PSR.Infrastructure.Data;
using PSR.SharedKernel;

namespace PSR.Infrastructure.Repository
{
    public class SkillRepository : BaseEntityRepository<Skill>, ISkillRepository
    {
        public SkillRepository(AppDbContext context, ILogger<SkillRepository> logger) : base(context, logger) { }
        


        public void Delete(Skill entity)
        {
            dbSet.Remove(entity);
        }

        public void Update(Skill entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
        }

        /* #region  Get categories */
        public List<SkillCategory> GetSkillCategories()
        {
            return _context.Set<SkillCategory>().AsNoTracking().ToList();
        }

        public async Task<List<SkillCategory>> GetSkillCategoriesByEmployeeAsync(Guid employeeId) {
            return await (from s in _context.Set<Skill>().AsNoTracking().Include(x => x.Category)
                    join r in _context.Set<SkillRating>().AsNoTracking().Include(x => x.Skill).Include(x => x.Employee) on s.Id equals r.Skill.Id
                    where r.Employee.Id == employeeId
                    select s.Category).ToListAsync();
        }

        public async Task<List<SkillSubCategory>> GetSkillSubCategoriesByEmployeeAsync(Guid employeeId, Guid categoryId) {
            return await (from s in _context.Set<Skill>().AsNoTracking().Include(x => x.SubCategory).ThenInclude(x => x.Category)
                    join r in _context.Set<SkillRating>().AsNoTracking().Include(x => x.Skill).Include(x => x.Employee) on s.Id equals r.Skill.Id
                    where s.CategoryId == categoryId && r.Employee.Id == employeeId
                    select s.SubCategory).ToListAsync();
        }

        public async Task<List<Skill>> GetSkillsByEmployeeAsync(Guid employeeId, Guid categoryId, Guid subCategoryId) {
            return await (from s in _context.Set<Skill>().AsNoTracking().Include(x => x.Category).Include(x => x.SubCategory).ThenInclude(x => x.Category)
                    join r in _context.Set<SkillRating>().AsNoTracking().Include(x => x.Skill).Include(x => x.Employee) on s.Id equals r.Skill.Id
                    where s.CategoryId == categoryId && s.SubCategoryId == subCategoryId && r.Employee.Id == employeeId
                    select s).ToListAsync();
        }

        public List<SkillSubCategory> GetSkillSubCategories()
        {
            return _context.Set<SkillSubCategory>().AsNoTracking().Include(x => x.Category).ToList();
        }

        public async Task<SkillCategory> GetSkillCategoryAsync(Guid id)
        {
            return await _context.Set<SkillCategory>()
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<SkillSubCategory> GetSkillSubCategoryAsync(Guid id)
        {
            return await _context.Set<SkillSubCategory>()
                .Include(x => x.Category)
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<SkillSubCategory>> GetSkillSubCategoryByCategoryAsync(Guid categoryId)
        {
            return await _context.Set<SkillSubCategory>()
                .Include(x => x.Category)
                .AsNoTracking()
                .Where(x => x.CategoryId == categoryId)
                .ToListAsync();
        }
        /* #endregion */

        /* #region Get skills */
        
        public override async Task<IEnumerable<Skill>> ListAsync() {
            return await dbSet
                .Include(x => x.Category)
                .Include(x => x.SubCategory)
                .ToListAsync();
        }

        public override async Task<Skill> GetByIdAsync(Guid id)
        {
            return await dbSet
                .Include(x => x.Category)
                .Include(x => x.SubCategory)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Skill>> GetSkillsByCategory(Guid categoryId)
        {
            return await dbSet
                .Include(x => x.Category)
                .Include(x => x.SubCategory)
                .Where(x => x.CategoryId == categoryId)
                .ToListAsync();
        }

        public async Task<List<Skill>> GetSkillsByCategoryAndSubcategory(Guid categoryId, Guid subCategoryId)
        {
            return await dbSet
                .Include(x => x.Category)
                .Include(x => x.SubCategory)
                .Where(x => x.CategoryId == categoryId && x.SubCategoryId == subCategoryId)
                .ToListAsync();
        }
        /* #endregion */

        /* #region Add Methods */

        public override async Task<Skill> AddAsync(Skill skill) {
            var entity = (await dbSet.AddAsync(skill)).Entity;

            if (entity is null)
                throw new RepositoryException($"Skill '{skill.Name}' could not be added.");

            await _context.Entry(entity).Reference(x => x.Category).LoadAsync();
            await _context.Entry(entity).Reference(x => x.SubCategory).LoadAsync();
            
            return entity;
        }

        public async Task<SkillCategory> AddCategoryAsync(SkillCategory category)
        {
            var entity = (await _context.Set<SkillCategory>().AddAsync(category)).Entity;

            if (entity is null)
                throw new RepositoryException($"Category '{category.Name}' could not be added.");

            return entity;
        }

        public async Task<SkillSubCategory> AddSubCategoryAsync(SkillSubCategory subCategory)
        {
            var entity = (await _context.Set<SkillSubCategory>().AddAsync(subCategory)).Entity;

            if (entity is null)
                throw new RepositoryException($"Sub category '{subCategory.Name}' could not be added.");

            await _context.Entry(entity).Reference(x => x.Category).LoadAsync();

            return entity;
        }

        /* #endregion */
    
        public async Task<bool> SlugExistsAsync(Guid skillId, string slug) {
            return await dbSet.AnyAsync(x => x.Id != skillId && x.Slug == slug);
        }
    
        public async Task<bool> SkillExistsAsync(string name, Guid categoryId, Guid subCategoryId) {
            return await dbSet.AnyAsync(x => x.Name == name 
            && x.CategoryId == categoryId 
            && x.SubCategoryId == subCategoryId);
        }
    }
}