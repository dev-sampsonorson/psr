using FluentValidation;
using PSR.Auth.Models.Request;

namespace PSR.Auth.Validators
{
    public class RefreshTokenReqValidator : AbstractValidator<RefreshTokenReq>
    {
        public RefreshTokenReqValidator() {
            RuleFor(x => x.Token).NotEmpty().NotNull();
        }
    }
}