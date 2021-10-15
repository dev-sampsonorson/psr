using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PSR.SharedKernel;

namespace PSR.Infrastructure.Data
{
    public class AppDbContext : IdentityDbContext
    {

        // public new virtual DbSet<User> Users { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {
            // Users = Set<User>();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) {
            var entries = ChangeTracker.Entries()
                .Where(e => e.Entity is AuditableEntity 
                    && (e.State == EntityState.Added
                       || e.State == EntityState.Modified));

            foreach (var entityEntry in entries) {
                ((AuditableEntity)entityEntry.Entity).Updated = DateTime.UtcNow;
        
                if (entityEntry.State == EntityState.Added) {
                    ((AuditableEntity)entityEntry.Entity).Created = DateTime.UtcNow;
                }
            }
        
            return base.SaveChangesAsync(cancellationToken);
        }
    }
}