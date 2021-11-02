namespace PSR.SharedKernel.Extensions
{
    public class HttpResponseException : Exception {
        public int Status { get; set; } = 500;
    
        public object? Value { get; set; } = null;
    }
}