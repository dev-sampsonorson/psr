using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using PSR.Api.Model.Response;
using ValidationProblemDetails = PSR.Api.Model.Response.ValidationProblemDetails;

namespace PSR.Api.Filters
{
    public class ValidationFilter : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next) {
            if (!context.ModelState.IsValid) {
                var errorsInModelState = context.ModelState
                    .Where(x => x.Value?.Errors.Count > 0)
                    .ToDictionary(kvp => kvp.Key, kvp => kvp.Value?.Errors.Select(x => x.ErrorMessage)).ToArray();

                // var errorResponse = new ErrorRes();
                List<ValidationResultItem> errorResponse = new List<ValidationResultItem>();
                foreach(var error in errorsInModelState) {
                    foreach(var subError in error.Value!) {
                        var item = new ValidationResultItem {
                            Field = error.Key,
                            Message = subError
                        };

                        errorResponse.Add(item);
                        // errorResponse.Errors.Add(errorModel);
                    }
                }
                

                string traceId = Guid.NewGuid().ToString();
                var validation = new ValidationProblemDetails(errorResponse){
                    Status = (int)HttpStatusCode.BadRequest,
                    Type = "https://httpstatuses.com/400",
                    Title = "Validation failed",
                    Detail = "Request payload contains invalid data.",
                    Instance = traceId
                };

                context.Result = new BadRequestObjectResult(validation);
                return;
            }


            await next();
        }
    }
}