using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PSR.Api.Controllers.v1;

namespace PSR.Api.Controllers
{
    public class ErrorController : BaseController
    {

        public ErrorController(ILoggerFactory loggerFactory) : base(loggerFactory) {
        }
        
        public IActionResult Error() => Problem();  
        [HttpGet("development")]
        public IActionResult ErrorLocalDevelopment([FromServices] IWebHostEnvironment webHostEnvironment) {
            if (webHostEnvironment.EnvironmentName != "Development") {
                throw new InvalidOperationException(
                    "This shouldn't be invoked in non-development environments.");
            }
    
            var context = HttpContext.Features.Get<IExceptionHandlerFeature>();
    
            return Problem(
                detail: context?.Error.StackTrace,
                title: context?.Error.Message);
        }
        
    }
}