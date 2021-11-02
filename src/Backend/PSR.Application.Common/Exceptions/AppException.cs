using System;
using System.Globalization;

namespace PSR.Application.Common.Exceptions
{
    public class AppException : Exception
    {
        public AppException() : base() {
            Errors = new List<string>();
            Title = "Application error";
        }

        public AppException(string title, string message) : base(message) { 
            Errors = new List<string>() { message };
            Title = title;
        }

        public AppException(string title, string message, params object[] args) 
            : base(String.Format(CultureInfo.CurrentCulture, message, args))
        {
            Errors = new List<string>() { message };
            Title = title;
        }

        public AppException(string title, List<string> failures) : base() {
            Errors = failures;
            Title = title;
        }

        public AppException(string title, string[] failures)
            : this(title, failures.ToList())
        {}

        public string Title { get; }
        public List<string> Errors { get; }
    }
}