using System;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using PSR.Auth.Configuration;
using PSR.Auth.Domain;
using PSR.Auth.Interfaces;
using PSR.Auth.Services;

namespace PSR.Auth
{
    public static class AuthConfigureServices
    {
        public static IServiceCollection AddAuthServices(this IServiceCollection services, IConfiguration configuration) {
            services.Configure<JwtSettings>(configuration.GetSection("JwtSettings"));

            
            var key = Encoding.ASCII.GetBytes(configuration["JwtSettings:Secret"]);
            var tokenValidationParams = new TokenValidationParameters {
                // this will validate the 3rd part of our jwt using our secret
                // the last part of a Jwt is encrypted
                // will validtate the the 3rd part was encrypted by us
            
                // the signing key is valid and is trusted by the server
                ValidateIssuerSigningKey = true, 
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidIssuer = configuration["JwtSettings:Issuer"],
                ValidAudience = configuration["JwtSettings:Audience"],

                ValidateLifetime = true,
                RequireExpirationTime = true,
                ClockSkew = TimeSpan.Zero            
            };
            services.AddSingleton(tokenValidationParams);
            services.AddAuthentication(options => {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme; // incase the first one fails
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(jwt => {
                jwt.SaveToken = true;
                jwt.TokenValidationParameters = tokenValidationParams;
            });

            /*
            TODO: options => options.SignIn.RequireConfirmedAccount = true
            */

            // TODO: Might replace Identity Parser
            services.AddTransient<IIdentityParser<ICurrentUser>, IdentityParser>();


            services.AddScoped<IIdentityService, IdentityService>();
            services.AddScoped<IAuthService, AuthService>();

            return services;
        }
    }
}