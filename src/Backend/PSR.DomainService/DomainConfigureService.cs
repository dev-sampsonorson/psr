using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PSR.Domain.Interfaces;

namespace PSR.DomainService
{
    public static class DomainConfigureService
    {
        public static IServiceCollection AddDomainServices(this IServiceCollection services, IConfiguration configuration) {
            services.AddScoped<IEmployeeService, EmployeeService>();

            return services;
        }
    }
}