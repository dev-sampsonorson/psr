namespace PSR.Application.Exceptions
{
    public class InvalidCastingException : Exception
    {
        public InvalidCastingException(string from, string to)
            : base(@"""{from}"" cannot be cast to ""{to}"".")
        {
        }
    }
}