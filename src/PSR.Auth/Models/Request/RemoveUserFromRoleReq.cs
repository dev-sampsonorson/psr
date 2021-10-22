namespace PSR.Auth.Models.Request
{
    public class RemoveUserFromRoleReq
    {
        public string Email { get; set; } = "";
        public string RoleName { get; set; } = "";
        
    }
}