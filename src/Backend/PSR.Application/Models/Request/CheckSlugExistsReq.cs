namespace PSR.Application.Models.Request
{
    public class CheckSlugExistsReq
    {
        public Guid SkillId { get; set; } = Guid.Empty;
        public string Slug { get; set; } = "";
    }
}