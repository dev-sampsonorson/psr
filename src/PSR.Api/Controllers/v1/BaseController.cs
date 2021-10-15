using Microsoft.AspNetCore.Mvc;
using PSR.Application;

namespace PSR.Api.Controllers.v1
{
    // [ApiVersion("1.0")]
    // [Route("api/v{version:apiVersion}/[controller]")]
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        protected readonly IUnitOfWork _unitOfWork;

        public BaseController(IUnitOfWork unitOfWork) {
            _unitOfWork = unitOfWork;
        }
    }
}