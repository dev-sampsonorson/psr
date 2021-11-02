using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using PSR.Application.Common.Models;
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

        Task<Result> CreateUserAsync(ApplicationUser user, string password);

        Task<Result> DeleteUserAsync(string userId);

        Task<Result> CreateRoleAsync(string name);

        Task<Result> AddUserToRoleAsync(string email, string roleName);
        Task<Result> AddUserToRoleAsync(ApplicationUser? user, string roleName);

        List<ApplicationRole> GetAllRoles();

        Task<Result<IList<string>>> GetUserRolesAsync(string email);

        Task<Result> RemoveUserFromRoleAsync(string email, string roleName);

        List<ApplicationUser> GetAllUsers();
        Task<IList<string>> GetRolesAsync(ApplicationUser user);
        Task<IList<Claim>> GetClaimsAsync(ApplicationUser user);

        Task<IList<Claim>> GetClaimsAsync(ApplicationRole role);

        Task<ApplicationRole> GetRoleByNameAsync(string role);

        Task<Result> AddClaimAsync(ApplicationUser user, Claim userClaim);
        Task<Result> RemoveClaimFromUser(ApplicationUser user, Claim userClaim);

    }
}