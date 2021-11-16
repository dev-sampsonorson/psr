namespace PSR.Application.Models.Response
{
    public class SkillSubCategoryRes
    {
        public Guid Id { get; set; } = Guid.Empty;
        public string Name { get; set; } = "";
        public Guid CategoryId { get; set; } = Guid.Empty;
        public string CategoryName { get; set; } = "";
    }
}