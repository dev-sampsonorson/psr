using FluentValidation;
using PSR.Api.Model.Request;

namespace PSR.Api.Validators
{
    public class TestReqValidator : AbstractValidator<TestReq>
    {
        public TestReqValidator() {
            RuleFor(x => x.Test).Equal("test");
        }
        
    }
}