using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;

namespace Cozy_Haven.Interfaces
{
    public interface IUserService
    {
        public Task<LoginUserDTO> Login(LoginUserDTO user);
        public Task<LoginUserDTO> Register(RegisterUserDTO user);
        public Task<List<User>> GetAllUsers();
        public Task<ICollection<BookingInfoDTO>> GetUserBookingInfo(string username);
        public Task<User> GetUser(string username);
        public Task<User> DeleteUser(string username);
        public Task<User> UpdatePassword(string username,string password);
        public Task<User> UpdateUserProfile(string username, string firstName, string lastName, string contactNumber, string email, DateTime dateofbirth,string Address,string? Gender);
        public Task<ICollection<Booking>> GetUserBookings(string username);
        public Task<ICollection<Review>> GetUserReviews(string username);
        public Task<ICollection<ReviewDTO>> GetUserReviews2(string username);
        public Task<ICollection<Favourite>> GetUserFavorites(string username);
        public Task<User> GetUserByUsernameOrEmail(string usernameOrEmail);
        public Task<List<User>> GetHotelOwners();
    }
}