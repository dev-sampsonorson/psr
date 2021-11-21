using System;

namespace PSR.SharedKernel.Exceptions
{
    public class FailedOperationException : Exception
    {
        public FailedOperationException(string operation, string message)
            : base(@"{operation}: {message}")
        {
        }
    }
}