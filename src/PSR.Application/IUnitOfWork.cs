using PSR.SharedKernel;

namespace PSR.Application
{
    public interface IUnitOfWork : IDisposable
    {
        TRepository Get<TRepository>() where TRepository : notnull, IRepository;
        Task CompleteAsync();
    }
}