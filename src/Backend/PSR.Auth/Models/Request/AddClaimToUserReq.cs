namespace PSR.Auth.Models.Request
{
    public class AddClaimToUserReq
    {
        public string Email { get; set; } = "";
        public string ClaimName { get; set; } = "";
        public string ClaimValue { get; set; } = "";
    }
}