using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Models.DTOs
{
    [ExcludeFromCodeCoverage]
    public class ReviewDTO
    {
        public int HotelId { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        public string HotelName { get; set; }
        public float Rating { get; set; }
        public string Comment { get; set; }
        public DateTime DatePosted { get; set; }
        public string UserAddress { get; set; }
        public byte[] UserProfilePicture { get; set; }
    }
}