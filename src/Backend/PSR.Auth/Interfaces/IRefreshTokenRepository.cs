using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using PSR.Auth.Domain;
using PSR.SharedKernel;

namespace PSR.Auth.Interfaces
{
    public interface IRefreshTokenRepository : IRepository<RefreshToken> {
        Task<List<RefreshToken>> GetByUserIdAsync(string userId);
        Task<RefreshToken> GetByRefreshTokenAsync(string refreshToken);
        void Delete(RefreshToken entity);
        void Delete(Expression<Func<RefreshToken, bool>> criteria);
        void Update(RefreshToken entity);
        Task ChangePreviousTokensToUsedAsync(string userId);
         
    }
}