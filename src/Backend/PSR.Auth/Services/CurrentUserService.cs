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
        private readonly IIdentityService _identityService;

        public CurrentUserService(IHttpContextAccessor httpContextAccessor, IIdentityService identityService) {
            _httpContextAccessor = httpContextAccessor;
            _identityService = identityService;
        }

        public ICurrentUser CurrentUser {
            get {
                var principal = _httpContextAccessor?.HttpContext?.User;       

                var userId = principal.FindFirstValue(ClaimTypes.NameIdentifier)!;
                // var appUser = _identityService.GetUserByIdAsync(userId);

                var firstName = principal?.FindFirstValue(AuthClaimTypes.FirstName)!;
                var lastName = principal?.FindFirstValue(AuthClaimTypes.LastName)!;
                return new CurrentUser(userId, firstName, lastName);
            }
        }
    }
}