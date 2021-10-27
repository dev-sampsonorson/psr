using PSR.Application.Common.Mappings;
using PSR.Auth.Domain;

namespace PSR.Auth.Models.Response
{
    public class UserRegistrationRes
    {
        public string Id { get; set; } = "";
        public string UserName { get; set; } = "";
        public string Email { get; set; } = "";
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string? Token { get; set; } = null;
        public string? RefreshToken { get; set; } = null;
    }
}