namespace PSR.Auth.Exceptions
{
    public class ClaimNotFoundException: Exception
    {
        public ClaimNotFoundException(string name)
            : base(@"Identity Claim ""{name}"" was not found.")
        {
        }
    }
}