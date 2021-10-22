using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PSR.Infrastructure.EntityConfig
{
    public abstract class BaseEntityConfiguration<T> : IEntityTypeConfiguration<T> where T : class
    {
        public static readonly string RowVersion = nameof(RowVersion);

        protected abstract void ConfigureEntity(EntityTypeBuilder<T> builder);

        public void Configure(EntityTypeBuilder<T> builder) {
            builder.Property<byte[]>(RowVersion)
                .IsRowVersion();

            this.ConfigureEntity(builder);
        }
        
    }
}