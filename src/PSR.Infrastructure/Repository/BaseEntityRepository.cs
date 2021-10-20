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
    public class BaseEntityRepository<T> : BaseRepository<T>, IEntityRepository<T> where T : BaseEntity
    {

        public BaseEntityRepository(AppDbContext context, ILogger logger): base(context, logger) {
        }

        public async Task<T> GetByIdAsync(Guid id)
        {
            return await dbSet.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<T> GetByIdAsync(Guid id, string include)
        {
            return await dbSet.Include(include).FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}