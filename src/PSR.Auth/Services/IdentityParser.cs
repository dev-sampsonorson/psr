using System.Security.Claims;
using System.Security.Principal;
using PSR.Auth.Interfaces;
using PSR.Auth.Domain;
using PSR.Domain;
using PSR.SharedKernel;
using PSR.Auth.Exceptions;
using System.IdentityModel.Tokens.Jwt;
using PSR.Auth.Models;

namespace PSR.Auth.Services
{
    public class IdentityParser : IIdentityParser<ICurrentUser>
    {
        public ICurrentUser Parse(IPrincipal principal)
        {
            // Pattern matching 'is' expression
            // assigns "claims" if "principal" is a "ClaimsPrincipal"
            if (principal is ClaimsPrincipal claims)
            {
                /* if (!Int32.TryParse(claims.Claims.FirstOrDefault(x => x.Type == "country")?.Value ?? "0", out int countrId))
                    throw new ClaimNotFoundException("country");

                if (!Guid.TryParse(claims.Claims.FirstOrDefault(x => x.Type == "employee_id")?.Value ?? "", out Guid employeeId)) 
                    throw new ClaimNotFoundException("employee_id"); */
                
                var firstName = claims.Claims.FirstOrDefault(x => x.Type == "first_name")?.Value ?? "";
                var lastName = claims.Claims.FirstOrDefault(x => x.Type == "last_name")?.Value ?? "";
                // var email = claims.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Email)?.Value ?? "";
                var id = claims.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Sub)?.Value ?? "";

                return new CurrentUser(id, firstName, lastName);
            }
            
            throw new ArgumentException(message: "The principal must be a ClaimsPrincipal", paramName: nameof(principal));
        }
    }
}