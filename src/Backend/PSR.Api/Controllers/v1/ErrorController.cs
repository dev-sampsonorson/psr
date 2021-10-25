using Microsoft.AspNetCore.Mvc;
using PSR.Application.Exceptions;
using PSR.Auth.Interfaces;

namespace PSR.Api.Controllers.v1
{
    public class ErrorController : BaseController
    {
        private readonly ICurrentUserService _currentUserService;
        
        public ErrorController(
            ILoggerFactory loggerFactory,
            ICurrentUserService currentUserService) : base(loggerFactory) {
            _currentUserService = currentUserService ?? throw new ArgumentNullException(nameof(currentUserService));
        }

        [HttpGet("get-error")]
        public IActionResult GetErroor() {
            throw new JsonFormatException("name");
        }
        
    }
}