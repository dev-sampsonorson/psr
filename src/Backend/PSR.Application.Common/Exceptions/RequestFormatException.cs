using System;

namespace PSR.Application.Common.Exceptions
{
    public class RequestFormatException : Exception
    {
        public RequestFormatException(string property)
            : base($"\"{property}\" has an invalid format in JSON request.")
        {
        }
    }
}