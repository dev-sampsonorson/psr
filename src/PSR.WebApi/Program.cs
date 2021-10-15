using Microsoft.OpenApi.Models;
using PSR.WebApi;

var builder = WebApplication.CreateBuilder(args);
var startup = new Startup(builder.Configuration, builder.Environment);

startup.ConfigureServices(builder.Services);

using var app = builder.Build();

startup.Configure(app);

app.Run();