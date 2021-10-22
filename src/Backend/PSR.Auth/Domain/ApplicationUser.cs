using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using PSR.Auth.Interfaces;
using PSR.Domain;

namespace PSR.Auth.Domain
{
    public class ApplicationUser : IdentityUser, IApplicationUser
    {
        
    }
}