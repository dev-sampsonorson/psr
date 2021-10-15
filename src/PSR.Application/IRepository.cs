using PSR.SharedKernel;

namespace PSR.Application
{
    public interface IRepository {}
    public interface IRepository<T> : IRepository where T : BaseEntity
    {
        Task<T> GetById(Guid id);
        Task<T> GetById(Guid id, string include);
        Task<IEnumerable<T>> List();
        Task<IEnumerable<T>> List(ISpecification<T> spec);
        Task<T> Add(T entity);
        Task<bool> Update(T entity);
        Task<bool> Delete(T entity);
    }
}