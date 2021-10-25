using PSR.Auth.Domain;
using PSR.Auth.Models.Request;
using PSR.Auth.Models.Response;
using PSR.SharedKernel;

namespace PSR.Api.Interfaces
{
    public interface IUserAuthFacade
    {
        Task<AuthRes> LoginAsync(UserLoginReq loginReq);
        Task<(Result Response, ApplicationUser? User)> RegisterAsync(UserRegistrationReq registrationReq);
    }
}