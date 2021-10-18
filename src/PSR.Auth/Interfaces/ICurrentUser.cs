namespace PSR.Auth.Interfaces
{
    public interface ICurrentUser
    {
         string UserId { get; }
         string FirstName { get; }
         string LastName { get; }
    }
}