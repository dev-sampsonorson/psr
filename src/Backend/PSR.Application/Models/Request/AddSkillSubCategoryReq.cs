namespace PSR.Application.Models.Request
{
    public class AddSkillSubCategoryReq
    {
        public string Name { get; set; } = "";
        public Guid CategoryId { get; set; } = Guid.Empty;
    }
}