using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace Cozy_Haven.Models
{
    [ExcludeFromCodeCoverage]
    public class Payment
    {
        [Key]
        public int PaymentId { get; set; }

        [ForeignKey("Booking")]
        public int BookingId { get; set; }

        [Required]
        public float Amount { get; set; }

        [Required]
        public DateTime PaymentDate { get; set; }

        [Required]
        public string PaymentMethod { get; set; }

        [Required]
        public string Status { get; set; }

        // Navigation property
        [JsonIgnore]
        public Booking? Booking { get; set; } 
    }
}

