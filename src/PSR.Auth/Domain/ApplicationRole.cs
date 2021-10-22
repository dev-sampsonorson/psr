using Microsoft.AspNetCore.Identity;
using PSR.Auth.Interfaces;

namespace PSR.Auth.Domain
{
    public class ApplicationRole : IdentityRole, IApplicationRole
    {
        public ApplicationRole(string name): base(name) {}
    }
}