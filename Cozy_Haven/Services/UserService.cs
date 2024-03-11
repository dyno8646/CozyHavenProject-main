using Cozy_Haven.Exceptions;
using Cozy_Haven.Interfaces;
using Cozy_Haven.Mappers;
using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using Cozy_Haven.Repository;
using Microsoft.IdentityModel.Tokens;
using System.Diagnostics.CodeAnalysis;
using System.Security.Cryptography;
using System.Text;

namespace Cozy_Haven.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository<string, User> _repo;
        private readonly IRepository<int, Hotel> _hotelrepository;
        private readonly IRepository<int, Room> _roomrepository;
        private readonly ILogger<UserService> _logger;
        private readonly IReviewService _reviewService;
        private readonly ITokenService _tokenservice;

        public UserService(IRepository<string, User> repository, IReviewService reviewService, ILogger<UserService> logger, ITokenService tokenService, IRepository<int, Room> roomrepository, IRepository<int, Hotel> hotelrepository)
        {
            _repo = repository;
            _hotelrepository = hotelrepository;
            _roomrepository = roomrepository;
            _logger = logger;
            _tokenservice = tokenService;
            _reviewService = reviewService;

        }
        public async Task<LoginUserDTO> Login(LoginUserDTO user)
        {
            _logger.LogInformation("Logging in user: {Username}", user.Username);
            var myuser = await _repo.GetById(user.Username);
            if(myuser == null) {
                _logger.LogWarning("User not found: {Username}", user.Username);
                throw new InvalidUserException(); 
            }
            var userPassword = GetPasswordEncrypted(user.Password, myuser.Key);
            var checkPasswordMatch = ComparePasswords(myuser.Password, userPassword);
            if (checkPasswordMatch)
            {
                user.Password = "";
                user.Role = myuser.Role;
                user.Token = await _tokenservice.GenerateToken(user);
                user.UserId = myuser.UserId;
                _logger.LogInformation("User logged in successfully: {Username}", user.Username);
                return user;
            }
            throw new InvalidUserException();
        }
        [ExcludeFromCodeCoverage]
        private bool ComparePasswords(byte[] password, byte[] userPassword)
        {
            for (int i = 0; i < password.Length; i++)
            {
                if (password[i] != userPassword[i])
                    return false;
            }
            return true;
        }
        [ExcludeFromCodeCoverage]
        private byte[] GetPasswordEncrypted(string password, byte[] key)
        {
            HMACSHA512 hmac = new HMACSHA512(key);
            var userpassword = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            return userpassword;
        }

        public async Task<LoginUserDTO> Register(RegisterUserDTO user)
        {
            _logger.LogInformation("Registering for user: {Username}", user.Username);
            User myuser=new RegisterToUser(user).GetUser();
            myuser=await _repo.Add(myuser);
            LoginUserDTO result = new LoginUserDTO
            {
                Username = myuser.Username,
                Role = myuser.Role,
            };
            return result;
        }

        public Task<List<User>> GetAllUsers()
        {
            _logger.LogInformation("Getting all the Users");
            var users = _repo.GetAll();
            if(users!=null) return users;
            throw new UserNotFoundException();
        }


        public Task<User> GetUser(string username)
        {
            _logger.LogInformation("Getting user: {Username}", username);
            var user = _repo.GetById(username);
            if (user == null) throw new UserNotFoundException(username);
            return user;
        }

        public async Task<User> DeleteUser(string username)
        {
            _logger.LogInformation("Deleting user: {Username}", username);
            var user = await GetUser(username   );
            if (user != null)
            {
                await _repo.Delete(username);
                return user;
            }
            throw new UserNotFoundException(username);
        }

        public async Task<User> UpdatePassword(string username,string password)
        {
            _logger.LogInformation("Updating password for user: {Username}", username);
            var user = await _repo.GetById(username);
            if (user != null)
            { 
                var newKey = new HMACSHA512().Key;
                var newPasswordHash = GetPasswordEncrypted(password,newKey);

                user.Password = newPasswordHash;
                user.Key = newKey;
                await _repo.Update(user);
                _logger.LogInformation("Password updated successfully for user: {Username}", username);
                return user;
            }
            throw new UserNotFoundException(username);
        }

        public async Task<ICollection<Booking>> GetUserBookings(string username)
        {
            _logger.LogInformation("Getting User Bookings: {Username}", username);
            var user= await _repo.GetById(username);
            if (user != null)
            {
                var bookings = user.Bookings;
                if(bookings.IsNullOrEmpty()) throw new NoBookingFoundException(username);
                return bookings;
            }
            throw new UserNotFoundException(username);
        }
        [ExcludeFromCodeCoverage]
        public async Task<ICollection<BookingInfoDTO>> GetUserBookingInfo(string username)
        {
            var user = await _repo.GetById(username);
            if (user != null)
            {
                var bookingInfoList = new List<BookingInfoDTO>();

                foreach (var booking in user.Bookings)
                {
                    // Assuming there's a navigation property from Booking to Room
                    var room = await _roomrepository.GetById(booking.RoomId);
                    if (room != null)
                    {
                        // Assuming there's a navigation property from Room to Hotel
                        var hotel = await _hotelrepository.GetById(room.HotelId);
                        if (hotel != null)
                        {
                            var bookingInfo = new BookingInfoDTO
                            {
                                BookingId = booking.BookingId,
                                UserId = user.UserId,
                                RoomId = booking.RoomId,
                                HotelName = hotel.Name,
                                RoomType = room.RoomType, // Assuming RoomType is a property of the Room entity
                                CheckInDate = booking.CheckInDate,
                                CheckOutDate = booking.CheckOutDate,
                                Adults = booking.Adults,
                                Children = booking.Children,
                                TotalPrice = (decimal)booking.TotalPrice,
                                Status = booking.Status,
                                BookedDate = booking.BookedDate
                            };

                            bookingInfoList.Add(bookingInfo);
                        }
                    }
                }

                return bookingInfoList;
            }

            throw new UserNotFoundException(username);
        }
        [ExcludeFromCodeCoverage]
        public async Task<User> UpdateUserProfile(string username, string firstName, string lastName, string contactNumber, string email, DateTime dateofbirth,string Address,string Gender)
        {
            _logger.LogInformation("Updating user profile: {Username}", username);
            var existingUser = await GetUser(username);
            if (existingUser != null)
            {
                existingUser.Username = username;
                existingUser.FirstName = firstName;
                existingUser.LastName = lastName;
                existingUser.ContactNumber = contactNumber;
                existingUser.Email = email;
                existingUser.DateofBirth = dateofbirth;
                existingUser.Address=Address;
                existingUser.Gender=Gender;

                existingUser = await _repo.Update(existingUser);
                return existingUser;
            }
            return null;
        }
        public async Task<ICollection<Review>> GetUserReviews(string username)
        {
            _logger.LogInformation("Getting Reviews for user: {Username}", username);
            var user = await GetUser(username); 
            if (user != null)
            {
                var reviews=user.Reviews;
                if(reviews.IsNullOrEmpty()) { throw new NoReviewFoundException(username); }
                return reviews;
            }
            throw new UserNotFoundException(username);
        }
        [ExcludeFromCodeCoverage]
        public async Task<ICollection<ReviewDTO>> GetUserReviews2(string username)
        {
            var user = await GetUser(username);
            if (user != null)
            {
                // Get reviews for the user
                var userReviews = await _reviewService.GetAllReviews2();

                // Filter reviews for the specific user
                var userReviewsFiltered = userReviews.Where(r => r.Username == username).ToList();

                if (userReviewsFiltered.Count == 0)
                {
                    throw new NoReviewFoundException(username);
                }

                return userReviewsFiltered;
            }
            throw new UserNotFoundException(username);
        }
        public async Task<ICollection<Favourite>> GetUserFavorites(string username)
        {
            _logger.LogInformation("Getting Favourites for user: {Username}", username);
            var user = await GetUser(username);
            if (user != null)
            {
                var favourites=user.Favorites;
                if(favourites.IsNullOrEmpty()) { throw new NoFavouriteFoundException(username); }
                return favourites;
            }
            throw new UserNotFoundException(username);
        }
        public async Task<User> GetUserByUsernameOrEmail(string usernameOrEmail)
        {
            _logger.LogInformation("Getting user by : {usernameOrEmail}", usernameOrEmail);
            var users = await _repo.GetAll();
            var user = users.FirstOrDefault(u => u.Username == usernameOrEmail || u.Email == usernameOrEmail);
            if (user != null) return user;
            throw new UserNotFoundException(usernameOrEmail);
        }
        public async Task<List<User>> GetHotelOwners()
        {
            _logger.LogInformation("Getting Hotel Owners");
            var users = await _repo.GetAll();
            if (users == null || !users.Any())
            {
                throw new UserNotFoundException();
            }

            return users.Where(user => user.Role == "Owner").ToList();
        }

    }
}
