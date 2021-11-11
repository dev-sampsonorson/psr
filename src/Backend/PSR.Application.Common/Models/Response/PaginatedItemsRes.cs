namespace PSR.Application.Common.Models.Response
{
    public class PaginatedItemsRes<TItem> where TItem : class
    {
        public int Page { get; private set; }
        public int PageSize { get; private set; }
        public long TotalRecords { get; private set; }
        public int Pages { get; private set; }
        public IEnumerable<TItem> Result { get; private set; } = new List<TItem>();

        public PagingLinksRes Paging { get; private set; }

        public PaginatedItemsRes(int page, int pageSize, long totalRecords, IEnumerable<TItem> result, PagingLinksRes paging)
        {
            var _pages = totalRecords > 0 ? (int)Math.Ceiling(totalRecords / (double)pageSize) : 0;

            Page = page;
            PageSize = pageSize;
            TotalRecords = totalRecords;
            Pages = _pages;
            Result = result;
            Paging = paging;
        }
    }
}