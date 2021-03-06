using System;

namespace PSR.SharedKernel.Exceptions
{
    public class EntityNotFoundException : Exception
    {
        public EntityNotFoundException(string name, object key)
            : base($"Entity \"{name}\" ({key}) was not found.")
        {
        }
        public EntityNotFoundException(string message)
            : base(message)
        {
        }
    }
}