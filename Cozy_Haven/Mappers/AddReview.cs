using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Mappers
{
    [ExcludeFromCodeCoverage]
    public class AddReview
    {
        private readonly Review review;

        public AddReview(ReviewDTO addReviewDTO)
        {
            review = new Review
            {
                HotelId = addReviewDTO.HotelId,
                UserId = addReviewDTO.UserId,
                Rating = addReviewDTO.Rating,
                Comment = addReviewDTO.Comment,
                DatePosted = addReviewDTO.DatePosted
            };
        }

        public Review GetReview()
        {
            return review;
        }
    }
}
