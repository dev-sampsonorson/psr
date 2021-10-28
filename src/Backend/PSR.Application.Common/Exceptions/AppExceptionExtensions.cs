using System.Net;
using Microsoft.AspNetCore.Mvc;
using PSR.Application.Common.Models;

namespace PSR.Application.Common.Exceptions
{
    public static class AppExceptionExtensions
    {
        public static AppProblemDetails ToProblemDetails(this AppException exception) {
            string traceId = Guid.NewGuid().ToString();

            var prob = new AppProblemDetails(exception.Errors){
                Status = (int)HttpStatusCode.BadRequest,
                Type = "app/general",
                Title = "Application error",
                Detail = exception.Message,
                Instance = traceId
            };

            return prob;
        }
    }
}