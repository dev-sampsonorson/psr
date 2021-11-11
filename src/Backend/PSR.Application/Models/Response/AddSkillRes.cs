namespace PSR.Application.Models.Response
{
    public class AddSkillRes
    {
        public Guid Id { get; set; } = Guid.Empty;
        public string Name { get; set; } = "";
        public string Slug { get; set; } = "";
        public string CategoryName { get; set; } = "";
        public string SubCategoryName { get; set; } = "";
    }
}