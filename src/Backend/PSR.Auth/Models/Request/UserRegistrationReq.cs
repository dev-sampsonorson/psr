using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using PSR.Domain;

namespace PSR.Auth.Models.Request
{
    public class UserRegistrationReq
    {

        public string Email { get; set; } = "";
        public string Password { get; set; } = "";
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string TimeZone { get; set; } = "";
        public string WorkHours { get; set; } = "";
        public string CoreHours { get; set; } = "";
        // [JsonConverter(typeof(CountryJsonConverter))]
        public Country Country { get; set; } = default!;
        
    }
}