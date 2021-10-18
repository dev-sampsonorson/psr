using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PSR.Domain;
using PSR.Infrastructure.Data;
using PSR.SharedKernel;

namespace PSR.Infrastructure.EntityConfig
{
    public class EmployeeConfiguration : BaseEntityConfiguration<Employee>
    {

        protected override void ConfigureEntity(EntityTypeBuilder<Employee> builder)
        {
            builder.ToTable("Employee", AppDbContext.DEFAULT_SCHEMA);

            builder.Property(x => x.UserId)
                .IsRequired();

            builder.Property(x => x.FirstName)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(x => x.LastName)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(x => x.TimeZone)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(x => x.WorkHours)
                .HasMaxLength(200)
                .IsRequired();

            builder.Property(x => x.CoreHours)
                .HasMaxLength(200)
                .IsRequired();

            builder.Property(x => x.Country).HasConversion(
                    x => x.Id,
                    x => Enumeration.FromValue<Country>(x))
                .HasColumnName("CountryId");

            builder.Property(x => x.Status).HasConversion(
                    x => x.Id,
                    x => Enumeration.FromValue<EmployeeStatus>(x))
                .HasColumnName("StatusId");
        }
    }
}