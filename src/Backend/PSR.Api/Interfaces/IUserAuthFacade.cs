using PSR.Auth.Models.Request;
using PSR.Auth.Models.Response;

namespace PSR.Api.Interfaces
{
    public interface IUserAuthFacade
    {
        Task<AuthRes> LoginAsync(UserLoginReq loginReq);
        Task<AuthRes> RegisterAsync(UserRegistrationReq registrationReq);
    }
}