using PSR.SharedKernel;

namespace PSR.Domain
{
    /**
        Cannot contain entities
        Can contain value objects
        Domain events should be immutable
    */
    public sealed class EmployeeSkillRatingChangeEvent : IDomainEvent
    {
        public Guid EmployeeId { get; } = Guid.Empty;
        public Guid SkillId { get; } = Guid.Empty;
        public double NewRating { get; } = 0;

        public EmployeeSkillRatingChangeEvent(Guid employeeId, Guid skillId, double newRating) {
            EmployeeId = employeeId;
            SkillId = skillId;
            NewRating = newRating;
        }
    }
}