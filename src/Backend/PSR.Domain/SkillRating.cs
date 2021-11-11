using PSR.SharedKernel;

namespace PSR.Domain
{
    public class SkillRating : AuditableEntity
    {
        public Skill Skill { get; set; } = default!;
        public Employee Employee { get; set; } = default!;
        public double Rating { get; set; } = 0;
    }
}