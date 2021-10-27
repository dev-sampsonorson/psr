using Microsoft.AspNetCore.Mvc;
using PSR.Application.Common.Exceptions;

namespace PSR.Api.Controllers.v1
{
    public class ErrorController : BaseController
    {

        public ErrorController(
            ILoggerFactory loggerFactory) : base(loggerFactory)
        {
        }

        [HttpGet("get-error")]
        public IActionResult GetError() {
            throw new AppException();
        }
        
    }
}