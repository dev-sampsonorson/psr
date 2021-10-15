namespace PSR.Application
{
    public interface IRepositoryFactory
    {
         T Get<T>() where T : notnull, IRepository;
    }
}