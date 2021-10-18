using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PSR.Auth.Domain;
using PSR.Infrastructure.Data;

namespace PSR.Infrastructure.EntityConfig
{
    public class RefreshTokenConfiguration : BaseEntityConfiguration<RefreshToken>
    {
        protected override void ConfigureEntity(EntityTypeBuilder<RefreshToken> builder)
        {
            builder.ToTable("RefreshToken", AppDbContext.DEFAULT_SCHEMA);

            builder.Property(x => x.UserId)
                .IsRequired();

            builder.Property(x => x.Token)
                .IsRequired();

            builder.Property(x => x.JwtId)
                .IsRequired();

            builder.Property(x => x.IsUsed)
                .HasDefaultValue(false)
                .IsRequired();

            builder.Property(x => x.IsRevorked)
                .HasDefaultValue(false)
                .IsRequired();

            builder.Property(x => x.AddedDate)
                .IsRequired();

            builder.Property(x => x.ExpiryDate)
                .IsRequired();

            builder.HasOne(x => x.User)
                .WithMany()
                .HasForeignKey(x => x.UserId);
        }
    }
}