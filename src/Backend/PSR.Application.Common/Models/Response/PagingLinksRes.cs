namespace PSR.Application.Common.Models.Response
{
    public class PagingLinksRes
    {        
        public Uri? Self { get; set; }
        public Uri? First { get; set; }
        public Uri? Last { get; set; }
        public Uri? Next { get; set; }
        public Uri? Prev { get; set; }
    }
}