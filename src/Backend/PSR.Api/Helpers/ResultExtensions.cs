using System.Net;
using PSR.Application.Common.Models;

namespace PSR.Api.Helpers
{
    public static class ResultExtensions
    {
        public static AppProblemDetails ToProblemDetails(this Result result) {
            
            string traceId = Guid.NewGuid().ToString();

            return new AppProblemDetails(result.Errors.ToList()){
                Status = (int)HttpStatusCode.BadRequest,
                Type = "app/general",
                Title = "Application error",
                Detail = result.Errors.FirstOrDefault(),
                Instance = traceId
            };
        }
    }
}