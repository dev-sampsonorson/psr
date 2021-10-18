using PSR.Domain;

namespace PSR.Application.Models.Request
{
    public class EmployeeRegistrationReq
    {
        public string UserId { get; set; } = "";
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string TimeZone { get; set; } = "";
        public string WorkHours { get; set; } = "";
        public string CoreHours { get; set; } = "";
        
        public Country Country { get; set; } = default!;
    }
}