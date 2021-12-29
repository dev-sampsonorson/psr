using AutoMapper;
using PSR.Application.Common.Mappings;
using PSR.Auth.Domain;
using PSR.Domain;

namespace PSR.Auth.Models.Response
{
    public class UserRes
    {
        public string Id { get; set; } = "";
        public Guid EmployeeId { get; set; } = Guid.Empty;
        public string UserName { get; set; } = "";
        public string Email { get; set; } = "";
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
    }
}