namespace PSR.Application.Interfaces
{
    // Wrapper for third party Message Bus SDK
    public interface IEventsBus : IDisposable
    {
         Task Publish<T>(T domainEvent);


         /* Task Publish<T>(T @event)
            where T : IntegrationEvent;

        void Subscribe<T>(IIntegrationEventHandler<T> handler)
            where T : IntegrationEvent;

        void StartConsuming(); */
    }
}