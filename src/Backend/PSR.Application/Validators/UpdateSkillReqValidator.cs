using FluentValidation;
using PSR.Application.Common;
using PSR.Application.Models.Request;

namespace PSR.Application.Validators
{
    public class UpdateSkillReqValidator : AbstractValidator<UpdateSkillReq>
    {

        public UpdateSkillReqValidator() {

            RuleFor(x => x.Id)
                .NotEmpty()
                .Must(skillId => skillId != Guid.Empty)
                .Configure(rule => rule.MessageBuilder = _ => "Skill id is required");
            RuleFor(x => x.Name).NotEmpty().WithMessage("Skill name is required");
            // RuleFor(x => x.Slug).NotEmpty().WithMessage("Skill slug is required");
            // RuleFor(x => x.Slug).Matches(RegexPattern.Slug).WithMessage("Skill slug is invalid");
            RuleFor(x => x.CategoryId).NotEmpty().WithMessage("Skill category is required");
            RuleFor(x => x.SubCategoryId).NotEmpty().WithMessage("Skill sub category is required");
        }
        
    }
}