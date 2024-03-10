import React, { useState, useEffect } from 'react';
import styles from '../Bookings/Booking.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ReviewForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [roomType, setRoomType] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [editMode, setEditMode] = useState({
        username: false,
        roomType: false,
      });

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        const storedRoomType = sessionStorage.getItem('reviewRoomType');

        if (storedUsername) setUsername(storedUsername);
        if (storedRoomType) setRoomType(storedRoomType);

    }, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const hotelId = await fetchHotelId();
            const userId = sessionStorage.getItem('userId');
            const datePosted = new Date().toISOString();
            const reviewData = {
                hotelId,
                userId,
                username:"",
                hotelName:"",
                rating,
                comment,
                datePosted,
                userAddress:"",
                userProfilePicture:""
            };
            await addReview(reviewData);
            navigate('/userReviews');
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };
    const fetchHotelId = async () => {
        const roomId = sessionStorage.getItem('reviewRoomId');
        const response = await axios.get(`http://localhost:5272/api/Room/GetById?id=${roomId}`);
        return response.data.hotelId;
    };

    const addReview = async (reviewData) => {
        try {
            await axios.post('http://localhost:5272/api/Review/AddReview', reviewData);
            console.log('Review added successfully');
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };
    



    return (
        <div>
            <div className={styles} id="/addreview">
                <div className="body2" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>


                    <div className="container635">
                        <div className='heading'>Add Review's Here</div>
                        <form onSubmit={handleSubmit} className="form3">
                            <div className="scrollable-form">
                                <div className="input-box2">
                                    <label>Username</label>
                                    <input type="text" placeholder="Enter full name" value={username} readOnly={!editMode.username} required />

                                </div>
                                <div className="input-box2">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Enter full name" required />
                                </div>
                                <div className="input-box2">
                                    <label>Room Type</label>
                                    <input type="text" value={roomType} readOnly required />
                                </div>
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
    )
}

export default ReviewForm