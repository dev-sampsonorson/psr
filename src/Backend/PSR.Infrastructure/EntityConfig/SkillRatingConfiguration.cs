using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PSR.Domain;
using PSR.Infrastructure.Data;

namespace PSR.Infrastructure.EntityConfig
{
    public class SkillRatingConfiguration : BaseEntityConfiguration<SkillRating>
    {
        protected override void ConfigureEntity(EntityTypeBuilder<SkillRating> builder)
        {
            builder.ToTable("SkillRating", AppDbContext.DEFAULT_SCHEMA);
            
            builder.Property(x => x.Rating).IsRequired();
        }
    }
}