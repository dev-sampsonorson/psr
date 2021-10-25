using Microsoft.AspNetCore.Mvc;
using PSR.Api.Infrastructure;
using PSR.Api.Interfaces;

namespace PSR.Api.Services
{
    public static class ApiConfigureServices
    {
        private static readonly string CorsPolicyName = "CorsPolicy";
        public static IServiceCollection AddApiServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<AppSettings>(configuration.GetSection("AppSettings"));
            services.AddApiVersioning(options => {
                // provides to the client the different Api versions that we have
                options.ReportApiVersions = true;
            
                // this will allow the api to automatically provide a default version
                options.AssumeDefaultVersionWhenUnspecified = true;
            
                // `ApiVersion.Default` => the default API version, which is always "1.0".
                options.DefaultApiVersion = ApiVersion.Default;
            });

            services.AddCors(options => {
                options.AddPolicy(CorsPolicyName,
                    builder => builder
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .SetIsOriginAllowed((host) => true)
                    .AllowCredentials());
            });

            services.AddScoped<IUserAuthFacade, UserAuthFacade>();

            return services;
        }

        public static void UseApiServices(this IApplicationBuilder app, IConfiguration configuration) {
            app.UseCors(CorsPolicyName);
        }
        
    }
}