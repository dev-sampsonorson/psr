using PSR.Auth.Configuration;
using PSR.Auth.Domain;
using PSR.Auth.Models.Request;
using PSR.Auth.Models.Response;

namespace PSR.Auth.Interfaces
{
    public interface IAuthService
    {
        Task<(AuthRes Response, ApplicationUser? User)> RegisterAsync(UserRegistrationReq registrationReq);
        Task<(AuthRes Response, ApplicationUser? User)> LoginAsync(UserLoginReq loginReq);
        Task<AuthRes> JwtTokenAsync(ApplicationUser user, string firstName, string lastName);
        // Task<AuthRes> JwtTokenAsync(ApplicationUser user);
        Task<AuthRes> RefreshTokenAsync(string token, string refreshToken);
        Task<AuthRes> RevokeTokenAsync(string refreshToken);
        string ExtractUserIdFromJwtToken(string token);
    }
}