namespace PSR.Application.Common
{
    public class RegexPattern
    {
        public const string Password = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})";
        public const string NotAlphanumeric = @"[^a-zA-Z0-9]+";
        public const string LowercaseAlphanumericDash = @"^[a-z0-9-]+$";
        public const string Slug = @"^[a-z0-9-]+$";
    }
}