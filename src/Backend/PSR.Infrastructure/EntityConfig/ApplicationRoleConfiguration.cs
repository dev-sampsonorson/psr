using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PSR.Auth.Domain;

namespace PSR.Infrastructure.EntityConfig
{
    public class ApplicationRoleConfiguration : IEntityTypeConfiguration<ApplicationRole>
    {

        public void Configure(EntityTypeBuilder<ApplicationRole> builder)
        {
        }
    }
}