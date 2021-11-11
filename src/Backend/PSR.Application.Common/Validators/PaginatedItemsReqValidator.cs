using FluentValidation;
using PSR.Application.Common.Models.Request;

namespace PSR.Application.Common.Validators
{
    public class PaginatedItemsReqValidator : AbstractValidator<PaginatedItemsReq>
    {

        public PaginatedItemsReqValidator() {
            RuleFor(x => x.Page).GreaterThan(0).WithMessage("Page must be greater than 0");
            RuleFor(x => x.PageSize).GreaterThan(0).WithMessage("Page must be greater than 0");
        }
        
    }
}