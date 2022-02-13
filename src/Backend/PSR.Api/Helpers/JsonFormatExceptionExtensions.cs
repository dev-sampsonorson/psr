using System.Net;
using Microsoft.AspNetCore.Mvc;
using PSR.Api.Model.Response;
using PSR.Application.Exceptions;
using ValidationProblemDetails = PSR.Api.Model.Response.ValidationProblemDetails;

namespace PSR.Api.Helpers
{
    public static class JsonFormatExceptionExtensions
    {
        public static ValidationProblemDetails ToValidationProblemDetails(this JsonFormatException exception) {
            List<ValidationResultItem> errorResponse = new List<ValidationResultItem>() {
                new ValidationResultItem {
                    Field = exception.Property,
                    Message = exception.Message
                }
            };
            string traceId = Guid.NewGuid().ToString();
            var validation = new ValidationProblemDetails(errorResponse){
                Status = (int)HttpStatusCode.BadRequest,
                Type = "validation",
                Title = "Validation failed",
                Detail = "Request payload contains invalid data.",
                Instance = traceId
            };

            return validation;
        }
        
    }
}