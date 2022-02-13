namespace PSR.Application.Models.Request
{
    public class AddEmployeeSkillRatingReq
    {
        public Guid EmployeeId { get; set; } = Guid.Empty;
        public Guid SkillId { get; set; } = Guid.Empty;        
        public double Rating { get; set; } = 0;
    }
}