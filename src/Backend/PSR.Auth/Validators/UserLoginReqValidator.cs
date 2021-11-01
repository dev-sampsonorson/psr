using FluentValidation;
using PSR.Auth.Models.Request;

namespace PSR.Auth.Validators
{
    public class UserLoginReqValidator : AbstractValidator<UserLoginReq>
    {
        public UserLoginReqValidator() {
            RuleFor(x => x.Email).NotEmpty().NotNull().EmailAddress();
            RuleFor(x => x.Password).NotEmpty().NotNull().Matches(RegexPattern.Password);
        }
    }
}