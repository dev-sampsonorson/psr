using FluentValidation;
using PSR.Application.Models.Request;
using PSR.Application.Repository;

namespace PSR.Application.Validators
{
    public class AddEmployeeSkillRatingReqValidator : AbstractValidator<AddEmployeeSkillRatingReq>
    {
        private readonly IEmployeeRepository _employeeRepository;

        public AddEmployeeSkillRatingReqValidator(IEmployeeRepository employeeRepository){
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
            /* RuleFor(x => x.SkillId)
                .MustAsync(UniqueToEmployee)
                .WithMessage("Skill already exists for this employee"); */

            RuleFor(x => x.Rating).InclusiveBetween(0, 5).WithMessage("Rating must be between 0 and 5");
        }

        public async Task<bool> UniqueToEmployee(AddEmployeeSkillRatingReq request, Guid skillId, CancellationToken token) {
            return !(await _employeeRepository.CheckSkillExists(request.EmployeeId, skillId));
        }
        
    }
}