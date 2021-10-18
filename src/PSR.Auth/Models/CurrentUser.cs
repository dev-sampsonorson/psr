using PSR.Auth.Interfaces;

namespace PSR.Auth.Models
{
    public class CurrentUser : ICurrentUser {
        public CurrentUser(string userId, string firstName, string lastName) {
            UserId = userId;
            FirstName = firstName;
            LastName = lastName;
        }

        public string UserId { get; }
        public string FirstName { get; }
        public string LastName { get; }
    }
}