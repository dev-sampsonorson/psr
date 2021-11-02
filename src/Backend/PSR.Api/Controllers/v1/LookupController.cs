using Microsoft.AspNetCore.Mvc;
using PSR.Application.Common;
using PSR.Application.Interfaces;
using PSR.Domain;

namespace PSR.Api.Controllers.v1
{
    public class LookupController : BaseController
    {
        private readonly ILookupService _lookupService;

        public LookupController(
            ILoggerFactory loggerFactory,
            ILookupService lookupService) : base(loggerFactory) 
        {
            _lookupService = lookupService;
        }

        [HttpGet("countries")]
        public IActionResult GetCountries() {
            return Ok(_lookupService.GetCountries());
        }
        
    }
}