using Microsoft.AspNetCore.Mvc;
using PSR.SharedKernel.Exceptions;

namespace PSR.Application.Common.Exceptions
{
    public static class EntityNotFoundExceptionExtensions
    {
        public static ProblemDetails ToProblemDetails(this EntityNotFoundException ex, int statusCode) {
            string traceId = Guid.NewGuid().ToString();

            return new ProblemDetails{
                Status = statusCode,
                Type = "not-found",
                Title = "Resource not found",
                Detail = ex.Message,
                Instance = traceId
            };
        }
    }
}