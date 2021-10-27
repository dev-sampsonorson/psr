namespace PSR.Application.Common
{
    public class LookupItem
    {
        public LookupItem(int id, string value) {
            Id = id;
            Value = value;
        }

        public int Id { get; }
        public string Value { get; }
    }
}