namespace PSR.Application.Common.Models.Request
{
    public class PaginatedItemsReq
    {
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 3;
    }
}