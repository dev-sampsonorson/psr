using System.Net;
using System.Text.Json;
using PSR.Application.Exceptions;
using PSR.SharedKernel;

namespace PSR.Api.Helpers
{
    public class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next;

        public ErrorHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception error)
            {
                var response = context.Response;
                response.ContentType = "application/json";

                object responsePayload = new { message = error?.Message };

                switch(error)
                {
                    case AppException e:
                        // custom application error
                        response.StatusCode = (int)HttpStatusCode.BadRequest;
                        break;
                    case EntityNotFoundException e:
                        // not found error
                        response.StatusCode = (int)HttpStatusCode.NotFound;
                        break;
                    case JsonFormatException e:
                        responsePayload = e.ToValidationProblemDetails();
                        response.StatusCode = (int)HttpStatusCode.BadRequest;
                        break;
                    default:
                        // unhandled error
                        response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        break;
                }
                var options = new JsonSerializerOptions(JsonSerializerDefaults.Web);
                var result = JsonSerializer.Serialize(responsePayload, options);
                await response.WriteAsync(result);
            }
        }
        
    }
}