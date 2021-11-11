using System.Reflection;
using FluentValidation;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace PSR.Application.Common
{
    public static class ApplicationCommonConfigureServices
    {
        public static IServiceCollection AddApplicationCommonServices(this IServiceCollection services, IConfiguration configuration) {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

            return services;
        }
    }
}