namespace PSR.Auth.Models.Request
{
    public class RevokeTokenReq
    {
        public string? RefreshToken { get; set; } = null;
    }
}