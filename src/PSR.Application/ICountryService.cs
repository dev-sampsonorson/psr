using PSR.Application.Response;

namespace PSR.Application
{
    public interface ICountryService
    {
         List<CountryRes> GetCountries();
    }
}