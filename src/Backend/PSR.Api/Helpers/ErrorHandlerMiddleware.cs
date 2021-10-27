using System.Net;
using System.Text.Json;
using PSR.Application.Common.Exceptions;
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

                
                var result = JsonSerializer.Serialize(new { message = error?.Message });

                switch(error)
                {
                    case AppException e:
                        // custom application error
                        response.StatusCode = (int)HttpStatusCode.BadRequest;
                        result = JsonSerializer.Serialize(e.ToProblemDetails());
                        break;
                    case RequestFormatException e:
                        response.StatusCode = (int)HttpStatusCode.BadRequest;
                        result = JsonSerializer.Serialize(e.ToProblemDetails());
                        break;
                    case EntityNotFoundException e:
                        // not found error
                        response.StatusCode = (int)HttpStatusCode.NotFound;
                        break;
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