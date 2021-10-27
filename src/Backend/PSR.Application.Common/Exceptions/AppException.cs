using System;
using System.Globalization;

namespace PSR.Application.Common.Exceptions
{
    public class AppException : Exception
    {
        public AppException() : base() {
            Errors = new List<string>();
        }

        public AppException(string message) : base(message) { 
            Errors = new List<string>() { message };
        }

        public AppException(string message, params object[] args) 
            : base(String.Format(CultureInfo.CurrentCulture, message, args))
        {
            Errors = new List<string>() { message };
        }

        public AppException(List<string> failures)
            : this()
        {
            Errors = failures;
        }

        public List<string> Errors { get; }
    }
}