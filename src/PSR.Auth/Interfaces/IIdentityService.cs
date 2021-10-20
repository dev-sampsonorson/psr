using System.Threading.Tasks;
using PSR.Auth.Domain;
using PSR.Auth.Models.Response;
using PSR.SharedKernel;

namespace PSR.Auth.Interfaces
{
    public interface IIdentityService
    {
        Task<bool> VerifyPassword(ApplicationUser user, string password);
        Task<ApplicationUser> GetUserByEmailAsync(string email);

        Task<ApplicationUser> GetUserByIdAsync(string userId);
        Task<string> GetUserNameAsync(string userId);

        Task<AuthRes> CreateUserAsync(ApplicationUser user, string password);

        Task<AuthRes> DeleteUserAsync(string userId);
    }
}