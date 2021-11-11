using FluentValidation;
using PSR.Application.Models.Request;

namespace PSR.Application.Validators
{
    public class AddSkillSubCategoryReqValidator : AbstractValidator<AddSkillSubCategoryReq>
    {
        public AddSkillSubCategoryReqValidator() {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Sub category name is required");
            RuleFor(x => x.CategoryId).NotEmpty().Must(categoryId => categoryId != Guid.Empty)
                .Configure(rule => rule.MessageBuilder = _ => "Category is required");
            // RuleFor(x => x.CategoryId).Must(categoryId => categoryId != Guid.Empty).WithMessage("Category is required");
        }
    }
}