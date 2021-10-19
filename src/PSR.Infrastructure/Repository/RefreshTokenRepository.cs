using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.Infrastructure.Data;
using PSR.SharedKernel;

namespace PSR.Infrastructure.Repository
{
    public class RefreshTokenRepository : BaseRepository<RefreshToken>, IRefreshTokenRepository
    {
        public RefreshTokenRepository(
            AppDbContext context, 
            ILogger<RefreshTokenRepository> logger) : base(context, logger) { }

        public async Task<RefreshToken> GetByRefreshTokenAsync(string refreshToken) {
            return await dbSet.FirstOrDefaultAsync(x => x.Token == refreshToken);
        }

        public async Task<List<RefreshToken>> GetByUserIdAsync(string userId) {
            return await dbSet.Where(x => x.UserId == userId).ToListAsync();
        }

        public void Delete(RefreshToken entity)
        {
            dbSet.Remove(entity);
        }

        public void Delete(Expression<Func<RefreshToken, bool>> criteria) {
            dbSet.RemoveRange(dbSet.Where(criteria));
        }

        public void Update(RefreshToken entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
        }

        public async Task ChangePreviousTokensToUsedAsync(string userId)
        {
            var list = await dbSet.Where(x => x.UserId == userId).ToListAsync();
            list.ForEach(x => {
                x.IsUsed = true;
                _context.Entry(x).State = EntityState.Modified;
            });
        }
    }
}