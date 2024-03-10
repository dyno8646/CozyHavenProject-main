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
    public class Hotel_Testing
    {
        private IHotelService _hotelService;
        private Mock<IRepository<int, Hotel>> _mockRepo;
        private Mock<ILogger<HotelService>> _mockLogger;

        [SetUp]
        public void Setup()
        {
            _mockRepo = new Mock<IRepository<int, Hotel>>();
            _mockLogger = new Mock<ILogger<HotelService>>();
            _hotelService = new HotelService(_mockRepo.Object, _mockLogger.Object);
        }

        [Test]
        public async Task AddHotelSuccessTest()
        {
            // Arrange
            var hotelDto = new HotelDTO { Name = "New Hotel", Address = "123 Main St", Description = "A cozy hotel" };
            var hotel = new Hotel { HotelId = 1, Name = "New Hotel", Address = "123 Main St", Description = "A cozy hotel" };

            _mockRepo.Setup(x => x.Add(It.IsAny<Hotel>())).ReturnsAsync(hotel);

            // Act
            var result = await _hotelService.AddHotel(hotelDto);

            // Assert
            Assert.IsNotNull(result);
        }

        [Test]
        public async Task DeleteHotelSuccessTest()
        {
            // Arrange
            var hotelId = 1;
            var hotel = new Hotel { HotelId = hotelId, Name = "Hotel to Delete" };
            _mockRepo.Setup(x => x.GetById(hotelId)).ReturnsAsync(hotel);
            _mockRepo.Setup(x => x.Delete(hotelId)).ReturnsAsync(hotel);

            // Act
            var result = await _hotelService.DeleteHotel(hotelId);

            // Assert
            Assert.IsNotNull(result);
        }

        [Test]
        public async Task GetAllHotelsSuccessTest()
        {
            // Arrange
            var hotels = new List<Hotel> { new Hotel { HotelId = 1 }, new Hotel { HotelId = 2 } };
            _mockRepo.Setup(x => x.GetAll()).ReturnsAsync(hotels);

            // Act
            var result = await _hotelService.GetAllHotels();

            // Assert
            Assert.That(result.Count, Is.EqualTo(2));
        }

        [Test]
        public async Task GetHotelSuccessTest()
        {
            // Arrange
            var hotelId = 1;
            var hotel = new Hotel { HotelId = hotelId };
            _mockRepo.Setup(x => x.GetById(hotelId)).ReturnsAsync(hotel);

            // Act
            var result = await _hotelService.GetHotel(hotelId);

            // Assert
            Assert.IsNotNull(result);
        }


        [Test]
        public async Task UpdateHotelDescriptionSuccessTest()
        {
            // Arrange
            var hotelId = 1;
            var description = "Updated Description";
            var hotel = new Hotel { HotelId = hotelId, Description = "Initial Description" };
            _mockRepo.Setup(x => x.GetById(hotelId)).ReturnsAsync(hotel);
            _mockRepo.Setup(x => x.Update(It.IsAny<Hotel>())).ReturnsAsync((Hotel h) => h);

            // Act
            var result = await _hotelService.UpdateHotelDescription(hotelId, description);

            // Assert
            Assert.That(result.Description, Is.EqualTo(description));
        }
        [Test]
        public async Task GetHotelReviews_WhenHotelExists_ReturnsReviews()
        {
            // Arrange
            int hotelId = 1;
            var hotel = new Hotel { HotelId = hotelId, Reviews = new List<Review> { new Review { ReviewId = 1, Rating = 5, Comment = "Great hotel" } } };
            _mockRepo.Setup(r => r.GetById(hotelId)).ReturnsAsync(hotel);

            // Act
            var result = await _hotelService.GetHotelReviews(hotelId);

            // Assert
            Assert.IsNotNull(result);
        }

        [Test]
        public async Task GetHotelReviewsWhenHotelDoesNotExistThrowsException()
        {
            // Arrange
            int hotelId = 1;
            _mockRepo.Setup(r => r.GetById(hotelId)).ReturnsAsync((Hotel)null);

            // Act and Assert
            Assert.ThrowsAsync<NoHotelFoundException>(async () => await _hotelService.GetHotelReviews(hotelId));
        }
        [Test]
        public async Task GetHotelAmenities_WhenHotelExists_ReturnsAmenities()
        {
            // Arrange
            int hotelId = 1;
            var hotel = new Hotel { HotelId = hotelId, Amenities = new List<HotelAmenity> { new HotelAmenity { AmenityId = 1} } };
            _mockRepo.Setup(r => r.GetById(hotelId)).ReturnsAsync(hotel);

            // Act
            var result = await _hotelService.GetHotelAmenities(hotelId);

            // Assert
            Assert.IsNotNull(result);
            Assert.That(result.Count, Is.EqualTo(1)); // Assuming only one amenity in this example
            
        }

        [Test]
        public async Task GetRecommendedHotels_ReturnsRecommendedHotels()
        {
            // Arrange
            var hotels = new List<Hotel>
        {
            new Hotel { HotelId = 1, Name = "Hotel A", Reviews = new List<Review> { new Review { Rating = 4 }, new Review { Rating = 5 } } },
            new Hotel { HotelId = 2, Name = "Hotel B", Reviews = new List<Review> { new Review { Rating = 3 }, new Review { Rating = 4 } } },
            new Hotel { HotelId = 3, Name = "Hotel C", Reviews = new List<Review> { new Review { Rating = 5 }, new Review { Rating = 5 } } },
            new Hotel { HotelId = 4, Name = "Hotel D", Reviews = new List<Review> { new Review { Rating = 2 }, new Review { Rating = 3 } } },
        };
            _mockRepo.Setup(r => r.GetAll()).ReturnsAsync(hotels);

            // Act
            var result = await _hotelService.GetRecommendedHotels();

            // Assert
            Assert.IsNotNull(result);
        }
        [Test]
        public async Task GetRoomsByHotelId_ReturnsRoomsForHotel()
        {
            // Arrange
            var hotelId = 1;
            var rooms = new List<Room>
        {
            new Room { RoomId = 1, HotelId = hotelId, RoomType = "Single", BaseFare = 100 },
            new Room { RoomId = 2, HotelId = hotelId, RoomType = "Double", BaseFare = 150 },
            new Room { RoomId = 3, HotelId = hotelId, RoomType = "Suite", BaseFare = 200 },
        };
            var hotel = new Hotel { HotelId = hotelId, Name = "Hotel A", Rooms = rooms };
            _mockRepo.Setup(r => r.GetById(hotelId)).ReturnsAsync(hotel);

            // Act
            var result = await _hotelService.GetRoomsByHotelId(hotelId);

            // Assert
    
            Assert.That(result.Count, Is.EqualTo(3)); // Assuming the hotel has 3 rooms
            
        }
        [Test]
        public async Task UpdateHotelDetails_UpdatesHotelDetails()
        {
            // Arrange
            var hotelId = 1;
            var updatedHotel = new Hotel { HotelId = hotelId, Name = "Updated Hotel Name", Address = "Updated Address", Description = "Updated Description" };
            var existingHotel = new Hotel { HotelId = hotelId, Name = "Old Hotel Name", Address = "Old Address", Description = "Old Description" };
            _mockRepo.Setup(r => r.GetById(hotelId)).ReturnsAsync(existingHotel);

            // Act
            var result = await _hotelService.UpdateHotelDetails(updatedHotel);

            // Assert
            Assert.IsNotNull(result);
        }
        [Test]
        public async Task GetHotelBookings_ReturnsHotelBookings()
        {
            // Arrange
            var hotelId = 1;
            var room1 = new Room { RoomId = 1, Bookings = new List<Booking> { new Booking { BookingId = 1 } } };
            var room2 = new Room { RoomId = 2, Bookings = new List<Booking> { new Booking { BookingId = 2 } } };
            var hotel = new Hotel { HotelId = hotelId, Rooms = new List<Room> { room1, room2 } };
            _mockRepo.Setup(r => r.GetById(hotelId)).ReturnsAsync(hotel);

            // Act
            var result = await _hotelService.GetHotelBookings(hotelId);

            // Assert
            Assert.That(result.Count, Is.EqualTo(2)); // Assuming there are 2 bookings in the hotel
            
        }
        [Test]
        public async Task GetHotelsByOwnerId_ReturnsHotelsForOwner()
        {
            // Arrange
            var ownerId = 1;
            var hotels = new List<Hotel>
        {
            new Hotel { HotelId = 1, OwnerId = ownerId },
            new Hotel { HotelId = 2, OwnerId = ownerId },
            new Hotel { HotelId = 3, OwnerId = ownerId + 1 } 
        };
            _mockRepo.Setup(r => r.GetAll()).ReturnsAsync(hotels);

            // Act
            var result = await _hotelService.GetHotelsByOwnerId(ownerId);

            // Assert
            Assert.IsNotNull(result);
           
        }
        [Test]
        public async Task GetAvailableRoomsCount_ReturnsAvailableRoomsCountForHotel()
        {
            // Arrange
            var hotelId = 1;
            var rooms = new List<Room>
        {
            new Room { RoomId = 1, HotelId = hotelId, Available = true },
            new Room { RoomId = 2, HotelId = hotelId, Available = false },
            new Room { RoomId = 3, HotelId = hotelId, Available = true }
        };
            var hotel = new Hotel { HotelId = hotelId, Rooms = rooms };
            _mockRepo.Setup(r => r.GetById(hotelId)).ReturnsAsync(hotel);

            // Act
            var result = await _hotelService.GetAvailableRoomsCount(hotelId);

            // Assert
            Assert.That(result, Is.EqualTo(2)); 
        }


    }
}
