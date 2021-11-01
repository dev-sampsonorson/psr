using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using PSR.Api.Interfaces;
using PSR.Application;
using PSR.Application.Common.Models;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.SharedKernel;
using PSR.SharedKernel.Extensions;

namespace PSR.Api.Controllers.v1
{
    // [Authorize()]
    // [Authorize(Policy = "OrganizationPolicy", Roles = "AppUser")]
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
        public IActionResult GetTestDescription() {
            // throw new Exception("kkkkkkkkkkkkkkkkkkk");

            /* throw new HttpResponseException() {
                Status = 444,
                Value = new { Message = "iiiiiiiiiiiiii"}
            }; */

            var kkk = HttpContext.User;
            var kkkk = _currentUserService.CurrentUser;
            var eeee = HttpContext.Items;
            
            // var uri = API.Basket.GetBasket(_basketByPassUrl, user.Id);
            return Ok(Result.Success(_testRepository.GetTestDescription()));
        }
    }
}