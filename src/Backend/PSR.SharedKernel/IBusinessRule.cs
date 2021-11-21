namespace PSR.SharedKernel
{
    public interface IBusinessRule
    {
        bool IsBroken();

        string Message { get; }
    }
}