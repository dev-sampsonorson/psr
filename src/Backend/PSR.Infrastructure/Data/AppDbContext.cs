using System.ComponentModel.DataAnnotations;
using System.Reflection;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore.Storage;
using PSR.Application.Common.Exceptions;
using PSR.Auth.Domain;
using PSR.SharedKernel;

namespace PSR.Infrastructure.Data
{
    #nullable disable
    public class AppDbContext : IdentityDbContext<ApplicationUser>, IUnitOfWork // 
    {
        public const string DEFAULT_SCHEMA = "dbo";
        
        private IDbContextTransaction _currentTransaction;
        public bool HasActiveTransaction => _currentTransaction != null;

        // private readonly EventDispatcher _eventDispatcher;


        
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {
            // _eventDispatcher = eventDispatcher;
        }

        /* protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder
                .LogTo(Console.WriteLine, new [] { RelationalEventId.CommandExecuted })
                .EnableSensitiveDataLogging();
        } */

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

        // https://stackoverflow.com/questions/46430619/net-core-2-ef-core-error-handling-save-changes
        private void ValidateEntities() {
            var entities = from e in ChangeTracker.Entries()
                           where e.State == EntityState.Added
                               || e.State == EntityState.Modified
                           select e.Entity;
                           
            foreach (var entity in entities) {
                var validationContext = new ValidationContext(entity);
                Validator.ValidateObject(entity, validationContext, validateAllProperties: true);
            }
        }

        public async Task<int> SaveEntitiesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            try {
                ValidateEntities();

                ChangeTracker.DetectChanges();
            
                var entries = ChangeTracker.Entries()
                    .Where(e => e.Entity is AuditableEntity 
                        && (e.State == EntityState.Added
                           || e.State == EntityState.Modified));
    
                foreach (var entry in entries) {
                    var entity = entry.Entity as AuditableEntity;
    
                    if (entity is null)
                        throw new UnexpectedTypeException("entity", entry.Entity, typeof(AuditableEntity));
    
                    if (entry.State == EntityState.Added) {
                        entity.InsertDate = DateTime.UtcNow;
                    }
                    
                    entity.UpdateDate = DateTime.UtcNow;
                }
                
                // After executing this line all the changes
                // performed through the DbContext will be committed
                int result = await base.SaveChangesAsync(cancellationToken);

                /* List<BaseEntity> trackedEntities = ChangeTracker.Entries()
                    .Where(x => x.Entity is BaseEntity)
                    .Select(x => x.Entity as BaseEntity)
                    .ToList();

                foreach(BaseEntity entity in trackedEntities) {
                    _eventDispatcher.Dispatch(entity.DomainEvents) ;
                    entity.ClearDomainEvents();
                } */

                return result;
            } catch(System.ComponentModel.DataAnnotations.ValidationException e) {
                throw new RepositoryException($"Entity in invalid state: {e.ValidationResult.ErrorMessage}");
            } catch {
                throw;
            }
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