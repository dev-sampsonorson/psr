namespace PSR.Auth.Models.Request
{
    public class UserLoginReq
    {
        public string Email { get; set; } = "";
        public string Password { get; set; } = "";
    }
}