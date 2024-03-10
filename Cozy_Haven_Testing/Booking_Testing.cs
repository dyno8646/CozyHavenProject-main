using Cozy_Haven.Exceptions;
using Cozy_Haven.Interfaces;
using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using Cozy_Haven.Services;
using Microsoft.Extensions.Logging;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cozy_Haven_Testing
{
    public class Booking_Testing
    {
        private IBookingService _bookingService;
        private Mock<IRepository<int, Booking>> _mockBookingRepo;
        private Mock<IRepository<int, Room>> _mockRoomRepo;
        private Mock<IRepository<string, User>> _mockUserRepo;
        private Mock<IPaymentService> _mockPaymentRepo;
        private Mock<ILogger<BookingService>> _logger;


        [SetUp]
        public void Setup()
        {
            _mockBookingRepo = new Mock<IRepository<int, Booking>>();
            _mockRoomRepo = new Mock<IRepository<int, Room>>();
            _mockUserRepo = new Mock<IRepository<string, User>>();
            _mockPaymentRepo = new Mock<IPaymentService>();
            _logger = new Mock<ILogger<BookingService>>();
            _bookingService = new BookingService(_mockBookingRepo.Object, _mockRoomRepo.Object, _mockUserRepo.Object, _mockPaymentRepo.Object, _logger.Object);
        }

        
        [Test]
        public async Task AddBookingSuccessTest()
        {
            // Arrange
            var bookingDto = new BookingDTO { UserId = 1, RoomId = 1, CheckInDate = DateTime.UtcNow, CheckOutDate = DateTime.UtcNow.AddDays(1) };
            var booking = new Booking { BookingId = 1, UserId = 1, RoomId = 1, CheckInDate = DateTime.UtcNow, CheckOutDate = DateTime.UtcNow.AddDays(1) };

            _mockBookingRepo.Setup(x => x.Add(It.IsAny<Booking>())).ReturnsAsync(booking);
            _mockUserRepo.Setup(x => x.GetById("test")).ReturnsAsync(new User { UserId = 1 }); // Mocking user repository
            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(new List<Booking>());
            _mockRoomRepo.Setup(x => x.GetById(1)).ReturnsAsync(new Room { RoomId = 1 });


            var bookingService = new BookingService(_mockBookingRepo.Object, _mockRoomRepo.Object, _mockUserRepo.Object, _mockPaymentRepo.Object, _logger.Object);

            // Act
            var result = await bookingService.AddBooking(bookingDto, "test");

            // Assert
            Assert.IsNotNull(result);
        }



        [Test]
        public async Task DeleteBookingSuccessTest()
        {
            // Arrange
            var bookingId = 1;
            var booking = new Booking { BookingId = bookingId, UserId = 1, RoomId = 1 };
            _mockBookingRepo.Setup(x => x.GetById(bookingId)).ReturnsAsync(booking);
            _mockBookingRepo.Setup(x => x.Delete(bookingId)).ReturnsAsync(booking);

            // Act
            var result = await _bookingService.DeleteBooking(bookingId);

            // Assert
            Assert.IsNotNull(result);
        }

        [Test]
        public async Task GetAllBookingsSuccessTest()
        {
            // Arrange
            var bookings = new List<Booking> { new Booking { BookingId = 1 }, new Booking { BookingId = 2 } };
            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(bookings);

            // Act
            var result = await _bookingService.GetAllBookings();

            // Assert
            Assert.That(result.Count, Is.EqualTo(2));
        }

        [Test]
        public async Task GetBookingSuccessTest()
        {
            // Arrange
            var bookingId = 1;
            var booking = new Booking { BookingId = bookingId };
            _mockBookingRepo.Setup(x => x.GetById(bookingId)).ReturnsAsync(booking);

            // Act
            var result = await _bookingService.GetBooking(bookingId);

            // Assert
            Assert.IsNotNull(result);
            
        }

        [Test]
        public void GetBookingNotFoundExceptionTest()
        {
            // Arrange
            var bookingId = 1;
            _mockBookingRepo.Setup(x => x.GetById(bookingId)).ReturnsAsync((Booking)null);

            // Act & Assert
            Assert.ThrowsAsync<NoBookingFoundException>(async () => await _bookingService.GetBooking(bookingId));
        }

        [Test]
        public async Task GetBookingsCountSuccessTest()
        {
            // Arrange
            var bookings = new List<Booking> { new Booking(), new Booking(), new Booking() };
            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(bookings);

            // Act
            var result = await _bookingService.GetBookingsCount();

            // Assert
            Assert.That(result, Is.EqualTo(3));
        }

        [Test]
        public async Task UpdateBookingStatusSuccessTest()
        {
            // Arrange
            var bookingId = 1;
            var status = "CheckedOut";
            var booking = new Booking { BookingId = bookingId, Status = "Booked", Room = new Room { Available = false } };
            _mockBookingRepo.Setup(x => x.GetById(bookingId)).ReturnsAsync(booking);
            _mockBookingRepo.Setup(x => x.Update(It.IsAny<Booking>())).ReturnsAsync((Booking b) => b);

            // Act
            var result = await _bookingService.UpdateBookingStatus(bookingId, status);

            // Assert
            
            Assert.That(result.Status, Is.EqualTo(status));
            
        }

        [Test]
        public async Task GetHotelBookingsSuccessTest()
        {
            // Arrange
            var hotelId = 1;
            var rooms = new List<Room>
            {
                new Room { RoomId = 1, HotelId = hotelId },
                new Room { RoomId = 2, HotelId = hotelId },
                new Room { RoomId = 3, HotelId = hotelId }
            };
            var bookings = new List<Booking>
            {
                new Booking { RoomId = 1 },
                new Booking { RoomId = 2 },
                new Booking { RoomId = 3 },
                new Booking { RoomId = 4 }
            };
            _mockRoomRepo.Setup(x => x.GetAll()).ReturnsAsync(rooms);
            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(bookings);

            // Act
            var result = await _bookingService.GetHotelBookings(hotelId);

            // Assert
            Assert.That(result.Count, Is.EqualTo(3));
            
        }
        [Test]
        public async Task GetTotalBookings_ReturnsCorrectCount()
        {
            // Arrange
            var bookings = new List<Booking>
    {
        new Booking { BookingId = 1 },
        new Booking { BookingId = 2 },
        new Booking { BookingId = 3 }
    };

            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(bookings);

            // Act
            var result = await _bookingService.GetTotalBookings();

            // Assert
            Assert.That(result, Is.EqualTo(3));
        }
        [Test]
        public async Task GetCancelledHotelBookings_ReturnsCancelledBookingsForHotel()
        {
            // Arrange
            int hotelId = 1;
            var room1 = new Room { RoomId = 1, HotelId = hotelId };
            var room2 = new Room { RoomId = 2, HotelId = hotelId };
            var room3 = new Room { RoomId = 3, HotelId = 2 };  // Room not in the hotel
            var allRooms = new List<Room> { room1, room2, room3 };

            var booking1 = new Booking { BookingId = 1, RoomId = 1, Status = "Cancelled" };
            var booking2 = new Booking { BookingId = 2, RoomId = 2, Status = "Booked" };
            var booking3 = new Booking { BookingId = 3, RoomId = 2, Status = "Cancelled" };
            var allBookings = new List<Booking> { booking1, booking2, booking3 };

            _mockRoomRepo.Setup(x => x.GetAll()).ReturnsAsync(allRooms);
            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(allBookings);

            // Act
            var result = await _bookingService.GetCancelledHotelBookings(hotelId);

            // Assert
            
            Assert.That(result.Count, Is.EqualTo(2));
            
        }
        [Test]
        public async Task GetTotalRevenue_ExcludesCancelledAndRefundedBookings()
        {
            // Arrange
            var booking1 = new Booking { BookingId = 1, TotalPrice = 100, Status = "Booked" };
            var booking2 = new Booking { BookingId = 2, TotalPrice = 150, Status = "Cancelled" };
            var booking3 = new Booking { BookingId = 3, TotalPrice = 200, Status = "Refunded" };
            var booking4 = new Booking { BookingId = 4, TotalPrice = 120, Status = "Booked" };
            var allBookings = new List<Booking> { booking1, booking2, booking3, booking4 };

            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(allBookings);

            // Act
            var result = await _bookingService.GetTotalRevenue();

            // Assert
            Assert.That(result, Is.EqualTo(220)); // Total revenue should be 220 (100 + 120)
        }
        [Test]
        public async Task GetHotelBookingsCount_ReturnsCorrectCount()
        {
            // Arrange
            int hotelId = 1;
            var room1 = new Room { RoomId = 1, HotelId = 1 };
            var room2 = new Room { RoomId = 2, HotelId = 2 };
            var room3 = new Room { RoomId = 3, HotelId = 1 };
            var rooms = new List<Room> { room1, room2, room3 };

            var booking1 = new Booking { BookingId = 1, RoomId = 1 };
            var booking2 = new Booking { BookingId = 2, RoomId = 2 };
            var booking3 = new Booking { BookingId = 3, RoomId = 1 };
            var bookings = new List<Booking> { booking1, booking2, booking3 };

            _mockRoomRepo.Setup(x => x.GetAll()).ReturnsAsync(rooms);
            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(bookings);

            // Act
            var result = await _bookingService.GetHotelBookingsCount(hotelId);

            // Assert
            Assert.That(result, Is.EqualTo(2)); // There are 2 bookings for hotelId 1 (booking1 and booking3)
        }
        [Test]
        public async Task GetHotelCollections_ReturnsCorrectCollections()
        {
            // Arrange
            int hotelId = 1;
            var room1 = new Room { RoomId = 1, HotelId = 1 };
            var room2 = new Room { RoomId = 2, HotelId = 2 };
            var room3 = new Room { RoomId = 3, HotelId = 1 };
            var rooms = new List<Room> { room1, room2, room3 };

            var booking1 = new Booking { BookingId = 1, RoomId = 1, TotalPrice = 100, Status = "Booked" };
            var booking2 = new Booking { BookingId = 2, RoomId = 2, TotalPrice = 200, Status = "Cancelled" };
            var booking3 = new Booking { BookingId = 3, RoomId = 1, TotalPrice = 300, Status = "Booked" };
            var bookings = new List<Booking> { booking1, booking2, booking3 };

            _mockRoomRepo.Setup(x => x.GetAll()).ReturnsAsync(rooms);
            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(bookings);

            // Act
            var result = await _bookingService.GetHotelCollections(hotelId);

            // Assert
            Assert.That(result, Is.EqualTo(400)); // Total collections for hotelId 1 should be 400 (100 + 300)
        }
        [Test]
        public async Task GetLineChartData_ReturnsCorrectData()
        {
            // Arrange
            var bookings = new List<Booking>
    {
        new Booking { CheckInDate = new DateTime(2021, 1, 1) },
        new Booking { CheckInDate = new DateTime(2021, 2, 1) },
        new Booking { CheckInDate = new DateTime(2022, 3, 1) },
        new Booking { CheckInDate = new DateTime(2022, 4, 1) },
        new Booking { CheckInDate = new DateTime(2023, 5, 1) }
    };
            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(bookings);

            // Act
            var result = await _bookingService.GetLineChartData();

            // Assert
            Assert.That(result.Count(), Is.EqualTo(3)); // Expecting data for 3 years (2021, 2022, 2023)
            
        }
        [Test]
        public void CalculateTotalPrice_ReturnsCorrectPrice()
        {
            // Arrange
            var room = new Room { RoomId = 1, BaseFare = 100, BedType = "SingleBed" };
            _mockRoomRepo.Setup(x => x.GetById(1)).ReturnsAsync(room);

            var bookingDetails = new Booking
            {
                RoomId = 1,
                Adults = 2,
                Children = 1,
                CheckInDate = new DateTime(2024, 3, 10),
                CheckOutDate = new DateTime(2024, 3, 15)
            };

            // Act
            var totalPrice = _bookingService.CalculateTotalPrice(bookingDetails);
            Assert.That(totalPrice, Is.EqualTo(600));
        }
        [Test]
        public async Task IsRoomAvailable_RoomAvailable_ReturnsTrue()
        {
            // Arrange
            var roomId = 1;
            var checkInDate = new DateTime(2024, 3, 10);
            var checkOutDate = new DateTime(2024, 3, 15);

            var bookings = new List<Booking>
    {
        new Booking { RoomId = 1, CheckInDate = new DateTime(2024, 3, 1), CheckOutDate = new DateTime(2024, 3, 5) },
        new Booking { RoomId = 1, CheckInDate = new DateTime(2024, 3, 20), CheckOutDate = new DateTime(2024, 3, 25) }
    };

            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(bookings);

            // Act
            var result = await _bookingService.IsRoomAvailable(roomId, checkInDate, checkOutDate);

            // Assert
            Assert.IsTrue(result);
        }
        [Test]
        public async Task GetBookingsByRoomId_ValidRoomId_ReturnsFilteredBookings()
        {
            // Arrange
            var roomId = 1;
            var bookings = new List<Booking>
    {
        new Booking { BookingId = 1, RoomId = 1 },
        new Booking { BookingId = 2, RoomId = 2 },
        new Booking { BookingId = 3, RoomId = 1 }
    };

            _mockBookingRepo.Setup(x => x.GetAll()).ReturnsAsync(bookings);

            // Act
            var result = await _bookingService.GetBookingsByRoomId(roomId);

            // Assert
            Assert.IsNotNull(result);
            
        }
        









    }
}
