namespace PSR.Auth.Models.Response
{
    public class AuthRes
    {
        internal AuthRes(bool succeeded, IEnumerable<string> errors, string token, string refreshToken) {
            Succeeded = succeeded;
            Token = token;
            RefreshToken = refreshToken;
            Errors = errors.ToList();
        }

        public bool Succeeded { get; set; }
        public string Token { get; set; } = "";
        public string RefreshToken { get; set; } = "";

        public List<string> Errors { get; set; } = new List<string>();

        public static AuthRes Success()
        {
            return new AuthRes(true, new string[] { }, "", "");
        }

        public static AuthRes Success(string token, string refreshToken)
        {
            return new AuthRes(true, new string[] { }, token, refreshToken);
        }

        public static AuthRes Failure(IEnumerable<string> errors)
        {
            return new AuthRes(false, errors, "", "");
        }
        
    }
}