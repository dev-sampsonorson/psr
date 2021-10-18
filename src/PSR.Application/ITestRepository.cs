using PSR.Domain;
using PSR.SharedKernel;

namespace PSR.Application
{
    public interface ITestRepository : IRepository<Test>
    {
         string GetTestDescription();
    }
}