using Microsoft.AspNetCore.Mvc;
using PSR.Application.Common.Models.Response;

namespace PSR.Application.Common.Models
{
    public class AppValidationProblemDetails : ProblemDetails
    {
        public AppValidationProblemDetails(List<ErrorItem> errors) {
            Errors = errors;
        }
        public List<ErrorItem> Errors { get; }
    }
}