using Cozy_Haven.Exceptions;
using Cozy_Haven.Models.DTOs;
using Cozy_Haven.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Cozy_Haven.Models;
using Microsoft.AspNetCore.Authorization;
using System.Collections.ObjectModel;
using Cozy_Haven.Services;
using Microsoft.AspNetCore.Cors;
using Cozy_Haven.Helper;
using Cozy_Haven.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("ReactPolicy")]
    [ExcludeFromCodeCoverage]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<UserController> _logger;
        private readonly CozyHavenContext context;

        public UserController(IUserService userService,ILogger<UserController> logger,CozyHavenContext _context)
        {
            _userService=userService;
            _logger=logger;
            context = _context;
            
        }
        [HttpPost("Register")]
        public async Task<ActionResult<LoginUserDTO>> Register(RegisterUserDTO user)
        {
            try
            {
                var result = await _userService.Register(user);
                return Ok(result); 
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while registering a user.");
                return StatusCode(500, "An error occurred while registering a user."); 
            }
        }
        [HttpPost("Login")]
        public async Task<ActionResult<LoginUserDTO>> Login(LoginUserDTO user)
        {
            try
            {
                var result = await _userService.Login(user);
                return Ok(result);
            }
            catch (InvalidUserException iuse)
            {
                _logger.LogCritical(iuse.Message);
                return Unauthorized("Invalid username or password");
            }
        }

        [HttpDelete("DeleteUser")]
        public async Task<ActionResult<User>> DeleteUser(string username)
        {
            try
            {
                var deletedUser = await _userService.DeleteUser(username);
                return Ok(deletedUser);
            }
            catch (UserNotFoundException ex)
            {
                _logger.LogError(ex, "User not found: {Username}", username);
                return NotFound(ex.Message);
            }
        }
        [Authorize(Roles = "Admin")]
        [HttpGet("GetAllUsers")]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            try
            {
                var users = await _userService.GetAllUsers();
                return Ok(users);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("GetByUsername")]
        public async Task<ActionResult<User>> GetUserByUsername(string username)
        {
            try
            {
                var user=await _userService.GetUser(username);
                return Ok(user);
            }
            catch (UserNotFoundException ex)
            {
                _logger.LogError(ex, "User not found: {Username}", username);
                return NotFound(ex.Message);
            }
        }
        [HttpPut("{username}/update-password")]
        public async Task<ActionResult<User>> UpdatePassword(string username, string password)
        {
            try
            {
                var updatedUser=await _userService.UpdatePassword(username, password);
                return Ok(updatedUser);
            }
            catch (UserNotFoundException ex)
            {
                _logger.LogError(ex, "User not found: {Username}", username);
                return NotFound(ex.Message);
            }
        }
        [HttpGet("userbookings/{username}")]
        public async Task<ActionResult<ICollection<BookingInfoDTO>>> GetUserBookings(string username)
        {
            try
            {
                var bookingInfoList = await _userService.GetUserBookingInfo(username);
                return Ok(bookingInfoList);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{username}/bookings")]
        public async Task<ActionResult<ICollection<Booking>>> GetUserBookingsInfo(string username)
        {
            try
            {
                var bookings=await _userService.GetUserBookings(username);
                return Ok(bookings);
            }
            catch (NoBookingFoundException ex)
            {
                _logger.LogError(ex, "No bookings found for user: {Username}", username);
                return NotFound(ex.Message);
            }
            catch (UserNotFoundException ex)
            {
                _logger.LogError(ex, "User not found: {Username}", username);
                return NotFound(ex.Message);
            }
        }

        [HttpGet("{username}/reviews")]
        public async Task<ActionResult<ICollection<Review>>> GetUserReviews(string username)
        {
            try
            {
                var reviews=await _userService.GetUserReviews(username);
                return Ok(reviews);
            }
            catch (NoReviewFoundException ex)
            {
                _logger.LogError(ex, "No reviews found for user: {Username}", username);
                return NotFound(ex.Message);
            }
            catch (UserNotFoundException ex)
            {
                _logger.LogError(ex, "User not found: {Username}", username);
                return NotFound(ex.Message);
            }
        }
        [HttpGet("{username}/GetUserReviews2")]
        public async Task<IActionResult> GetUserReviews2(string username)
        {
            try
            {
                var reviews = await _userService.GetUserReviews2(username);
                return Ok(reviews);
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (NoReviewFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                // Log any other unexpected exceptions
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{username}/favorites")]
        public async Task<ActionResult<ICollection<Favourite>>> GetUserFavorites(string username)
        {
            try
            {
                var favorites = await _userService.GetUserFavorites(username);
                return Ok(favorites);
            }
            catch (NoFavouriteFoundException ex)
            {
                _logger.LogError(ex, "No favorites found for user: {Username}", username);
                return NotFound(ex.Message);
            }
            catch (UserNotFoundException ex)
            {
                _logger.LogError(ex, "User not found: {Username}", username);
                return NotFound(ex.Message);
            }
            
        }
        [HttpPut("UpdateUserProfile/{username}")]
        public async Task<ActionResult> UpdateUserProfile(string username, [FromBody] UpdateUserDTO updateUserDto)
        {
            try
            {
                var user = await _userService.UpdateUserProfile(username, updateUserDto.FirstName, updateUserDto.LastName, updateUserDto.ContactNumber, updateUserDto.Email, updateUserDto.DateOfBirth,updateUserDto.Address,updateUserDto.Gender);
                if (user != null)
                {
                    return Ok(user);
                }
                return NotFound($"User with username {username} not found.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating the user profile");
            }
        }

        [HttpGet("{usernameOrEmail}")]
        public async Task<ActionResult<User>> GetUserByUsernameOrEmail(string usernameOrEmail)
        {
            try
            {
                var user = await _userService.GetUserByUsernameOrEmail(usernameOrEmail);
                return Ok(user);
            }
            catch (UserNotFoundException ex)
            {
                _logger.LogError(ex, "User not found: {UsernameOrEmail}", usernameOrEmail);
                return NotFound(ex.Message);
            }
            
        }
        [Authorize(Roles ="Admin")]
        [HttpGet("GetHotelOwners")]
        public async Task<ActionResult<List<User>>> GetHotelOwners()
        {
            try
            {
                var hotelOwners = await _userService.GetHotelOwners();
                return Ok(hotelOwners);
            }
            catch (UserNotFoundException ex)
            {
                _logger.LogError(ex.Message);
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPut("UploadProfilePicture")]
        public async Task<IActionResult> UploadProfilePicture(IFormFile file, string username)
        {
            APIResponse response = new APIResponse();
            try
            {
                if (file == null || file.Length == 0)
                {
                    response.ResponseCode = 400;
                    response.Message = "File is empty";
                    return BadRequest(response);
                }

                var user = await context.Users.SingleOrDefaultAsync(u => u.Username == username);

                if (user == null)
                {
                    response.ResponseCode = 404;
                    response.Message = "User not found";
                    return NotFound(response);
                }

                // Delete previous profile picture if exists
                var existingProfilePicture = await context.ProfilePictures.FirstOrDefaultAsync(p => p.username == user.Username);
                if (existingProfilePicture != null)
                {
                    context.ProfilePictures.Remove(existingProfilePicture);
                    await context.SaveChangesAsync();
                }

                // Save the new profile picture
                using (MemoryStream stream = new MemoryStream())
                {
                    await file.CopyToAsync(stream);
                    var profilePicture = new UserProfilePicture
                    {
                        ImagePath = stream.ToArray(),
                        username = user.Username,
                        User = user // Associate the user with the profile picture
                    };
                    context.ProfilePictures.Add(profilePicture);
                    await context.SaveChangesAsync();
                }

                response.ResponseCode = 200;
                response.Message = "Profile picture uploaded successfully";
            }
            catch (Exception ex)
            {
                response.ResponseCode = 500;
                response.Message = "An error occurred while saving the entity changes. See the inner exception for details.";
                response.Result = ex.InnerException?.Message; // Include inner exception message
            }
            return Ok(response);
        }


    }
}
