using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using PSR.Auth.Interfaces;
using PSR.Auth.Models;

namespace PSR.Auth
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;

        public JwtMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, IIdentityService identityService, ITokenManagerService tokenManager)
        {
            try {
                var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
                var userId = tokenManager.ExtractUserIdFromJwtToken(token!);
                if (!string.IsNullOrEmpty(userId))
                {
                    // attach user to context on successful jwt validation
                    context.Items["User"] = await identityService.GetUserByIdAsync(userId);
                }
            } catch(Exception) {
                context.Items["User"] = null;
            }

            await _next(context);
        }
        
    }
}