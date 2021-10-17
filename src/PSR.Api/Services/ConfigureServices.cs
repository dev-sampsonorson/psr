using PSR.Api.Auth;

namespace PSR.Api.Services
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddApiServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<AppSettings>(configuration.GetSection("AppSettings"));

            return services;
        }
        
    }
}