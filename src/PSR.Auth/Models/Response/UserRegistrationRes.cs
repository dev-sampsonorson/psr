namespace PSR.Auth.Models.Response
{
    public class UserRegistrationRes : AuthRes
    {
        internal UserRegistrationRes(bool succeeded, IEnumerable<string> errors, string token, string refreshToken) : base(succeeded, errors, token, refreshToken)
        {
        }
    }
}