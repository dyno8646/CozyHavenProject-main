﻿using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;

namespace Cozy_Haven.Interfaces
{
    public interface IHotelService
    {
        public Task<Hotel> GetHotel(int id);
        public Task<List<Hotel>> GetAllHotels();
        public Task<Hotel> AddHotel(HotelDTO hotel);
        public Task<Hotel> UpdateHotelDescription(int id, string description);
        public Task<Hotel> DeleteHotel(int id);
        public Task<List<Hotel>> GetHotelsByDestinationId(int destinationId);
        //public Task<Hotel> UpdateHotelOwner(int hotelid, int ownerId);
        public Task<ICollection<ReviewDTO>> GetHotelReviews(int hotelId);
        public Task<ICollection<HotelAmenity>> GetHotelAmenities(int hotelId);
        public Task<ICollection<Hotel>> GetRecommendedHotels();
        public Task<ICollection<Room>> GetRoomsByHotelId(int hotelId);
        public Task<Hotel> UpdateHotelDetails(int hotelId, string name, string address, string description);
        public Task<ICollection<Booking>> GetHotelBookings(int hotelId);
        public Task<ICollection<Hotel>> GetHotelsByOwnerId(int ownerid);
        public Task<int> GetAvailableRoomsCount(int hotelId);
        public Task<List<Hotel>> GetHotelsByDestinationName(string destinationName);
        public Task<ICollection<Review>> GetHotelReviews1(int hotelId);

    }
}
