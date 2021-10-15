using PSR.Domain;

namespace PSR.Application
{
    public interface ITestRepository : IRepository<Test>
    {
         string GetTestDescription();
    }
}