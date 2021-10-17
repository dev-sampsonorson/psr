using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PSR.Domain;
using PSR.Infrastructure.Auth;
using PSR.Infrastructure.Data;
using PSR.SharedKernel;

namespace PSR.Infrastructure.Auth
{
    public class ApplicationUserConfiguration : IEntityTypeConfiguration<ApplicationUser>
    {

        public void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {

            
            builder.Property(x => x.EmployeeId)
                .IsRequired();

            builder.Property(x => x.FirstName)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(x => x.LastName)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(x => x.Country).HasConversion(
                    x => x.Id,
                    x => Enumeration.FromValue<Country>(x))
                .HasColumnName("CountryId");
        }
    }
}