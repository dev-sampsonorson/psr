using System.Reflection;
using AutoMapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PSR.Application.Interfaces;
using PSR.Application.Services;

namespace PSR.Application
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration) {

            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddScoped<ILookupService, LookupService>();

            return services;
        }
    }
}