using Cozy_Haven.Exceptions;
using Cozy_Haven.Interfaces;
using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("ReactPolicy")]
    [ExcludeFromCodeCoverage]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewservice;

        public ReviewController(IReviewService reviewService)
        {
            _reviewservice=reviewService;
        }
        [HttpGet("AllReviews")]
        public async Task<ActionResult<List<Review>>> GetReviews()
        {
            try
            {
                return await _reviewservice.GetAllReviews();
            }
            catch (NoReviewFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
        [HttpGet("GetAllReviews2")]
        public async Task<ActionResult<List<ReviewDTO>>> GetAllReviews()
        {
            try
            {
                var reviews = await _reviewservice.GetAllReviews2();
                return Ok(reviews);
            }
            catch (NoReviewFoundException)
            {
                return NotFound("No reviews found.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
        [HttpPut("EditReview")]
        public async Task<ActionResult<Review>> EditReview(int id, [FromBody] ReviewDTO review)
        {
            try
            {
                var editedReview = await _reviewservice.EditReview(id, review);
                return Ok(editedReview);
            }
            catch (NoReviewFoundException)
            {
                return NotFound($"Review with ID {id} not found.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to edit review: {ex.Message}");
            }
        }
        [HttpGet("GetById")]
        public async Task<ActionResult<Review>> GetReviewById(int id)
        {
            try
            {
                return await _reviewservice.GetReview(id);
            }
            catch (NoReviewFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
        //[HttpGet("GetByHotelId")]
        //public async Task<List<Review>> GetHotelReviews(int id)
        //{
        //    return await _reviewservice.GetReviewsByHotelId(id);
        //}
        //[HttpGet("GetByUserId")]
        //public async Task<List<Review>> GetUserReviews(int id)
        //{
        //    return await _reviewservice.GetReviewsByUserId(id);
        //}
        [HttpPost("AddReview")]
        public async Task<ActionResult<Review>> AddReview(ReviewDTO review)
        {
            try
            {
                return await _reviewservice.AddReview(review);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
        [HttpPut("UpdateRating")]
        public async Task<ActionResult<Review>> UpdateRating(int id,float rating)
        {
            try
            {
                return await _reviewservice.UpdateRating(id, rating);
            }
            catch (NoReviewFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
        [HttpPut("UpdateReview2")]
        public async Task<ActionResult<Review>> UpdateReview2(int id, ReviewDTO reviewDTO)
        {
            try
            {
                return await _reviewservice.UpdateReview2(id, reviewDTO);
            }
            catch (NoReviewFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
        [HttpDelete("DeleteReview")]
        public async Task<ActionResult<Review>> DeleteReview(int id)
        {
            try
            {
                return await _reviewservice.DeleteReview(id);
            }
            catch (NoReviewFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }
        }
    }
}
