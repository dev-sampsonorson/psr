using PSR.Application.Interfaces;

namespace PSR.Infrastructure
{
    public class InMemoryEventBus : IEventsBus
    {
        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public Task Publish<T>(T domainEvent)
        {
            throw new NotImplementedException();
        }
    }
}