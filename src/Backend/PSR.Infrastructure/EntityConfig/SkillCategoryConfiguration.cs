using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PSR.Domain;
using PSR.Infrastructure.Data;

namespace PSR.Infrastructure.EntityConfig
{
    public class SkillCategoryConfiguration : BaseEntityConfiguration<SkillCategory>
    {
        protected override void ConfigureEntity(EntityTypeBuilder<SkillCategory> builder)
        {
            builder.ToTable("SkillCategory", AppDbContext.DEFAULT_SCHEMA);

            builder.Property(x => x.Name).IsRequired();
        }
    }
}