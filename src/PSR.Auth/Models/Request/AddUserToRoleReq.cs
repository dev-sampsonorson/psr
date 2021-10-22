namespace PSR.Auth.Models.Request
{
    public class AddUserToRoleReq
    {
        public string Email { get; set; } = "";
        public string RoleName { get; set; } = "";
    }
}