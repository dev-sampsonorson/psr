using PSR.Application.Common.Mappings;
using PSR.Auth.Domain;

namespace PSR.Auth.Models.Response
{
<<<<<<< HEAD
    public class UserRegistrationRes : IMapFrom<ApplicationUser>
=======
    public class UserRegistrationRes
>>>>>>> feature-register
    {
        public string Id { get; set; } = "";
        public string UserName { get; set; } = "";
        public string Email { get; set; } = "";
<<<<<<< HEAD
=======
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string? Token { get; set; } = null;
        public string? RefreshToken { get; set; } = null;
>>>>>>> feature-register
    }
}