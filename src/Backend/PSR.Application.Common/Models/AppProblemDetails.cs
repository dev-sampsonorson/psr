using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;

namespace PSR.Application.Common.Models
{
    public class AppProblemDetails : ProblemDetails
    {
        public AppProblemDetails(List<string> errors) {
            Errors = errors;
        }

        [JsonPropertyName("errors")]
        public List<string> Errors { get; }
    }
}