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

        public List<SkillSubCategory> GetSkillSubCategories()
        {
            return _context.Set<SkillSubCategory>().AsNoTracking().Include(x => x.Category).ToList();
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

        public async Task<List<Skill>> GetSkillsByCategory(Guid categoryId, Guid subCategoryId)
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
    }
}