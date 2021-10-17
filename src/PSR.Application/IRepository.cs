using PSR.SharedKernel;

namespace PSR.Application
{
    public interface IRepository {}
    public interface IRepository<T> : IRepository where T : BaseEntity
    {
        IUnitOfWork UnitOfWork { get; }
        Task<T> GetByIdAsync(Guid id);
        Task<T> GetByIdAsync(Guid id, string include);
        Task<IEnumerable<T>> ListAsync();
        Task<IEnumerable<T>> ListAsync(ISpecification<T> spec);
        Task<T> AddAsync(T entity);
    }
}