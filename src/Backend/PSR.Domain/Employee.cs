using System.ComponentModel.DataAnnotations.Schema;
using PSR.SharedKernel;

namespace PSR.Domain
{
    //[Table("Employee", Schema = "admin")]
    public class Employee : AuditableEntity
    {
        /* private EmployeeId _employeeId;

        public EmployeeId EmployeeId {
            get {
                _employeeId = new EmployeeId(Id);
                return _employeeId;
            }
            set => _employeeId = value;
        } */

        public string UserId { get; set; } = "";
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string TimeZone { get; set; } = "";
        public string WorkHours { get; set; } = "";
        public string CoreHours { get; set; } = "";
        
        public Country Country { get; set; } = default!;

        public EmployeeStatus Status { get; set; } = EmployeeStatus.Active;
        public ICollection<Skill> Skills { get; set; } = new List<Skill>();
        public ICollection<SkillRating> SkillRatings { get; set; } = new List<SkillRating>();

        public void UpdateSkillRating(Skill skill, double newRating) {
            ArgumentNullException.ThrowIfNull(skill);

            if (newRating >= 0 && newRating <= 5) {
                RaiseDomainEvent(new EmployeeSkillRatingChangeEvent(Id, skill.Id, newRating));
            }

            var skillToUpdate = SkillRatings.FirstOrDefault(x => x.Id == skill.Id);
            if (skillToUpdate is not null) {
                skillToUpdate.Rating = newRating;
            } else {
                skillToUpdate = new SkillRating {
                    Skill = skill,
                    Employee = this,
                    Rating = newRating
                };
            }
        }
    }
}