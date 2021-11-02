using PSR.Application.Common;
using PSR.Application.Interfaces;
using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Application.Services
{
    public class LookupService : ILookupService
    {
        public List<LookupItem> GetCountries() {
            return Country.List().Select(x => new LookupItem(x.Id, x.Name)).ToList();
        }
    }
}