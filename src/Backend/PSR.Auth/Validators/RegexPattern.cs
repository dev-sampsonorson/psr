namespace PSR.Auth.Validators
{
    public class RegexPattern
    {
        public const string Password = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})";
    }
}