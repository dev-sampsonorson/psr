using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace PSR.Application.Common.Exceptions
{
    public static class AppExceptionExtensions
    {
        public static AppProblemDetails ToProblemDetails(this AppException exception) {
            string traceId = Guid.NewGuid().ToString();

            var prob = new AppProblemDetails(exception.Errors){
                Status = (int)HttpStatusCode.BadRequest,
                Type = "https://httpstatuses.com/400",
                Title = "Validation failed",
                Detail = "One or more inputs need to be corrected. Check errors for details",
                Instance = traceId
            };

            return prob;
        }
    }
}