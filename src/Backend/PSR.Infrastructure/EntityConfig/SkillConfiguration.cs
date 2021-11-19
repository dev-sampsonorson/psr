using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PSR.Domain;
using PSR.Infrastructure.Data;

namespace PSR.Infrastructure.EntityConfig
{
    public class SkillConfiguration : BaseEntityConfiguration<Skill>
    {

        protected override void ConfigureEntity(EntityTypeBuilder<Skill> builder)
        {
            builder.ToTable("Skill", AppDbContext.DEFAULT_SCHEMA);

            builder.Property(x => x.Name)
                .IsRequired();

            builder.Property(x => x.Slug)
                .IsRequired(false);

            builder.Property(x => x.CategoryId).IsRequired();
            
            builder.HasOne(x => x.Category)
                .WithMany()
                .HasForeignKey(x => x.CategoryId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.Property(x => x.SubCategoryId).IsRequired();
            builder.HasOne(x => x.SubCategory)
                .WithMany()
                .HasForeignKey(x => x.SubCategoryId)
                .OnDelete(DeleteBehavior.NoAction);

            /* builder
                .HasMany(x => x.Employees)
                .WithMany(x => x.Skills)
                .UsingEntity<SkillRating>(
                    j => j.HasOne(x => x.Employee).WithMany(x => x.SkillRatings),
                    j => j.HasOne(x => x.Skill).WithMany(x => x.SkillRatings)
                ); */
        }
        
    }
}