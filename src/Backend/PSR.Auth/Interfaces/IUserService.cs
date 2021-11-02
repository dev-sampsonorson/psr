using PSR.Application.Common.Models;
using PSR.Auth.Domain;
using PSR.Auth.Models.Request;

namespace PSR.Auth.Interfaces
{
    public interface IUserService
    {
        Task<ApplicationUser> RegisterAsync(UserRegistrationReq registrationReq);
        Task<Result<ApplicationUser>> LoginAsync(UserLoginReq loginReq);
         
    }
}