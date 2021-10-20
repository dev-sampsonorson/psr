using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.Auth.Models.Response;
using PSR.SharedKernel;

namespace PSR.Auth.Services
{
        public class IdentityService : IIdentityService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IRefreshTokenRepository _refreshTokenRepository;

        public IdentityService(
            UserManager<ApplicationUser> userManager,
            IRefreshTokenRepository refreshTokenRepository) {
            _userManager = userManager;
            _refreshTokenRepository = refreshTokenRepository;
        }

        public async Task<bool> VerifyPassword(ApplicationUser user, string password) {
            return await _userManager.CheckPasswordAsync(user, password);
        }

        public async Task<ApplicationUser> GetUserByEmailAsync(string email) {
            var user = await _userManager.FindByEmailAsync(email);

            return user;
        }

        public async Task<ApplicationUser> GetUserByIdAsync(string userId) {
            var user = await _userManager.FindByIdAsync(userId);

            return user;
        }

        public async Task<string> GetUserNameAsync(string userId) {
            var user = await _userManager.Users.FirstAsync(u => u.Id == userId);

            return user.UserName;
        }

        public async Task<AuthRes> CreateUserAsync(ApplicationUser user, string password)
        {            
            var result = await _userManager.CreateAsync(user, password);            

            return result.ToApplicationResult();
        }

        public async Task<AuthRes> DeleteUserAsync(string userId) {
            var user = _userManager.Users.SingleOrDefault(u => u.Id == userId);

            if (user is null) {
                return AuthRes.Success();
            }
            
            return await DeleteUserAsync(user);
        }

        private async Task<AuthRes> DeleteUserAsync(ApplicationUser user)
        {
            var result = await _userManager.DeleteAsync(user);

            return result.ToApplicationResult();
        }
    }

    public static class IdentityResultExtensions
    {
        public static AuthRes ToApplicationResult(this IdentityResult result)
        {
            return result.Succeeded
                ? AuthRes.Success()
                : AuthRes.Failure(result.Errors.Select(e => e.Description));
        }
    }
}