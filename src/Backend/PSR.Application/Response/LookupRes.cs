namespace PSR.Application.Response
{
    public class LookupRes
    {
        public int Id { get; private set; }
        public string Value { get; private set; }

        public LookupRes(int id, string value) {
            Id = id;
            Value = value;
        }
    }
}