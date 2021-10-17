using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using PSR.Api.Auth;
using PSR.Api.Interface;
using PSR.Application;

namespace PSR.Api.Controllers.v1
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        protected readonly ILogger _logger;

        public BaseController(ILoggerFactory loggerFactory) {
            _logger = loggerFactory.CreateLogger("PSR_Logs");
        }
    }
}