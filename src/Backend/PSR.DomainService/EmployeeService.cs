using PSR.Domain;
using PSR.Domain.Interfaces;

namespace PSR.DomainService
{
    public class EmployeeService : IEmployeeService
    {
        public void AddSkillToEmployee(Employee employee, Skill skill, double rating)
        {
            employee.SkillRatings.Add(new SkillRating {
                Skill = skill,
                Rating = rating
            });
        }
    }
}