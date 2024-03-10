using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;

namespace Cozy_Haven.Interfaces
{
    public interface IReviewService
    {
        public Task<Review> GetReview(int id);
        public Task<List<Review>> GetAllReviews();
        public Task<Review> AddReview(ReviewDTO review);
        public Task<Review> UpdateRating(int id, float rating);
        public Task<Review> UpdateReview2(int id, ReviewDTO reviewDTO);
        public Task<Review> EditReview(int id, ReviewDTO review);
        public Task<Review> DeleteReview(int id);
        public Task<List<ReviewDTO>> GetAllReviews2();
    }
}
