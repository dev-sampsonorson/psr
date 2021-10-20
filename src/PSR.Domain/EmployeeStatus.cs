using System;
using System.Collections.Generic;
using System.Linq;
using PSR.SharedKernel;

namespace PSR.Domain
{
    public class EmployeeStatus : Enumeration
    {
        public static EmployeeStatus InActive = new EmployeeStatus(1, nameof(InActive).ToLowerInvariant());
        public static EmployeeStatus Active = new EmployeeStatus(2, nameof(Active).ToLowerInvariant());

        public EmployeeStatus(int id, string name)
            : base(id, name)
        {
        }

        public static IEnumerable<EmployeeStatus> List() =>
            new[] { InActive, Active };

        public static EmployeeStatus FromName(string name)
        {
            var state = List()
                .SingleOrDefault(s => String.Equals(s.Name, name, StringComparison.CurrentCultureIgnoreCase));

            if (state == null)
            {
                throw new DomainException($"Possible values for EmployeeStatus: {String.Join(",", List().Select(s => s.Name))}");
            }

            return state;
        }

        public static EmployeeStatus From(int id)
        {
            var state = List().SingleOrDefault(s => s.Id == id);

            if (state == null)
            {
                throw new DomainException($"Possible values for OrderStatus: {String.Join(",", List().Select(s => s.Name))}");
            }

            return state;
        }
        
    }
}