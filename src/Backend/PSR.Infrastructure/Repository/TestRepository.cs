using Microsoft.Extensions.Logging;
using PSR.Application;
using PSR.Domain;
using PSR.Infrastructure.Data;

namespace PSR.Infrastructure.Repository
{
    public class TestRepository : BaseRepository<Test>, ITestRepository
    {
        public TestRepository(AppDbContext context, ILogger<TestRepository> logger) : base(context, logger) {
        }

        public string GetTestDescription()
        {
            return "This is the test description";
        }
    }
}