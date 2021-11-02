using AutoMapper;

namespace PSR.Application.Common.Mappings
{
    public static class MapperExtensions
    {
        public static TDesination MergeInto<TDesination, TSource1, TSource2>(this IMapper mapper, TSource1 source1, TSource2 source2) {
            return mapper.Map<TSource2, TDesination>(source2, mapper.Map<TDesination>(source1));
        }

        public static TDesination MergeInto<TDesination>(this IMapper mapper, params object[] sources) {
            var firstDestination = mapper.Map<TDesination>(sources.First());
            return sources.Skip(1).Aggregate(firstDestination, (dest, source) => mapper.Map(source, dest));
        }
    }
}