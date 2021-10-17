using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using PSR.Application.Auth;
using PSR.Domain;

namespace PSR.Infrastructure.Auth
{
    public class ApplicationUser : IdentityUser, IApplicationUser
    {
        public Guid EmployeeId { get; set; } = Guid.NewGuid();
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public Country Country { get; set; } = default!;
        
    }
}