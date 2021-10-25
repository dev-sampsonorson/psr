using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;

namespace PSR.SharedKernel
{
    public class Result
    {
        internal Result(bool succeeded, string message, IEnumerable<string> errors)
        {
            Succeeded = succeeded;
            Message = message;
            Errors = errors.ToArray();
        }

        public bool Succeeded { get; private set; }

        public string Message { get; private set; }

        public string[] Errors { get; private set; }

        public static Result Success()
        {
            return new Result(true, "", new string[] { });
        }

        public static Result Success(string message)
        {
            return new Result(true, message, new string[] { });
        }

        public static Result Failure(IEnumerable<string> errors)
        {
            return new Result(false, "", errors);
        }

        public static Result Failure(string error)
        {
            return new Result(false, "", new string[] { error });
        }
    }

    public class Result<T> : Result {
        [JsonPropertyName("result")]
        public T Value { get; private set; } = default!;
     
        protected internal Result(T value, bool success, string message, IEnumerable<string> errors)
            : base(success, message, errors) {

            Value = value;
        }

        public static Result<T> Success(T value)
        {
            return new Result<T>(value, true, "", new string[] { });
        }

        public static Result<T> Success(T value, string message)
        {
            return new Result<T>(value, true, message, new string[] { });
        }
    }
}