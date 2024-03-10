using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Models
{
    [ExcludeFromCodeCoverage]
    public class Favourite
    {
        [Key]
        public int FavouriteId { get; set; }

        public int UserId { get; set; }

        public int HotelId { get; set; }

        // Navigation properties
        [JsonIgnore]
        public User? User { get; set; }
        [JsonIgnore]
        public Hotel? Hotel { get; set; } 
    }
}
