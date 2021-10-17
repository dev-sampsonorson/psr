namespace PSR.SharedKernel
{
    public class AuditableEntity : BaseEntity
    {
        
        public DateTime InsertDate { get; set; }
        public string InsertUserId { get; set; } = "";
        public DateTime UpdateDate { get; set; }
        public string UpdateUserId { get; set; } = "";
        public bool Deleted { get; set; }
    }
}