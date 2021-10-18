using Microsoft.AspNetCore.Mvc;

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