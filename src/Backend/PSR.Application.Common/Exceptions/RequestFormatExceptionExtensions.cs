using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace PSR.Application.Common.Exceptions
{
    public static class RequestFormatExceptionExtensions
    {
        public static ProblemDetails ToProblemDetails(this RequestFormatException ex) {
            string traceId = Guid.NewGuid().ToString();

            return new ProblemDetails{
                Status = (int)HttpStatusCode.InternalServerError,
                Type = "request-format",
                Title = "Invalid request payload",
                Detail = ex.Message,
                Instance = traceId
            };
        }
    }
}