using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using PSR.SharedKernel;

namespace PSR.SharedKernel
{
    public interface IRepository {
        IUnitOfWork UnitOfWork { get; }
    }
    public interface IRepository<T> : IRepository where T : class
    {
        Task<IEnumerable<T>> ListAsync();
        Task<(IEnumerable<T> Result, long TotalRecords)> ListAsync<TKey>(int page, int pageSize, Expression<Func<T, TKey>> keySelector);
        Task<(IEnumerable<T> Result, long TotalRecords)> ListDescAsync<TKey>(int page, int pageSize, Expression<Func<T, TKey>> keySelector);
        Task<IEnumerable<T>> ListAsync(ISpecification<T> spec);
        Task<T> AddAsync(T entity);
    }
    public interface IEntityRepository<T> : IRepository<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(Guid id);
        Task<T> GetByIdAsync(Guid id, string include);
    }
}