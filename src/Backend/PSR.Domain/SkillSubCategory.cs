using PSR.SharedKernel;

namespace PSR.Domain
{
    public class SkillSubCategory : BaseEntity
    {
        public string Name { get; set; } = "";

        public Guid CategoryId { get; set; } = Guid.Empty;
        public SkillCategory Category { get; set; } = default!;
    }
}