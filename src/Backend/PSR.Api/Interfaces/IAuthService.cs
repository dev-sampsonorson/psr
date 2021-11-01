using PSR.Auth.Models.Request;
using PSR.Auth.Models.Response;

namespace PSR.Api.Interfaces
{
    public interface IAuthService
    {
        Task<UserAuthRes> LoginAsync(UserLoginReq loginReq);
        Task<UserAuthRes> RegisterAsync(UserRegistrationReq registrationReq);
        Task<UserRes> GetUserByIdAysnc(string userId);
    }
}