using System;

namespace PSR.Application.Exceptions
{
    public class JsonFormatException : Exception
    {
        public string Property { get; set; }
        public JsonFormatException(string property)
            : base($"\"{property}\" has an invalid format in JSON request.")
        {
            Property = property;
        }
    }
}