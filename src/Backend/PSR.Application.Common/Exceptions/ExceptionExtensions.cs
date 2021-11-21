using Microsoft.AspNetCore.Mvc;

namespace PSR.Application.Common.Exceptions
{
    public static class ExceptionExtensions
    {
        public static ProblemDetails ToProblemDetails(this Exception ex, string type, string title, int statusCode) {
            string traceId = Guid.NewGuid().ToString();

            return new ProblemDetails{
                Status = statusCode,
                Type = type,
                Title = title,
                Detail = ex.Message,
                Instance = traceId
            };
        }
    }
}