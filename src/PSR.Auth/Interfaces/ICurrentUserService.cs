namespace PSR.Auth.Interfaces
{
    public interface ICurrentUserService
    {
        ICurrentUser CurrentUser { get; }
    }
}