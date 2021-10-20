using System.Reflection;
using Microsoft.EntityFrameworkCore;
using PSR.Api.Converters;
using PSR.Api.Helpers;
using PSR.Api.Services;
using PSR.Application;
using PSR.Auth;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.Auth.Services;
using PSR.Infrastructure;
using PSR.Infrastructure.Data;

namespace PSR.Api
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public Startup(IConfiguration configuration, IWebHostEnvironment env) {
            _configuration = configuration;
            _env = env;
        }

        public void ConfigureServices(IServiceCollection services) {
            services.AddDbContext<AppDbContext>(options => {
                options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection"),
                    sqlServerOptionsAction: sqlOptions =>
                    {
                        sqlOptions.MigrationsAssembly(typeof(Startup).GetTypeInfo().Assembly.GetName().Name);
                        //Configuring Connection Resiliency: https://docs.microsoft.com/en-us/ef/core/miscellaneous/connection-resiliency 
                        sqlOptions.EnableRetryOnFailure(maxRetryCount: 15, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
                    });
                // options.UseLoggerFactory()
            });
            services.AddInfrastructureServices(_configuration);
            services.AddDefaultIdentity<ApplicationUser>()
                .AddEntityFrameworkStores<AppDbContext>();

            services.AddControllers().AddJsonOptions(options => {
                options.JsonSerializerOptions.Converters.Add(new CountryJsonConverter());
            });
            services.AddSwaggerGen(c => {
                c.SwaggerDoc("v1", new() { Title = "PSR.Api", Version = "v1" });
            });
            services.AddApiServices(_configuration);
            services.AddAuthServices(_configuration);
            services.AddApplicationServices(_configuration);

            services.AddHttpContextAccessor();
            services.AddScoped<ICurrentUserService, CurrentUserService>();
        }

        public void Configure(IApplicationBuilder app) {

            if (_env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PSR.Api v1"));
            }
            app.UseRouting();
            
            // app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();

            // global error handler
            app.UseMiddleware<ErrorHandlerMiddleware>();

            // app.UseMiddleware<JwtMiddleware>();
            app.UseEndpoints(x => x.MapControllers());

            app.UseEndpoints(endpoints => {
                endpoints.MapGet("/", async context => {
                    await context.Response.WriteAsync("Personal Skill Rating App");
                });
            });
        }
    }
}