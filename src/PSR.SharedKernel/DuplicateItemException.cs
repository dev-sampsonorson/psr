using System;

namespace PSR.SharedKernel
{
    public class DuplicateItemException : Exception
    {
        public DuplicateItemException(string message)
            : base(message)
        {
        }
    }
}