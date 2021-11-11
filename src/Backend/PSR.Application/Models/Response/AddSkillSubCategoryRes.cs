namespace PSR.Application.Models.Response
{
    public class AddSkillSubCategoryRes
    {
        public Guid Id { get; set; } = Guid.Empty;
        public string Name { get; set; } = "";
        public string CategoryName { get; set; } = "";
    }
}