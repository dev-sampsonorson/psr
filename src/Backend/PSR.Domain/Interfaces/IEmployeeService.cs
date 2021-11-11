namespace PSR.Domain.Interfaces
{
    public interface IEmployeeService
    {
        void AddSkillToEmployee(Employee employee, Skill skill, double rating);
    }
}