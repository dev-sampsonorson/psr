using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using PSR.Application.Common.Models.Response;

namespace PSR.Api.Helpers
{
    public class PaginationLinkBuilder<TItem> where TItem : class
    {
        private readonly IUrlHelper _urlHelper;
        private readonly string _routeName;
        private readonly int _pageSize;
        private readonly int _page;
        private readonly long _totalRecords;
        private readonly int _pages;
        private readonly object? _routeValues;
        private readonly IEnumerable<TItem> _result;
        
        public PagingLinksRes Links { get; private set; }
    
        public PaginationLinkBuilder(IUrlHelper urlHelper, string routeName, int page, int pageSize, long totalRecords, IEnumerable<TItem> result, object? routeValues = null)
        {
            _urlHelper = urlHelper;
            _routeName = routeName;
            _page = page;
            _pageSize = pageSize;
            _routeValues = routeValues;
            _totalRecords = totalRecords;
            _result = result;

            // Determine total number of pages
            _pages = totalRecords > 0
                ? (int)Math.Ceiling(totalRecords / (double)pageSize)
                : 0;

            Links = new PagingLinksRes() {
                Self = GenerateSelfLink(),
                First = GenerateFirstLink(),
                Last = GenerateLastLink(),
                Prev = GeneratePreviousLink(),
                Next = GenerateNextLink()
            };

            
        }

        public PaginatedItemsRes<TItem> BuildResponse() {
            return new PaginatedItemsRes<TItem>(_page, _pageSize, _totalRecords, _result, Links);
        }

        private Uri? GenerateSelfLink() {
            var uriString = _urlHelper.Link(_routeName, new RouteValueDictionary(_routeValues) {
                {"page", _page},
                {"pageSize", _pageSize}
            });

            return uriString == null ? null : new Uri(uriString);
        }

        private Uri? GenerateFirstLink() {
            var uriString = _urlHelper.Link(_routeName, new RouteValueDictionary(_routeValues) {
                {"page", 1},
                {"pageSize", _pageSize}
            });

            return uriString == null ? null : new Uri(uriString);
        }

        private Uri? GenerateLastLink() {
            var uriString = _urlHelper.Link(_routeName, new RouteValueDictionary(_routeValues) {
                {"page", _pages},
                {"pageSize", _pageSize}
            });

            return uriString == null ? null : new Uri(uriString);
        }
       
        private Uri? GeneratePreviousLink() {
            if (_page <= 1)
                return null;

            var uriString = _urlHelper.Link(_routeName, new RouteValueDictionary(_routeValues) {
                {"page", _page - 1},
                {"pageSize", _pageSize}
            });

            return uriString == null ? null : new Uri(uriString);
        }
        
        private Uri? GenerateNextLink() {
            if (_page >= _pages)
                return null;

            var uriString = _urlHelper.Link(_routeName, new RouteValueDictionary(_routeValues) {
                {"page", _page + 1},
                {"pageSize", _pageSize}
            });

            return uriString == null ? null : new Uri(uriString);
        }
    }
}