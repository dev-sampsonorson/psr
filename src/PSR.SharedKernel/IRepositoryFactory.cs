namespace PSR.SharedKernel
{
    public interface IRepositoryFactory
    {
         T Get<T>() where T : notnull, IRepository;
    }
}