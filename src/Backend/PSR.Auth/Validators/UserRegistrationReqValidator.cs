using FluentValidation;
using PSR.Auth.Models.Request;
using PSR.Domain;

namespace PSR.Auth.Validators
{
    public class UserRegistrationReqValidator : AbstractValidator<UserRegistrationReq>
    {
        public UserRegistrationReqValidator() {
            RuleFor(x => x.Email).NotEmpty().NotNull().EmailAddress();
            RuleFor(x => x.Password).NotEmpty().NotNull().Matches(RegexPattern.Password);
            RuleFor(x => x.FirstName).NotEmpty().NotNull();
            RuleFor(x => x.LastName).NotEmpty().NotNull();
            RuleFor(x => x.TimeZone).NotEmpty().NotNull();
            RuleFor(x => x.WorkHours).NotEmpty().NotNull();
            RuleFor(x => x.CoreHours).NotEmpty().NotNull();
            RuleFor(x => x.Country).Must(ExistInCountryList).WithMessage("'{PropertyName}' not in valid list of countries");
        }

        private static bool ExistInCountryList(Country prop) {
            return Country.Exists(prop.Id);
        }
        
    }
}