using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace Cozy_Haven.Models
{
    [ExcludeFromCodeCoverage]
    public class Destination
    {
        [Key]
        public int DestinationId { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        //public string City { get; set; }

        // Navigation property
        [JsonIgnore]
        public ICollection<Hotel>? Hotels { get; set; } 
    }
}
