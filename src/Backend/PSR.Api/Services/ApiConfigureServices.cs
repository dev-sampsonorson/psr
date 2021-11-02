using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Mvc;
using PSR.Api.Converters;
using PSR.Api.Filters;
using PSR.Api.Infrastructure;
using PSR.Api.Interfaces;
using PSR.Application;
using PSR.Auth;

namespace PSR.Api.Services
{
    public static class ApiConfigureServices
    {
        private static readonly string AllowSpecificOrigins = "_psrAllowSpecificOrigins";
        // private static readonly string CorsPolicyName = "CorsPolicy";
        public static IServiceCollection AddApiServices(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddControllers(options => {
                options.Filters.Add<ValidationFilter>();

                // using global exception handler instead
                // options.Filters.Add(new HttpResponseExceptionFilter());
            })
            .AddJsonOptions(options => {
                options.JsonSerializerOptions.Converters.Add(new CountryJsonConverter());
            })
            .AddFluentValidation(x => {
                x.RegisterValidatorsFromAssemblyContaining<AuthLayerMarker>();
                x.RegisterValidatorsFromAssemblyContaining<ApplicationLayerMarker>();
            });
            
            services.AddCors(options =>
            {
                options.AddPolicy(AllowSpecificOrigins,
                    builder => builder
                    .WithOrigins("http://localhost:4200")
                    // .SetIsOriginAllowed((host) => true) // allow any origin
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
                );
            });

            // Customise default API behaviour
            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressModelStateInvalidFilter = true;
            });

            services.Configure<AppSettings>(configuration.GetSection("AppSettings"));
            services.AddApiVersioning(options => {
                // provides to the client the different Api versions that we have
                options.ReportApiVersions = true;
            
                // this will allow the api to automatically provide a default version
                options.AssumeDefaultVersionWhenUnspecified = true;
            
                // `ApiVersion.Default` => the default API version, which is always "1.0".
                options.DefaultApiVersion = ApiVersion.Default;
            });

            services.AddScoped<IAuthService, AuthService>();

            return services;
        }

        public static void UseApiServices(this IApplicationBuilder app, IConfiguration configuration) {
            app.UseCors(AllowSpecificOrigins);
        }
        
    }
}