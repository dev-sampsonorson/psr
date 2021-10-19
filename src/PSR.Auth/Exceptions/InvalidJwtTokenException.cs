namespace PSR.Auth.Exceptions
{
    public class InvalidJwtTokenException : Exception
    {
        public InvalidJwtTokenException(string message)
            : base($"Invalid token: {message}.")
        {
        }
        
    }
}