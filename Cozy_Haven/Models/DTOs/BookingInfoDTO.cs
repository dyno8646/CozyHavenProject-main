using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Models.DTOs
{
    [ExcludeFromCodeCoverage]
    public class BookingInfoDTO
    {
        public int BookingId { get; set; }
        public int UserId { get; set; }
        public int RoomId { get; set; }
        public string HotelName { get; set; }
        public string RoomType { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public int Adults { get; set; }
        public int Children { get; set; }
        public decimal TotalPrice { get; set; }
        public string Status { get; set; }
        public DateTime BookedDate { get; set; }
    }

}