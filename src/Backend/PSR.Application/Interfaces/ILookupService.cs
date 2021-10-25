using PSR.Application.Response;

namespace PSR.Application.Interfaces
{
    public interface ILookupService
    {
         List<LookupRes> GetCountries();
    }
}