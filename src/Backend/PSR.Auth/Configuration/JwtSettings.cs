using System;

namespace PSR.Auth.Configuration
{
    public class JwtSettings
    {
        public string Secret { get; set; } = "";
        public string Issuer { get; set; } = "";
        public string Audience { get; set; } = "";
        public int RefreshTokenTTL { get; set; } = 1;
        public TimeSpan TokenLifetime { get; set; } = TimeSpan.MinValue;
        public TimeSpan RefreshTokenLifetime { get; set; } = TimeSpan.MinValue;
        public TimeSpan CookieTokenLifetime { get; set; } = TimeSpan.MinValue;
    }
}