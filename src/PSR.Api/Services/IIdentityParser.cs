using System.Security.Principal;

namespace PSR.Api.Services
{
    public interface IIdentityParser<T>
    {
        T Parse(IPrincipal principal);
    }
}