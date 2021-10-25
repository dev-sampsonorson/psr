using System.Collections.ObjectModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using PSR.Api.Interfaces;
using PSR.Api.Model.Request;
using PSR.Application;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;

namespace PSR.Api.Controllers.v1
{
    // [Authorize()]
    public class TestController : BaseController
    {
        private readonly ITestRepository _testRepository;
        private readonly ICurrentUserService _currentUserService;
        
        public TestController(
            ITestRepository testRepository, 
            ILoggerFactory loggerFactory,
            ICurrentUserService currentUserService) : base(loggerFactory) {
            _testRepository = testRepository ?? throw new ArgumentNullException(nameof(testRepository));
            _currentUserService = currentUserService ?? throw new ArgumentNullException(nameof(currentUserService));
        }
        
        [Authorize]
        [HttpGet(ApiRoutes.Test.GetTestDescription)]
        [Authorize(Policy = "OrganizationPolicy", Roles = "AppUser")]
        public IActionResult GetTestDescription() {

            var kkk = HttpContext.User;
            var kkkk = _currentUserService.CurrentUser;
            var eeee = HttpContext.Items;
            
            // var uri = API.Basket.GetBasket(_basketByPassUrl, user.Id);
            return Ok(_testRepository.GetTestDescription());
        }

        [HttpGet("angular")]
        public IActionResult GetAngularResponse() {
            return Ok(new { message = "angular" });
        }

        [HttpPost("validation")]
        public IActionResult GetValidationError(TestReq validation) {
            return Ok(new { message ="success" });
        }
    }
}