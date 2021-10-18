using System.Reflection;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using PSR.Application;
using PSR.Application.Exceptions;
using PSR.Auth.Domain;
using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Infrastructure.Data
{
    #nullable disable
    public class AppDbContext : IdentityDbContext<ApplicationUser>, IUnitOfWork // 
    {
        public const string DEFAULT_SCHEMA = "dbo";
        
        private IDbContextTransaction _currentTransaction;
        public bool HasActiveTransaction => _currentTransaction != null;
        
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            // modelBuilder.HasDefaultSchema("blogging");
            /* modelBuilder.Entity<Employee>()
                .Property(e => e.EmployeeId)
                .HasConversion(
                    x => x.Value,
                    x => new EmployeeId(x)); */
            
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            base.OnModelCreating(modelBuilder);
        }

        public async Task<bool> SaveEntitiesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            ChangeTracker.DetectChanges();
            
            var entries = ChangeTracker.Entries()
                .Where(e => e.Entity is AuditableEntity 
                    && (e.State == EntityState.Added
                       || e.State == EntityState.Modified));

            foreach (var entry in entries) {
                var entity = entry.Entity as AuditableEntity;

                if (entity is null)
                    throw new InvalidCastingException(nameof(entry.Entity), nameof(AuditableEntity));

                if (entry.State == EntityState.Added) {
                    entity.InsertDate = DateTime.UtcNow;
                }
                
                entity.UpdateDate = DateTime.UtcNow;
            }
            
            // After executing this line all the changes
            // performed through the DbContext will be committed
            var result = await base.SaveChangesAsync(cancellationToken);

            return true;
        }

        public IDbContextTransaction GetCurrentTransaction() => _currentTransaction;
        public async Task<IDbContextTransaction> BeginTransactionAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            if (_currentTransaction != null) return null;

            _currentTransaction = await Database.BeginTransactionAsync(cancellationToken);

            return _currentTransaction;
        }
        public async Task CommitTransactionAsync(IDbContextTransaction transaction)
        {
            if (transaction == null) throw new ArgumentNullException(nameof(transaction));
            if (transaction != _currentTransaction) throw new InvalidOperationException($"Transaction {transaction.TransactionId} is not current");

            try
            {
                await SaveChangesAsync();
                transaction.Commit();
            }
            catch
            {
                RollbackTransaction();
                throw;
            }
            finally
            {
                if (_currentTransaction != null)
                {
                    _currentTransaction.Dispose();
                    _currentTransaction = null;
                }
            }
        }

        public void RollbackTransaction()
        {
            try
            {
                _currentTransaction?.Rollback();
            }
            finally
            {
                if (_currentTransaction != null)
                {
                    _currentTransaction.Dispose();
                    _currentTransaction = null;
                }
            }
        }

    }
    #nullable enable
}