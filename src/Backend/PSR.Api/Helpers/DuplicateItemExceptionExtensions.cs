using Microsoft.AspNetCore.Mvc;
using PSR.SharedKernel.Exceptions;

namespace PSR.Api.Helpers
{
    public static class DuplicateItemExceptionExtensions
    {
        public static ProblemDetails ToProblemDetails(this DuplicateItemException ex, int statusCode) {
            string traceId = Guid.NewGuid().ToString();

            return new ProblemDetails{
                Status = statusCode,
                Type = "validation",
                Title = "Duplicate item",
                Detail = ex.Message,
                Instance = traceId
            };
        }
        
    }
}