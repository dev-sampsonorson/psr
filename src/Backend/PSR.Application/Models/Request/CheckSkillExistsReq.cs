namespace PSR.Application.Models.Request
{
    public class CheckSkillExistsReq
    {
        public string Name { get; set; } = "";
        public Guid CategoryId { get; set; } = Guid.Empty;
        public Guid SubcategoryId { get; set; } = Guid.Empty;
    }
}