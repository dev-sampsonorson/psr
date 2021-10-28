using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace PSR.Auth.Models
{
    public class UnauthorizedProblemDetails : ProblemDetails
    {
        public UnauthorizedProblemDetails() {
            Status = (int)HttpStatusCode.Unauthorized;
            Type = "auth/unauthorized";
            Title = "Unauthenticated";
            // Detail = "Request made without authentication. Please log in.";
            Detail = "You are unauthorized to access the requested resource. Please log in.";
            Instance = Guid.NewGuid().ToString();
        }
    }
}



