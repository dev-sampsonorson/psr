using Microsoft.AspNetCore.Mvc;

namespace PSR.Api.Model.Response
{
    public class ValidationProblemDetails : ProblemDetails
    {
        public ValidationResultItem[] Errors { get; set; }

        public ValidationProblemDetails(IEnumerable<ValidationResultItem> result) {
            Errors = result.ToArray();
        }
    }
}