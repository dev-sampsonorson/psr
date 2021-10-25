using PSR.Application.Interfaces;
using PSR.Application.Response;
using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Application.Services
{
    public class LookupService : ILookupService
    {
        public List<LookupRes> GetCountries() {
            return Country.List().Select(x => new LookupRes(x.Id, x.Name)).ToList();
        }
    }
}