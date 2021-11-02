using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PSR.Application.Common.Models;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.Auth.Models.Response;
using PSR.SharedKernel;

namespace PSR.Auth.Services
{
    public class IdentityService : IIdentityService {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly IRefreshTokenRepository _refreshTokenRepository;

        public IdentityService(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager,
            IRefreshTokenRepository refreshTokenRepository) {
            _userManager = userManager;
            _roleManager = roleManager;
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

        public async Task<Result> CreateUserAsync(ApplicationUser user, string password)
        {            
            var result = await _userManager.CreateAsync(user, password);            

            return result.ToApplicationResult();
        }

        public async Task<Result> DeleteUserAsync(string userId) {
            var user = _userManager.Users.SingleOrDefault(u => u.Id == userId);

            if (user is null) {
                return Result.Success();
            }
            
            return await DeleteUserAsync(user);
        }

        private async Task<Result> DeleteUserAsync(ApplicationUser user)
        {
            var result = await _userManager.DeleteAsync(user);

            return result.ToApplicationResult();
        }

        public async Task<Result> CreateRoleAsync(string name)
        {
            // check if role exist
            var roleExist = await _roleManager.RoleExistsAsync(name);
            
            if (roleExist)
                throw new FailedOperationException(nameof(CreateRoleAsync), "Role already exist");                

            var roleResult = await _roleManager.CreateAsync(new ApplicationRole(name));

            if (!roleResult.Succeeded)
                throw new FailedOperationException(nameof(CreateRoleAsync), 
                    $"The role {name} has not been added");

            return Result.Success();
        }

        public async Task<Result> AddUserToRoleAsync(string email, string roleName)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
                throw new EntityNotFoundException($"The user with the {email} does not exist");

            // Check if role exist
            var roleExist = await _roleManager.RoleExistsAsync(roleName);
            if (!roleExist)
                throw new EntityNotFoundException(roleName, "Role does not exist");
                

            var result = await _userManager.AddToRoleAsync(user, roleName);

            if (!result.Succeeded)
                throw new FailedOperationException(nameof(AddUserToRoleAsync), "The user was not able to be added to the role");

            return Result.Success();
        }

        public async Task<Result> AddUserToRoleAsync(ApplicationUser? user, string roleName)
        {
            if (user == null)
                throw new ArgumentNullException(nameof(user));

            // Check if role exist
            var roleExist = await _roleManager.RoleExistsAsync(roleName);
            if (!roleExist)
                throw new EntityNotFoundException(roleName, "Role does not exist");
                

            var result = await _userManager.AddToRoleAsync(user, roleName);

            if (!result.Succeeded)
                throw new FailedOperationException(nameof(AddUserToRoleAsync), "The user was not able to be added to the role");

            return Result.Success();
        }

        public List<ApplicationRole> GetAllRoles()
        {
            return _roleManager.Roles.ToList();
        }

        public async Task<Result<IList<string>>> GetUserRolesAsync(string email)
        {
            var userExist = await _userManager.FindByEmailAsync(email);

            if (userExist == null)
                throw new EntityNotFoundException("User does not exist");
                
            var roles = await _userManager.GetRolesAsync(userExist);
            
            return Result<IList<string>>.Success(roles);
        }

        public async Task<Result> RemoveUserFromRoleAsync(string email, string roleName)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)            
                throw new EntityNotFoundException($"The user with the {email} does not exist");

            var roleExist = await _roleManager.RoleExistsAsync(roleName);
            if (!roleExist)
                throw new EntityNotFoundException(roleName, "Role does not exist");

            var result = await _userManager.RemoveFromRoleAsync(user, roleName);

            if (!result.Succeeded)
                throw new FailedOperationException(nameof(RemoveUserFromRoleAsync), "Unable to remove User {email} from role {roleName}");

            return Result.Success();
        }

        public List<ApplicationUser> GetAllUsers()
        {
            return _userManager.Users.ToList();
        }

        public async Task<IList<string>> GetRolesAsync(ApplicationUser user)
        {
            return await _userManager.GetRolesAsync(user);
        }

        public async Task<IList<Claim>> GetClaimsAsync(ApplicationUser user)
        {
            return await _userManager.GetClaimsAsync(user);
        }

        public async Task<IList<Claim>> GetClaimsAsync(ApplicationRole role)
        {
            return await _roleManager.GetClaimsAsync(role);
        }
        
        public async Task<ApplicationRole> GetRoleByNameAsync(string role) {
            return await _roleManager.FindByNameAsync(role);
        }

        public async Task<Result> AddClaimAsync(ApplicationUser user, Claim userClaim) {
            var result = await _userManager.AddClaimAsync(user, userClaim);

            if (!result.Succeeded) {
                return Result.Failure($"Unable to add claim {userClaim.Type} to the user {user.Email}");
            }


            return Result.Success();
        }

        public async Task<Result> RemoveClaimFromUser(ApplicationUser user, Claim userClaim) {
            var result = await _userManager.RemoveClaimAsync(user, userClaim);

            if (!result.Succeeded) {
                return Result.Failure($"Unable to remove claim {userClaim.Type} from the user {user.Email}");
            }


            return Result.Success();
        }


    }

    public static class IdentityResultExtensions
    {
        public static Result ToApplicationResult(this IdentityResult result)
        {
            return result.Succeeded
                ? Result.Success()
                : Result.Failure(result.Errors.Select(e => e.Description));
        }
    }
}