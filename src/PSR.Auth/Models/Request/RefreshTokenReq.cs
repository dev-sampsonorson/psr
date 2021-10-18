using System.ComponentModel.DataAnnotations;

namespace PSR.Auth.Models.Request
{
    public class RefreshTokenReq
    {
        [Required]
        public string Token { get; set; } = "";

        [Required]
        public string RefreshToken { get; set; } = "";
        
    }
}