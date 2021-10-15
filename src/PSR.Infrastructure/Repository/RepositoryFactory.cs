using Microsoft.Extensions.DependencyInjection;
using PSR.Application;

namespace PSR.Infrastructure.Repository
{
    public class RepositoryFactory : IRepositoryFactory
    {

        private readonly IServiceScopeFactory _serviceScopeFactory;

        public RepositoryFactory(IServiceScopeFactory serviceScopeFactory)
        {
            _serviceScopeFactory = serviceScopeFactory;
        }

        public T Get<T>() where T : notnull, IRepository {
            using (IServiceScope scope = _serviceScopeFactory.CreateScope()) {
                try {
                    return scope.ServiceProvider.GetRequiredService<T>();
                } catch(Exception) {
                    throw;
                }
            }
        }
    }
}