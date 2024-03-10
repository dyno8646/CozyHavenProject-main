import React, { useState, useEffect } from 'react';
import styles from '../Bookings/Booking.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditReview() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [roomType, setRoomType] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [reviewId, setReviewId] = useState(null);
    const [hotelId, setHotelId] = useState(null);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        const storedRoomType = sessionStorage.getItem('reviewRoomType');

        if (storedUsername) setUsername(storedUsername);
        if (storedRoomType) setRoomType(storedRoomType);
        fetchUserReview();
    }, []);

    const fetchUserReview = async () => {
        try {
            const reviewId = sessionStorage.getItem('userReviewId');
            const response = await axios.get(`http://localhost:5272/api/Review/GetById?id=${reviewId}`);
            const { rating, comment, hotelId } = response.data;
            setRating(rating);
            setComment(comment);
            setReviewId(reviewId);
            setHotelId(hotelId);
        } catch (error) {
            console.error('Error fetching user review:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateReview();
            navigate('/userReviews');
        } catch (error) {
            console.error('Error updating review:', error);
        }
    };

    const updateReview = async () => {
        try {
            const currentDate = new Date().toISOString();
            const data = {
                hotelId:hotelId,
                userId:sessionStorage.getItem('userId'),
                username: username,
                hotelName:"",
                rating: rating,
                comment: comment,
                datePosted:currentDate,
                userAddress: "",
                userProfilePicture: ""
            };
    
            await axios.put(`http://localhost:5272/api/Review/EditReview?id=${reviewId}`, data);
            alert('Review updated successfully');
        } catch (error) {
            console.error('Error updating review:', error);
        }
    };
    

    return (
        <div>
            <div className={styles} id="/editreview">
                <div className="body2" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div className="container635">
                        <div className='heading'>Edit Review Here</div>
                        <form onSubmit={handleSubmit} className="form3">
                            <div className="scrollable-form">
                                <div className="input-box2">
                                    <label>Username</label>
                                    <input type="text" placeholder="Enter full name" value={username} readOnly required />
                                </div>
                                {/* <div className="input-box2">
                                    <label>Room Type</label>
                                    <input type="text" value={roomType} readOnly required />
                                </div> */}
                                <div className="column3">
                                    <div className="input-box2">
                                        <label>Rating</label>
                                        <div className="select-box">
                                            <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                                                <option hidden disabled value={0}>⭐</option>
                                                <option value={1}>⭐</option>
                                                <option value={2}>⭐⭐</option>
                                                <option value={3}>⭐⭐⭐</option>
                                                <option value={4}>⭐⭐⭐⭐</option>
                                                <option value={5}>⭐⭐⭐⭐⭐</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-box2">
                                    <label>Comment</label>
                                    <input type="text" placeholder="Enter your comment here" value={comment} onChange={(e) => setComment(e.target.value)} required />
                                </div>
                                <br />
                                <br />
                                <hr style={{ width: '100%', margin: 'auto', color: '#031D44' }} />
                                <br />
                            </div>
                            <button style={{ borderRadius: '30px', backgroundColor: "#8bbe1b" }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditReview;
