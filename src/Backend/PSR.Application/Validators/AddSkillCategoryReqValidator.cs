using FluentValidation;
using PSR.Application.Models.Request;

namespace PSR.Application.Validators
{
    public class AddSkillCategoryReqValidator : AbstractValidator<AddSkillCategoryReq>
    {
        public AddSkillCategoryReqValidator() {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Category name is required");
        }
        
    }
}