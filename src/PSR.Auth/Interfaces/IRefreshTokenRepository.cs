using PSR.Auth.Domain;
using PSR.SharedKernel;

namespace PSR.Auth.Interfaces
{
    public interface IRefreshTokenRepository : IRepository<RefreshToken> {
        Task<RefreshToken> GetByRefreshTokenAsync(string refreshToken);
        void Delete(RefreshToken entity);
        void Update(RefreshToken entity);
         
    }
}