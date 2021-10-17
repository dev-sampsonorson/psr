namespace PSR.Application.Exceptions
{
    public class KeyNotFoundException : Exception
    {
        public KeyNotFoundException(string name, object key)
            : base(@"Entity ""{name}"" ({key}) was not found.")
        {
        }
    }
}