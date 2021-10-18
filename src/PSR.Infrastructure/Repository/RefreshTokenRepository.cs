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

        public void Delete(RefreshToken entity)
        {
            dbSet.Remove(entity);
        }

        public void Update(RefreshToken entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
        }
    }
}