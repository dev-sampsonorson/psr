using FluentValidation;
using PSR.Application.Models.Request;

namespace PSR.Application.Validators
{
    public class CheckSlugExistsReqValidator : AbstractValidator<CheckSlugExistsReq>
    {

        public CheckSlugExistsReqValidator() {
            RuleFor(x => x.Slug).NotEmpty().WithMessage("Slug is required");
        }
        
    }
}