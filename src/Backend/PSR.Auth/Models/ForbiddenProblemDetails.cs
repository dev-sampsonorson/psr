using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace PSR.Auth.Models
{
    public class ForbiddenProblemDetails : ProblemDetails
    {
        public ForbiddenProblemDetails() {
            Status = (int)HttpStatusCode.Forbidden;
            Type = "auth/forbidden";
            Title = "Unauthorized";
            // Detail = "Request made without authorization.";
            Detail = "Your account is not authorized to access the requested resource.";
            Instance = Guid.NewGuid().ToString();
        }
    }
}