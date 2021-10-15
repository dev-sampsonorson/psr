using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PSR.Application;
using PSR.Infrastructure.Data;
using PSR.SharedKernel;
using System.Collections.Generic;
using System.Linq;

namespace PSR.Infrastructure.Repository
{
    public class BaseRepository<T> : IRepository<T> where T : BaseEntity
    {
        protected readonly AppDbContext _context;
        protected readonly ILogger _logger;
        internal DbSet<T> dbSet;

        public BaseRepository(AppDbContext context, ILogger logger) {
            _context = context;
            _logger = logger;
            dbSet = context.Set<T>();
        }

        public async Task<T> Add(T entity)
        {
            await dbSet.AddAsync(entity);
            
            return entity;
        }

        public async Task<bool> Delete(T entity)
        {
            dbSet.Remove(entity);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<T> GetById(Guid id)
        {
            return await dbSet.FindAsync(id);
        }

        public async Task<T> GetById(Guid id, string include)
        {
            return await dbSet.Include(include).SingleOrDefaultAsync(e => e.Id == id);
        }

        public async Task<IEnumerable<T>> List() {
            return await dbSet.ToListAsync();
        }

        public async Task<IEnumerable<T>> List(ISpecification<T> spec) {
            return await dbSet.Where(spec.Criteria).ToListAsync();
        }

        public async Task<bool> Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return true;
        }
    }
}