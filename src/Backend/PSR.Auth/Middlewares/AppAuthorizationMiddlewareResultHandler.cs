using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Policy;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PSR.Auth.Models;

namespace PSR.Auth.Middlewares
{
    public class AppAuthorizationMiddlewareResultHandler : IAuthorizationMiddlewareResultHandler
    {
        private readonly AuthorizationMiddlewareResultHandler DefaultHandler = new AuthorizationMiddlewareResultHandler();

        public async Task HandleAsync(RequestDelegate next, HttpContext context, AuthorizationPolicy policy, PolicyAuthorizationResult authorizeResult)
        {
            // Fallback to the default implementation.
            await DefaultHandler.HandleAsync(next, context, policy, authorizeResult);

            var hasFailures = authorizeResult.AuthorizationFailure?.FailedRequirements.Any();

            ProblemDetails? problem = null;

            if (authorizeResult.Challenged) 
                problem = new UnauthorizedProblemDetails();

            if (authorizeResult.Forbidden) 
                problem = new ForbiddenProblemDetails();

            if (problem is not null) {
                context.Response.ContentType = "application/json";
                await context.Response.WriteAsync(JsonSerializer.Serialize(problem));
            }

            return;
        }
    }
}