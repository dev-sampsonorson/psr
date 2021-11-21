namespace PSR.Application.Common.Models.Response
{
    public class CheckExistsRes
    {
        private CheckExistsRes(bool exists) {
            Result = exists ? "invalid" : "valid";
            Exists = exists;
        }
        public string Result { get; private set; }
        public bool Exists { get; private set; }

        public static CheckExistsRes Invalid() {
            return new CheckExistsRes(true);
        }
        public static CheckExistsRes Valid() {
            return new CheckExistsRes(false);
        }
    }
}