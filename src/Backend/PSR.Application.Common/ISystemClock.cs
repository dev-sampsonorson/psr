namespace PSR.Application.Common
{
    public interface ISystemClock
    {
        /// <summary>
        /// Gets a DateTime object that is set to the current date and time on this computer,
        /// expressed as the Coordinated Universal Time(UTC)
        /// </summary>
        DateTime UtcNow { get; }
    }
}