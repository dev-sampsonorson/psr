using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using PSR.Application;
using PSR.Application.Repository;
using PSR.Auth.Interfaces;
using PSR.Infrastructure.Repository;

namespace PSR.Infrastructure
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {           

            services.AddLogging(configure => configure.AddConsole());

            services.AddScoped<ITestRepository, TestRepository>();
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            services.AddScoped<ISkillRepository, SkillRepository>();
            services.AddScoped<IRefreshTokenRepository, RefreshTokenRepository>();
            // services.AddScoped<IRepositoryFactory, RepositoryFactory>();
            // services.AddScoped<IUnitOfWork, UnitOfWork>();

            return services;
        }
    }
}