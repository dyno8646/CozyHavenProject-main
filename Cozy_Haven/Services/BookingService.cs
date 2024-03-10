using Cozy_Haven.Exceptions;
using Cozy_Haven.Interfaces;
using Cozy_Haven.Mappers;
using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Cozy_Haven.Repository;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Services
{
    public class BookingService : IBookingService
    {
        private readonly IRepository<int, Booking> _bookingrepository;
        private readonly IRepository<int, Room> _roomrepository;
        private readonly IRepository<string, User> _userrepository;
        private readonly IPaymentService _paymentservice;
        private readonly ILogger<BookingService> _logger;

        public BookingService(IRepository<int,Booking> repository,
            IRepository<int,Room> roomrepository,
            IRepository<string,User> userrepository,
            IPaymentService paymentService,
            ILogger<BookingService> logger)
        {
            _bookingrepository=repository;
            _roomrepository=roomrepository;
            _userrepository=userrepository;
            _paymentservice=paymentService;
            _logger = logger;

        }
        
        public async Task<Booking> DeleteBooking(int id)
        {
            _logger.LogInformation("Deleting booking...");
            var booking = await GetBooking(id);
            if (booking != null)
            {
                await _bookingrepository.Delete(id);
                return booking;
            }
            throw new NoBookingFoundException();
        }

        public async Task<List<Booking>> GetAllBookings()
        {
            _logger.LogInformation("Getting all bookings...");
            var bookings = await _bookingrepository.GetAll();
            if(bookings != null) { return bookings; }
            throw new NoBookingFoundException();
           
        }

        public async Task<Booking> GetBooking(int id)
        {
            _logger.LogInformation("Getting booking by {id}",id);
            var booking=await _bookingrepository.GetById(id);
            if(booking != null) { return booking; }
            throw new NoBookingFoundException();
        }

        public async Task<List<Booking>> GetBookingsByRoomId(int roomId)
        {
            _logger.LogInformation("Getting bookings by {roomId}",roomId);
            var bookings = await GetAllBookings();
            if (bookings == null)
            {
                throw new InvalidOperationException("No bookings found.");
            }

            return bookings.Where(b => b.RoomId == roomId).ToList();
        }


        //public async Task<List<Booking>> GetBookingsByUserId(int userid)
        //{
        //    var bookings=await GetAllBookings();
        //    if(bookings==null) throw new NoBookingFoundException();
        //    List<Booking> bookings1 = new List<Booking>();
        //    foreach (var item in bookings)
        //    {
        //        if(item.UserId == userid) bookings1.Add(item);
        //    }
        //    return bookings1;

        //}
        [ExcludeFromCodeCoverage]
        public async Task<Booking> RescheduleBooking(int bookingId, DateTime newCheckInDate, DateTime newCheckOutDate)
        {
            var booking = await GetBooking(bookingId);

            // Check if the room is available for the new dates
            bool isRoomAvailable = await IsRoomAvailable(booking.RoomId, newCheckInDate, newCheckOutDate);
            if (!isRoomAvailable)
            {
                throw new Exception("Room is not available for the specified dates");
            }

            // Update booking details
            booking.CheckInDate = newCheckInDate;
            booking.CheckOutDate = newCheckOutDate;

            // Recalculate total price based on new dates
            var room = await _roomrepository.GetById(booking.RoomId);
            if (room == null)
            {
                throw new NoRoomFoundException();
            }


            // Update the booking in the repository
            await _bookingrepository.Update(booking);

            return booking;
        }

        public async Task<int> GetBookingsCount()
        {
            var bookings = await GetAllBookings();
            return bookings.Count;
        }
        [ExcludeFromCodeCoverage]
        public async Task<Booking> CancelBooking(int bookingId)
        {
            var booking = await GetBooking(bookingId);

            if (booking.Status == "Cancelled")
            {
                throw new InvalidOperationException("Booking is already cancelled.");
            }

            booking.Status = "Cancelled";

            // Update room availability
            var room = await _roomrepository.GetById(booking.RoomId);
            if (room == null)
            {
                throw new NoRoomFoundException();
            }
            room.Available = true; // Mark room as available since booking is cancelled
            await _roomrepository.Update(room);

            // Update the booking in the repository
            await _bookingrepository.Update(booking);

            return booking;
        }

        public async Task<Booking> UpdateBookingStatus(int id,String status)
        {
            _logger.LogInformation("Updating Booking Status");
            var newbooking=await GetBooking(id);
            if(newbooking != null)
            {
                newbooking.Status = status;
                if (status == "CheckedOut" || status=="Cancelled")
                {
                    newbooking.Room.Available = true;
                }
                else if (status == "Booked")
                {

                    newbooking.Room.Available = false;
                }
                await _bookingrepository.Update(newbooking);
                return newbooking;
            }
            throw new NoBookingFoundException();
        }
        public async Task<List<Booking>> GetHotelBookings(int hotelId)
        {
            _logger.LogInformation("Getting Hotel Bookings");
            var allRooms = await _roomrepository.GetAll();
            var hotelRooms = allRooms.Where(r => r.HotelId == hotelId).Select(r => r.RoomId).ToList();

            var allBookings = await GetAllBookings();
            var hotelBookings = allBookings.Where(b => hotelRooms.Contains(b.RoomId)).ToList();

            return hotelBookings;
        }
        public async Task<bool> IsRoomAvailable(int roomId, DateTime checkInDate, DateTime checkOutDate)
        {
            _logger.LogInformation("Checking Room Availability");
            var bookings = await GetBookingsByRoomId(roomId);
            foreach (var booking in bookings)
            {
                if ((checkInDate >= booking.CheckInDate && checkInDate < booking.CheckOutDate) ||
                    (checkOutDate > booking.CheckInDate && checkOutDate <= booking.CheckOutDate) ||
                    (checkInDate <= booking.CheckInDate && checkOutDate >= booking.CheckOutDate))
                {
                    return false; 
                }
            }

            return true; 
        }

        public async Task<Booking> AddBooking(BookingDTO booking1, string username)
        {
            _logger.LogInformation("Adding booking...");
            Booking booking = new AddBooking(booking1).GetBooking();
            bool isRoomAvailable = await IsRoomAvailable(booking.RoomId, booking.CheckInDate, booking.CheckOutDate);
            if (!isRoomAvailable)
            {
                throw new Exception("Room is not available for the specified dates");
            }

            var user = await _userrepository.GetById(username);
            if (user == null)
            {
                throw new Exception("User does not exist");
            }

            if (booking.CheckOutDate <= booking.CheckInDate)
            {
                throw new Exception("Check-out date must be after check-in date");
            }
            
            if (booking.CheckInDate.Date < DateTime.UtcNow.Date)
            {
                throw new Exception("Check-in date cannot be earlier than today");
            }

            var room = await _roomrepository.GetById(booking.RoomId);
            if (room == null)
            {
                throw new Exception("Room does not exist");
            }
            //var bookingDetails = new BookingInfoDTO
            //{
            //    RoomId = booking.RoomId,
            //    Adults = booking1.Adults,
            //    Children = booking1.Children
            //};
            TimeSpan span = booking.CheckOutDate - booking.CheckInDate;
            float totalPrice = CalculateTotalPrice(new BookingInfoDTO
            {
                RoomId = booking.RoomId,
                Adults = booking1.Adults,
                Children = booking1.Children,
                CheckInDate = booking.CheckInDate,
                CheckOutDate = booking.CheckOutDate
            });
            booking.TotalPrice = totalPrice;
            booking.Status = "Booked";
            booking.BookedDate = DateTime.UtcNow;
            booking.UserId = user.UserId;

            var addedbooking = await _bookingrepository.Add(booking);
            _logger.LogInformation("Booking added successfully");
            return addedbooking;
        }
        public float CalculateTotalPrice(BookingInfoDTO bookingDetails)
        {
            // Get the room details
            var room = _roomrepository.GetById(bookingDetails.RoomId).Result;
            if (room == null)
            {
                throw new NoRoomFoundException();
            }

            // Set the MaxOccupancy based on the BedType
            switch (room.BedType)
            {
                case "Single":
                    room.MaxOccupancy = 2;
                    break;
                case "Double":
                    room.MaxOccupancy = 4;
                    break;
                case "KingSize":
                    room.MaxOccupancy = 6;
                    break;
                default:
                    break;
            }

            // Calculate total price based on room type and number of guests
            float totalPrice = room.BaseFare;

            int totalGuests = bookingDetails.Adults + bookingDetails.Children;
            int extraGuests = totalGuests - room.MaxOccupancy;

            if (extraGuests > 0)
            {
                int extraAdults = Math.Max(extraGuests - bookingDetails.Children, 0);
                //int extraChildren = Math.Min(extraGuests, bookingDetails.Children);
                int extraChildren = extraGuests - extraAdults;

                if (room.BedType == "Single" || room.BedType == "Double" || room.BedType == "KingSize")
                {
                    totalPrice += extraAdults * 0.4f * room.BaseFare;
                    totalPrice += extraChildren * 0.2f * room.BaseFare;
                }
            }
            // Calculate the duration of the stay and adjust the total price
            TimeSpan span = bookingDetails.CheckOutDate - bookingDetails.CheckInDate;
            totalPrice *= (float)span.TotalDays;

            return totalPrice;
        }
        public async Task<int> GetTotalBookings()
        {
            var bookings = await _bookingrepository.GetAll();
            return bookings.Count();
        }
        public async Task<float> GetTotalRevenue()
        {
            var bookings = await _bookingrepository.GetAll();
            if (bookings == null) throw new NoBookingFoundException();

            float totalRevenue = bookings
        .Where(b => b.Status != "Cancelled" && b.Status != "Refunded")
        .Sum(b => b.TotalPrice);
            return totalRevenue;
        }
        public async Task<IEnumerable<object>> GetLineChartData()
        {
            var bookings = await _bookingrepository.GetAll(); // Assuming this method returns all bookings
            var data = bookings
                .GroupBy(b => b.CheckInDate.Year)
                .Select(g => new { y = g.Key.ToString(), a = g.Count() })
                .ToList();

            return data;
        }
        
        //public async Task<bool> CancelBooking(int bookingId)
        //{
        //    var booking =await GetBooking(bookingId);

        //    // Check if the booking can be cancelled (e.g., within 24 hours of check-in)
        //    if (!IsBookingCancellable(booking))
        //    {
        //        return false; // Booking cannot be cancelled
        //    }

        //    // Calculate refund amount based on your refund policy
        //    float refundAmount = CalculateRefundAmount(booking);

        //    // Update booking status to "Cancelled" and save changes
        //    booking.Status= "Cancelled";
        //    await _bookingrepository.Update(booking);

        //    // Initiate refund process
        //    bool refundSuccess = await _paymentservice.Refund(booking.UserId, refundAmount);

        //    return refundSuccess; // Return whether refund was successful
        //}
        
        //private bool IsBookingCancellable(Booking booking)
        //{
        //    // Implement your logic to determine if a booking can be cancelled
        //    // For example, allow cancellations up to 24 hours before check-in
        //    return booking.CheckInDate.Subtract(DateTime.Now).TotalHours > 24;
        //}

        //private float CalculateRefundAmount(Booking booking)
        //{
        //    // Implement your refund calculation logic based on your refund policy
        //    // For example, refund 50% if cancelled within 24 hours of booking, etc.
        //    return booking.TotalPrice * 0.5f; // Assuming a 50% refund policy
        //}
        public async Task<List<Booking>> GetCancelledHotelBookings(int hotelId)
        {
            _logger.LogInformation("Getting Cancelled Hotel Bookings");
            var allRooms = await _roomrepository.GetAll();
            var hotelRooms = allRooms.Where(r => r.HotelId == hotelId).Select(r => r.RoomId).ToList();

            var allBookings = await GetAllBookings();
            var hotelBookings = allBookings.Where(b => hotelRooms.Contains(b.RoomId) && b.Status == "Cancelled").ToList();

            return hotelBookings;
        }
        
        //public async Task<Booking> UpdateBooking(int id, Booking updatedBooking)
        //{
        //    var existingBooking =await GetBooking(id) ;
        //    if (existingBooking != null)
        //    {
        //        existingBooking.UserId = updatedBooking.UserId;
        //        existingBooking.RoomId = updatedBooking.RoomId;
        //        existingBooking.CheckInDate = updatedBooking.CheckInDate;
        //        existingBooking.CheckOutDate = updatedBooking.CheckOutDate;
        //        existingBooking.Adults = updatedBooking.Adults;
        //        existingBooking.Children = updatedBooking.Children;
        //        existingBooking.TotalPrice = updatedBooking.TotalPrice;
        //        existingBooking.Status = updatedBooking.Status;
        //        existingBooking.BookedDate = updatedBooking.BookedDate;
        //        return existingBooking;

        //    }
        //    throw new NoBookingFoundException();
        //}
        //public async Task<Booking> RescheduleBooking(int bookingId, DateTime newCheckInDate, DateTime newCheckOutDate)
        //{
        //    var booking = await GetBooking(bookingId);

        //    // Check if the room is available for the new dates
        //    bool isRoomAvailable = await IsRoomAvailable(booking.RoomId, newCheckInDate, newCheckOutDate);
        //    if (!isRoomAvailable)
        //    {
        //        throw new Exception("Room is not available for the specified dates");
        //    }

        //    // Update booking details
        //    booking.CheckInDate = newCheckInDate;
        //    booking.CheckOutDate = newCheckOutDate;

        //    // Recalculate total price based on new dates
        //    var room = await _roomrepository.GetById(booking.RoomId);
        //    if (room == null)
        //    {
        //        throw new Exception("Room does not exist");
        //    }
        //    //TimeSpan span = newCheckOutDate - newCheckInDate;
        //    //float totalPrice = (float)span.TotalDays * room.BaseFare;
        //    //booking.TotalPrice = totalPrice;
        //    booking.TotalPrice = CalculateTotalPrice(booking);

        //    // Update the booking in the repository
        //    await _bookingrepository.Update(booking);

        //    return booking;
        //}
        public async Task<int> GetHotelBookingsCount(int hotelId)
        {
            var allRooms = await _roomrepository.GetAll();
            var hotelRooms = allRooms.Where(r => r.HotelId == hotelId).Select(r => r.RoomId).ToList();

            var allBookings = await GetAllBookings();
            var hotelBookingsCount = allBookings.Count(b => hotelRooms.Contains(b.RoomId));

            return hotelBookingsCount;
        }
        public async Task<float> GetHotelCollections(int hotelId)
        {
            var allRooms = await _roomrepository.GetAll();
            var hotelRooms = allRooms.Where(r => r.HotelId == hotelId).Select(r => r.RoomId).ToList();

            var allBookings = await GetAllBookings();
            var hotelBookings = allBookings.Where(b => hotelRooms.Contains(b.RoomId) && b.Status !="Canceled" && b.Status!="Refunded").ToList();

            var totalCollections = hotelBookings.Sum(b => b.TotalPrice);

            return totalCollections;
        }





    }
}
