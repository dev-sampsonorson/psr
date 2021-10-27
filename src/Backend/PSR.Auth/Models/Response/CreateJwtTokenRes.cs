namespace PSR.Auth.Models.Response
{
    public class CreateJwtTokenRes
    {
        public string Token { get; set; } = "";
        public string RefreshToken { get; set; } = "";
    }
}