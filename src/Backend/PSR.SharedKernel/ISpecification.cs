using System;
using System.Linq.Expressions;

namespace PSR.SharedKernel
{
    public interface ISpecification<T>
    {
        Expression<Func<T, bool>> Criteria { get; }
    }
}