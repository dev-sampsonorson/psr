using Microsoft.AspNetCore.Mvc;
using PSR.Application.Interfaces;
using PSR.Application.Response;
using PSR.SharedKernel;

namespace PSR.Api.Controllers.v1
{
    public class LookupController : BaseController
    {
        private readonly ILookupService _lookupService;

        public LookupController(ILoggerFactory loggerFactory, ILookupService lookupService) : base(loggerFactory) { 
            _lookupService = lookupService;
        }

        [HttpGet("countries")]
        public IActionResult GetCountries() {
            return Ok(Result<List<LookupRes>>.Success(_lookupService.GetCountries()));
        }
        
    }
}