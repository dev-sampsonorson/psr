using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PSR.Domain;
using PSR.Infrastructure.Data;

namespace PSR.Infrastructure.EntityConfig
{
    public class SkillSubCategoryConfiguration : BaseEntityConfiguration<SkillSubCategory>
    {

        protected override void ConfigureEntity(EntityTypeBuilder<SkillSubCategory> builder) {
            builder.ToTable("SkillSubCategory", AppDbContext.DEFAULT_SCHEMA);

            builder.Property(x => x.Name).IsRequired();

            builder.Property(x => x.CategoryId).IsRequired();
            builder.HasOne(x => x.Category)
                .WithMany()
                .HasForeignKey(x => x.CategoryId)
                .OnDelete(DeleteBehavior.NoAction);
            
        }
        
    }
}