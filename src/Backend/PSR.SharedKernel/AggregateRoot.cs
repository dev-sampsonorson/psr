namespace PSR.SharedKernel
{
    public abstract class AggregateRoot : BaseEntity
    {

        /* private readonly List<IDomainEvent> _domainEvents = new List<IDomainEvent>();
        public IReadOnlyList<IDomainEvent> DomainEvents => _domainEvents; */

        /*
            Only entities themselves may raise the events, this method
            shouldn't be accessible to other classes

            Raising an event is a responsibility of an aggregate root
            and not an entity
        */
        /* protected virtual void RaiseDomainEvent(IDomainEvent domainEvent) {
            _domainEvents.Add(domainEvent);
        }

        public virtual void ClearEvents()
        {
            _domainEvents.Clear();
        } 
        
        public void Load(IEnumerable<IDomainEvent> history)
        {
            foreach (var e in history)
            {
                Apply(e);
                Version++;
            }
        }

        protected abstract void Apply(IDomainEvent @event);

        protected static void CheckRule(IBusinessRule rule)
        {
            if (rule.IsBroken())
            {
                throw new BusinessRuleValidationException(rule);
            }
        }
        
        
        */
        
    }
}