using FluentValidation;
using PSR.Application.Models.Request;
using PSR.Application.Repository;

namespace PSR.Application.Validators
{
    public class UpsertSkillRatingReqValidator : AbstractValidator<UpsertSkillRatingReq>
    {
        private readonly IEmployeeRepository _employeeRepository;

        public UpsertSkillRatingReqValidator(IEmployeeRepository employeeRepository){
            ArgumentNullException.ThrowIfNull(employeeRepository, nameof(employeeRepository));

            _employeeRepository = employeeRepository;

            RuleFor(x => x.EmployeeId)
                .NotEmpty()
                .Must(employeeId => employeeId != Guid.Empty)
                .Configure(rule => rule.MessageBuilder = _ => "Employee is requird");

            RuleFor(x => x.SkillId)
                .NotEmpty()
                .Must(skillId => skillId != Guid.Empty)
                .Configure(rule => rule.MessageBuilder = _ => "Skill is required");

            RuleFor(x => x.Rating).InclusiveBetween(0, 5).WithMessage("Rating must be between 0 and 5");
        }
        
    }
}