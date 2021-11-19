namespace PSR.Application.Models.Request
{
    public class UpdateSkillReq
    {
        public Guid Id { get; set; } = Guid.Empty;
        public string Name { get; set; } = "";
        public string Slug { get; set; } = "";
        public Guid CategoryId { get; set; } = Guid.Empty;
        public Guid SubCategoryId { get; set; } = Guid.Empty;
    }
}