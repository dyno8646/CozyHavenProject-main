using Cozy_Haven.Exceptions;
using Cozy_Haven.Interfaces;
using Cozy_Haven.Mappers;
using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using System.Diagnostics.CodeAnalysis;

namespace Cozy_Haven.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IRepository<int, Review> _repository;
        public ReviewService(IRepository<int,Review> repository)
        {
            _repository=repository;
        }
        public async Task<Review> AddReview(ReviewDTO review)
        {
            Review newreview = new AddReview(review).GetReview();
            return await _repository.Add(newreview);
        }
        public async Task<Review> DeleteReview(int id)
        {
            var review=await GetReview(id);
            if(review!=null)
            {
                await _repository.Delete(id);
                return review;
            }
            throw new NoReviewFoundException();
        }
        public Task<List<Review>> GetAllReviews()
        {
            var reviews=_repository.GetAll();
            if(reviews!=null) return reviews;
            throw new NoReviewFoundException();
        }
        [ExcludeFromCodeCoverage]
        public async Task<Review> EditReview(int id, ReviewDTO review)
        {
            var existingReview = await GetReview(id);
            if (existingReview != null)
            {
                // Update existingReview properties with new values from review DTO
                existingReview.Rating = review.Rating;
                existingReview.Comment = review.Comment;

                // Assuming Hotel and User properties are not editable in the review
                // If they are editable, additional logic to handle them should be added here

                return await _repository.Update(existingReview);
            }
            throw new NoReviewFoundException();
        }
        [ExcludeFromCodeCoverage]
        public async Task<List<ReviewDTO>> GetAllReviews2()
        {
            var reviews = await _repository.GetAll();

            if (reviews != null)
            {
                // Convert Review entities to ReviewDTO objects with necessary information
                List<ReviewDTO> reviewDTOs = reviews.Select(r => new ReviewDTO
                {
                    HotelId = r.HotelId,
                    UserId = r.UserId,
                    Username = r.User.Username, // Accessing User property to get username
                    HotelName = r.Hotel.Name, // Accessing Hotel property to get hotel name
                    Rating = r.Rating,
                    Comment = r.Comment,
                    DatePosted = r.DatePosted,
                    UserAddress = r.User.Address, // Assuming User has an Address property
                    //UserProfilePicture = r.User.ProfilePicture // Assuming User has a ProfilePicture property
                }).ToList();

                return reviewDTOs;
            }

            throw new NoReviewFoundException();
        }

        public Task<Review> GetReview(int id)
        {
            var review=_repository.GetById(id);
            if (review != null) return review;
            throw new NoReviewFoundException();
        }
        public async Task<Review> UpdateRating(int id, float rating)
        {
            var hotel=await GetReview(id);
            if(hotel!=null)
            {
                hotel.Rating=rating;
                await _repository.Update(hotel);
                return hotel;
            }
            throw new NoReviewFoundException();
        }
        [ExcludeFromCodeCoverage]
        public async Task<Review> UpdateReview2(int id, ReviewDTO reviewDTO)
        {
            var review = await GetReview(id);
            if (review != null)
            {
                review.Rating = reviewDTO.Rating;
                review.Comment = reviewDTO.Comment;
                review.DatePosted = reviewDTO.DatePosted;

                await _repository.Update(review);
                return review;
            }
            throw new NoReviewFoundException();
        }
    }
}
