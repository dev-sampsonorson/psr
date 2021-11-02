namespace PSR.Application.Common.Models.Response
{
    public class ErrorRes
    {
        public List<ErrorItem> Errors { get; set; } = new List<ErrorItem>();
    }
}