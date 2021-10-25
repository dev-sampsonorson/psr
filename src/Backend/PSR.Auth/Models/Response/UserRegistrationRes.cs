using PSR.Application.Common.Mappings;
using PSR.Auth.Domain;

namespace PSR.Auth.Models.Response
{
    public class UserRegistrationRes : IMapFrom<ApplicationUser>
    {
        public string Id { get; set; } = "";
        public string UserName { get; set; } = "";
        public string Email { get; set; } = "";
    }
}