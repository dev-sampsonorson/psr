namespace PSR.SharedKernel
{
    public class AuditableEntity : BaseEntity
    {
        
        public DateTime Created { get; set; }
        public string CreatedUserId { get; set; } = "";
        public DateTime Updated { get; set; }
        public string UpdatedUserId { get; set; } = "";
        public bool Deleted { get; set; }
    }
}