namespace PSR.SharedKernel
{
    public static class ValidationPattern
    {
        public const string Email = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})";
    }
}