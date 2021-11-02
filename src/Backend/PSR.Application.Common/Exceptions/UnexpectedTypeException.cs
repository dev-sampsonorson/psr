using System;

namespace PSR.Application.Common.Exceptions
{
    public class UnexpectedTypeException : Exception
    {
        public UnexpectedTypeException(string objectName, Type fromType, Type toType)
            : base($"{objectName} of '{fromType.Name}' expected to be of type '{toType.Name}'.")
        {
        }
        public UnexpectedTypeException(string objectName, object from, Type toType)
            : this(objectName, from.GetType(), toType)
        {
        }
    }
}