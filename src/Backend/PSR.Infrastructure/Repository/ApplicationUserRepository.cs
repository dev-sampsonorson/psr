using Microsoft.Extensions.Logging;
using PSR.Auth.Interfaces;
using PSR.Auth.Domain;
using PSR.Infrastructure.Data;

namespace PSR.Infrastructure.Repository
{
    public class ApplicationUserRepository : BaseRepository<ApplicationUser>, IApplicationUserRepository
    {
        public ApplicationUserRepository(AppDbContext context, ILogger<ApplicationUserRepository> logger) : base(context, logger) { }
        
        
    }
}