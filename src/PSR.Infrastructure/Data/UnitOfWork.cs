using Microsoft.Extensions.Logging;
using PSR.Application;
using PSR.SharedKernel;

namespace PSR.Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly AppDbContext _context;
        private readonly ILogger _logger;
        private readonly IRepositoryFactory _factory;
        
        public UnitOfWork(AppDbContext context, ILoggerFactory loggerFactory, IRepositoryFactory factory) {
            _context = context;
            _logger = loggerFactory.CreateLogger("PSR_Logs");
            _factory = factory;
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }

        public TRepository Get<TRepository>() where TRepository : notnull, IRepository
        {
            return _factory.Get<TRepository>();
        }

        public void Dispose() {
            _context.Dispose();
        }
    }
}