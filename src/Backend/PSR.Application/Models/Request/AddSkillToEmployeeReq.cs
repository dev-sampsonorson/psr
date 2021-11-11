namespace PSR.Application.Models.Request
{
    public class AddSkillToEmployeeReq
    {
        public Guid EmployeeId { get; set; } = Guid.Empty;
        public Guid SkillId { get; set; } = Guid.Empty;        
        public double Rating { get; set; } = 0;
    }
}