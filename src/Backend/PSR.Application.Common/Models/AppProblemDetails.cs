using Microsoft.AspNetCore.Mvc;

namespace PSR.Application.Common.Models
{
    public class AppProblemDetails : ProblemDetails
    {
        public AppProblemDetails(List<string> errors) {
            Errors = errors;
        }
        public List<string> Errors { get; }
    }
}