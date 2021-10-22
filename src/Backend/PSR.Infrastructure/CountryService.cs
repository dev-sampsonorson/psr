using System;
using System.Collections.Generic;
using PSR.Application;
using PSR.Application.Response;
using PSR.Infrastructure.Data;

namespace PSR.Infrastructure
{
    public class CountryService : ICountryService
    {
        private readonly AppDbContext _context;

        public CountryService(AppDbContext context) {
            _context = context;
        }

        public List<CountryRes> GetCountries()
        {
            throw new NotImplementedException();
        }

        List<CountryRes> ICountryService.GetCountries()
        {
            throw new System.NotImplementedException();
        }
    }
}