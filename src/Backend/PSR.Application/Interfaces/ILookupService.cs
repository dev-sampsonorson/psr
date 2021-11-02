using PSR.Application.Common;

namespace PSR.Application.Interfaces
{
    public interface ILookupService
    {
         List<LookupItem> GetCountries();
    }
}