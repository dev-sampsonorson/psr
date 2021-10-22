using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PSR.Application;
using PSR.Infrastructure.Data;
using PSR.SharedKernel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PSR.Infrastructure.Repository
{
    public class BaseRepository<T> : IRepository<T> where T : class
    {
        protected readonly AppDbContext _context;
        protected readonly ILogger _logger;
        internal DbSet<T> dbSet;

        public IUnitOfWork UnitOfWork {
            get {
                return _context;
            }
        }

        public BaseRepository(AppDbContext context, ILogger logger) {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            
            dbSet = context.Set<T>();
        }

        public async Task<T> AddAsync(T entity)
        {
            var result = await dbSet.AddAsync(entity);
            return result.Entity;
        }
        
        public async Task<IEnumerable<T>> ListAsync() {
            return await dbSet.ToListAsync();
        }

        public async Task<IEnumerable<T>> ListAsync(ISpecification<T> spec) {
            return await dbSet.Where(spec.Criteria).ToListAsync();
        }
    }
}