namespace PSR.Application.Models.Response
{
    public class UpdateSkillRes
    {
        public Guid Id { get; set; } = Guid.Empty;
        public string Name { get; set; } = "";
        public string Slug { get; set; } = "";
        public Guid CategoryId { get; set; } = Guid.Empty;
        public string CategoryName { get; set; } = "";
        public Guid SubCategoryId { get; set; } = Guid.Empty;
        public string SubCategoryName { get; set; } = "";
        public int Employees { get; set; } = 21;
        public double TeamCompetency { get; set; } = 3.50d;
    }
}