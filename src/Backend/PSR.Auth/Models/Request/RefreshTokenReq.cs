using System.ComponentModel.DataAnnotations;

namespace PSR.Auth.Models.Request
{
    public class RefreshTokenReq
    {
        public string Token { get; set; } = "";
        public string RefreshToken { get; set; } = "";
        
    }
}