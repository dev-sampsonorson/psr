using System.Security.Principal;

namespace PSR.Auth.Interfaces
{
    public interface IIdentityParser<T>
    {
        T Parse(IPrincipal principal);
    }
}