using PSR.SharedKernel;

namespace PSR.SharedKernel
{
    public interface IUnitOfWork : IDisposable
    {
        // TRepository Get<TRepository>() where TRepository : notnull, IRepository;
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken));
        Task<bool> SaveEntitiesAsync(CancellationToken cancellationToken = default(CancellationToken));
    }
}