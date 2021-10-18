using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.Auth.Models;

namespace PSR.Auth.Services
{
    public class CurrentUserService : ICurrentUserService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public CurrentUserService(IHttpContextAccessor httpContextAccessor) {
            _httpContextAccessor = httpContextAccessor;
        }

        public ICurrentUser CurrentUser {
            get {
                var principal = _httpContextAccessor?.HttpContext?.User;       

                var userId = principal.FindFirstValue(ClaimTypes.NameIdentifier)!;
                var firstName = principal?.FindFirstValue(AuthClaimTypes.FirstName)!;
                var lastName = principal?.FindFirstValue(AuthClaimTypes.LastName)!;
                return new CurrentUser(userId, firstName, lastName);
            }
        }
    }
}