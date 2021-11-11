using FluentValidation;
using PSR.Application.Common;
using PSR.Application.Models.Request;

namespace PSR.Application.Validators
{
    public class AddSkillReqValidator : AbstractValidator<AddSkillReq>
    {

        public AddSkillReqValidator() {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Skill name is required");
            RuleFor(x => x.Slug).NotEmpty().WithMessage("Skill slug is required");
            RuleFor(x => x.Slug).Matches(RegexPattern.Slug).WithMessage("Skill slug is invalid");
            RuleFor(x => x.CategoryId).NotEmpty().WithMessage("Skill category is required");
            RuleFor(x => x.SubCategoryId).NotEmpty().WithMessage("Skill sub category is required");
        }
        
    }
}