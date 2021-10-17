using System.Security.Claims;
using System.Security.Principal;
using PSR.Application.Exceptions;
using PSR.Domain;
using PSR.Infrastructure.Auth;
using PSR.SharedKernel;

namespace PSR.Api.Services
{
    public class IdentityParser : IIdentityParser<ApplicationUser>
    {
        public ApplicationUser Parse(IPrincipal principal)
        {
            // Pattern matching 'is' expression
            // assigns "claims" if "principal" is a "ClaimsPrincipal"
            if (principal is ClaimsPrincipal claims)
            {
                if (!Int32.TryParse(claims.Claims.FirstOrDefault(x => x.Type == "country")?.Value ?? "0", out int countrId))
                    throw new ClaimNotFoundException("country");

                if (!Guid.TryParse(claims.Claims.FirstOrDefault(x => x.Type == "employee_id")?.Value ?? "", out Guid employeeId)) 
                    throw new ClaimNotFoundException("employee_id");

                return new ApplicationUser {
                    Id = claims.Claims.FirstOrDefault(x => x.Type == "sub")?.Value ?? "",
                    EmployeeId = employeeId,
                    FirstName = claims.Claims.FirstOrDefault(x => x.Type == "first_name")?.Value ?? "",
                    LastName = claims.Claims.FirstOrDefault(x => x.Type == "last_name")?.Value ?? "",
                    Email = claims.Claims.FirstOrDefault(x => x.Type == "email")?.Value ?? "",
                    Country = Enumeration.FromValue<Country>(countrId)
                };
            }
            
            throw new ArgumentException(message: "The principal must be a ClaimsPrincipal", paramName: nameof(principal));
        }
    }
}