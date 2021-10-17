using PSR.Domain;

namespace PSR.Application.Auth
{
    public interface IApplicationUser
    {
        public Guid EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Country Country { get; set; }
    }
}