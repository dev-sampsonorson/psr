using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using PSR.Api.Auth;
using PSR.Api.Interface;
using PSR.Application;

namespace PSR.Api.Controllers.v1
{
    // [ApiController]
    // [Route("api/[controller]")]
    public class TestController : BaseController
    {
        private readonly ITestRepository _testRepository;
        
        public TestController(ITestRepository testRepository, ILoggerFactory loggerFactory) : base(loggerFactory) {
            _testRepository = testRepository ?? throw new ArgumentNullException(nameof(testRepository));
        }
        
        [HttpGet(ApiRoutes.Test.GetTestDescription)]
        public IActionResult GetTestDescription() {
            
            // var uri = API.Basket.GetBasket(_basketByPassUrl, user.Id);
            return Ok(_testRepository.GetTestDescription());
        }
    }
}