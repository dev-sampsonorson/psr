using System;

namespace PSR.SharedKernel.Exceptions
{
    public class DuplicateItemException : Exception
    {
        public DuplicateItemException(string message)
            : base(message)
        {
        }
    }
}