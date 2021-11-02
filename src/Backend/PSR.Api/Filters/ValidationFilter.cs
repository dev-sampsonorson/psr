using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using PSR.Application.Common.Exceptions;
using PSR.Application.Common.Models;
using PSR.Application.Common.Models.Response;

namespace PSR.Api.Filters
{
    public class ValidationFilter : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {

            if (!context.ModelState.IsValid) {
                var errorsInModelState = context.ModelState
                    .Where(x => x.Value?.Errors.Count > 0)
                    .ToDictionary(pair => pair.Key, pair => pair.Value?.Errors.Select(x => x.ErrorMessage)).ToArray();

                // var errorResponse = new ErrorRes();
                List<ErrorItem> errorResponse = new List<ErrorItem>();
                foreach(var error in errorsInModelState) {
                    foreach(var subError in error.Value!) {
                        errorResponse.Add(new ErrorItem {
                            Field = error.Key,
                            Message = subError
                        });
                    }
                }
                
                context.Result = new BadRequestObjectResult(new AppValidationProblemDetails(errorResponse) {
                    Status = (int)HttpStatusCode.BadRequest,
                    Type = "validation",
                    Title = "Validation failed",
                    Detail = "One or more inputs need to be corrected. Check errors for details",
                    Instance = Guid.NewGuid().ToString()
                });
                return;
            }
            

            await next();
        }
    }
}