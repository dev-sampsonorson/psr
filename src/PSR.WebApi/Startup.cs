namespace PSR.WebApi
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
            services.AddControllers();
            services.AddSwaggerGen(c => {
                c.SwaggerDoc("v1", new() { Title = "PSR.WebApi", Version = "v1" });
            });
        }

        public void Configure(IApplicationBuilder app) {

            if (_env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PSR.WebApi v1"));
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