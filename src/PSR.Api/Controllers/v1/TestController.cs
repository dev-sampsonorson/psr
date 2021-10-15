using Microsoft.AspNetCore.Mvc;
using PSR.Application;

namespace PSR.Api.Controllers.v1
{
    // [ApiController]
    // [Route("api/[controller]")]
    public class TestController : BaseController
    {
        private readonly ILogger _logger;
        /* public TestController(ILoggerFactory loggerFactory) {
            _logger = loggerFactory.CreateLogger("PSR_Logs");
        } */
        public TestController(IUnitOfWork unitOfWork, ILoggerFactory loggerFactory) : base(unitOfWork) {
            _logger = loggerFactory.CreateLogger("PSR_Logs");
        }
        
        [HttpGet]
        public IActionResult GetTestDescription() {
            ITestRepository repo = _unitOfWork.Get<ITestRepository>();


            return Ok(repo.GetTestDescription());
        }
    }
}