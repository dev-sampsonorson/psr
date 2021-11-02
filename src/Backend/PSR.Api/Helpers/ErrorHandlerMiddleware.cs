using System.Net;
using System.Text.Json;
using PSR.Application.Common.Exceptions;
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

                var options = new JsonSerializerOptions(JsonSerializerDefaults.Web);
                var result = JsonSerializer.Serialize(new { message = error?.Message }, options);

                switch(error)
                {
                    case AppException e:
                        // custom application error
                        response.StatusCode = (int)HttpStatusCode.BadRequest;
                        result = JsonSerializer.Serialize(e.ToProblemDetails(), options);
                        break;
                    case RequestFormatException e:
                        response.StatusCode = (int)HttpStatusCode.BadRequest;
                        result = JsonSerializer.Serialize(e.ToProblemDetails(), options);
                        break;
                    case EntityNotFoundException e:
                        // not found error
                        response.StatusCode = (int)HttpStatusCode.NotFound;
                        break;
                    // thrown from ef core ef entities are not valid
                    case RepositoryException _:
                    case UnexpectedTypeException _:
                    default:
                        // unhandled error
                        response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        break;
                }
                
                await response.WriteAsync(result);
            }
        }
        
    }
}
/* case JsonFormatException e:
    responsePayload = e.ToValidationProblemDetails();
    response.StatusCode = (int)HttpStatusCode.BadRequest;
    break; */