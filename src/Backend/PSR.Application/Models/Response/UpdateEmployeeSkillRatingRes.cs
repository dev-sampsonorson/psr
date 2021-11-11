using PSR.Domain;

namespace PSR.Application.Models.Response
{
    public class UpdateEmployeeSkillRatingRes
    {
        public Guid Id { get; set; } = Guid.Empty;
        public string UserId { get; set; } = "";
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string TimeZone { get; set; } = "";
        public string WorkHours { get; set; } = "";
        public string CoreHours { get; set; } = "";
        public int CountryId { get; set; } = Country.Empty.Id;
        public string CountryName { get; set; } = "";
        public int StatusId { get; set; } = EmployeeStatus.Active.Id;
        public string StatusName { get; set; } = "";
        public List<SkillRatingRes> Skills { get; set; } = new List<SkillRatingRes>();
    }
}