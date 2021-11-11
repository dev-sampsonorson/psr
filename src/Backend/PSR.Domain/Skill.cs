using PSR.SharedKernel;

namespace PSR.Domain
{
    public class Skill : AuditableEntity
    {
        public string Name { get; set; } = "";
        public string Slug { get; set; } = "";
        public Guid CategoryId { get; set; } = Guid.Empty;
        public SkillCategory Category { get; set; } = default!;
        public Guid SubCategoryId { get; set; } = Guid.Empty;
        public SkillSubCategory SubCategory { get; set; } = default!;
        public ICollection<Employee> Employees { get; set; } = new List<Employee>();
        public ICollection<SkillRating> SkillRatings { get; set; } = new List<SkillRating>();
    }
}