namespace PSR.Application.Common.Models.Response
{
    public class CheckExistsRes
    {
        private CheckExistsRes(string result) {
            Result = result;
        }
        public string Result { get; private set; }

        public static CheckExistsRes Invalid() {
            return new CheckExistsRes("invalid");
        }
        public static CheckExistsRes Valid() {
            return new CheckExistsRes("valid");
        }
    }
}