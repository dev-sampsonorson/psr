using System;
using PSR.SharedKernel;

namespace PSR.Auth.Domain
{
    public class RefreshToken : AuditableEntity
    {
        public string UserId { get; set; } = "";

        // TODO: May change to 'RefreshToken'
        public string Token { get; set; } = "";

        // the Id of the JWT this refresh token belongs to
        public string JwtId { get; set; } = "";
        public bool IsUsed { get; set; }
        public bool IsRevorked { get; set; }
        public DateTime? RevokedDate { get; set; }
        public string? ReasonRevoked { get; set; } = null;

        // time to live in days. inactive tokens are 
        // automatically deleted from db after this time
        public int RefreshTokenTTL { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public ApplicationUser User { get; set; } = default!;
    }
}