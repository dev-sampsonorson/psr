using PSR.Auth.Domain;
using PSR.Auth.Models.Response;

namespace PSR.Auth.Interfaces
{
    public interface ITokenManagerService
    {
        Task<AuthRes> JwtTokenAsync(ApplicationUser user, string firstName, string lastName);
        Task<UserAuthRes> RefreshTokenAsync(string token, string refreshToken);
        Task<AuthRes> RevokeTokenAsync(string refreshToken);
        string ExtractUserIdFromJwtToken(string token);
         
    }
}