namespace PSR.Application.Models.Request
{
    public class AddSkillReq
    {
        public string Name { get; set; } = "";
        public string Slug { get; set; } = "";
        public Guid CategoryId { get; set; } = Guid.Empty;
        public Guid SubCategoryId { get; set; } = Guid.Empty;
    }
}