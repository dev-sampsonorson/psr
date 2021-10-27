using Microsoft.AspNetCore.Mvc;
using PSR.Application.Common;
using PSR.Domain;

namespace PSR.Api.Controllers.v1
{
    public class LookupController : BaseController
    {

        public LookupController(
            ILoggerFactory loggerFactory) : base(loggerFactory) 
        {
        }

        [HttpGet("countries")]
        public IActionResult GetCountries() {
            return Ok(Country.List().Select(item => new LookupItem(item.Id, item.Name)));
        }
        
    }
}