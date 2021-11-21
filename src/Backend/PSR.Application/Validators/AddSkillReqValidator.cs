using FluentValidation;
using PSR.Application.Common;
using PSR.Application.Interfaces;
using PSR.Application.Models.Request;

namespace PSR.Application.Validators
{
    public class AddSkillReqValidator : AbstractValidator<AddSkillReq>
    {
        private readonly ISkillService _skillService;

        public AddSkillReqValidator(ISkillService skillService) {
            ArgumentNullException.ThrowIfNull(nameof(skillService));

            _skillService = skillService;

            RuleFor(x => x.Name).NotEmpty().WithMessage("Skill name is required");
            // RuleFor(x => x.Slug).NotEmpty().WithMessage("Skill slug is required");
            // RuleFor(x => x.Slug).Matches(RegexPattern.Slug).WithMessage("Skill slug is invalid");
            // RuleFor(x => x.Slug).MustAsync(SlugIsNotExisting).WithMessage("'{PropertyName}' already exists for a different resource");
            RuleFor(x => x.CategoryId).NotEmpty().WithMessage("Skill category is required");
            RuleFor(x => x.SubCategoryId).NotEmpty().WithMessage("Skill sub category is required");
            RuleFor(x => x).MustAsync(SkillIsNotExisting).WithMessage("Skill with name, category, and sub category already exists");
        }

        private async Task<bool> SkillIsNotExisting(AddSkillReq request, CancellationToken arg2)
        {
            return !(await _skillService.CheckSkillExists(new CheckSkillExistsReq {
                Name = request.Name,
                CategoryId = request.CategoryId,
                SubcategoryId = request.SubCategoryId 
            })).Exists;
        }

        private async Task<bool> SlugIsNotExisting(string slug, CancellationToken token)
        {
            return !(await _skillService.CheckSlugExists(new CheckSlugExistsReq { Slug = slug })).Exists;
        }
        
    }
}