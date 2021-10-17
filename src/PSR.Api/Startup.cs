using System.Reflection;
using Microsoft.EntityFrameworkCore;
using PSR.Api.Services;
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


            services.AddControllers();
            services.AddSwaggerGen(c => {
                c.SwaggerDoc("v1", new() { Title = "PSR.Api", Version = "v1" });
            });
            services.AddApiServices(_configuration);
        }

        public void Configure(IApplicationBuilder app) {

            if (_env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PSR.Api v1"));
            }
            app.UseRouting();
            
            // app.UseHttpsRedirection();
            
            app.UseAuthorization();

            app.UseEndpoints(x => x.MapControllers());

            app.UseEndpoints(endpoints => {
                endpoints.MapGet("/", async context => {
                    await context.Response.WriteAsync("Personal Skill Rating App");
                });
            });
        }
    }
}