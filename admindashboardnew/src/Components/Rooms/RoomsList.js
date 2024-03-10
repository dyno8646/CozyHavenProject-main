import React, { useState, useEffect } from 'react';
import styles from './RoomsList.css';
import { useNavigate } from 'react-router-dom';

function RoomsList() {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate(); 
    
    useEffect(() => {
        const storedHotelId = sessionStorage.getItem('hotelId');
        // const [loading, setLoading] = useState(true);
        
        if (storedHotelId) {
            fetch(`http://localhost:5272/api/Hotel/GetRoomsByHotelId?hotelId=${storedHotelId}`)
                .then(response => response.json())
                .then(data => {
                    setRooms(data);
                    //setLoading(false);
                })
                .catch(error => console.error('Error fetching rooms:', error));
                //setLoading(false); 
            
        }
    }, []); 
    const isLoggedIn = () => {
        // Check if user is logged in
        const userId = sessionStorage.getItem('userId');
        return userId !== null;
    };
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    const handleBooking = (roomType, roomId) => {
        if (!isLoggedIn()) {
            alert('Please log in first, to continue.');
            navigate('/');
        } else {
            sessionStorage.setItem('roomType', roomType);
            sessionStorage.setItem('roomId', roomId);
            navigate('/booking');
        }
    };
    
    

    return (
        <div>
            <div className={styles}>
                <section className="package1" id="package1">
                    <div className="container22">
                        <h2 className="h2 section-title">Available Rooms</h2>
                        <label className="section-text">Step into your own sanctuary of comfort and luxury with our meticulously designed rooms. Unwind in style as you enjoy plush amenities, stunning views, and personalized service. Your perfect retreat awaits!</label>
                        <br/>
                        {rooms.length === 0 && (
                            <div className="centeredMessage">
                                <h3 style={{color:"#8bbe1b"}}>All rooms are currently booked.</h3>
                                <h6>Sorry, no Rooms are currently available to book and plan your stay here.</h6>
                                <button onClick={() => navigate('/hotels')} className={styles.button}>Click here..To go back to HotelsPage</button>
                            </div>
                        )}
                        {rooms.map((room) => (
                            <div key={room.id}>
                                <ul className="package1-list">
                                    <li>
                                        <div className="package1-card">
                                            <figure className="card-banner1">
                                            {['png', 'jpeg', 'gif','webp', 'jpg'].map((format) => (
                                                <img 
                                                key={format} 
                                                src={`/RoomImages/${room.roomId}.${format}`} 
                                                alt={room.roomType} 
                                                onError={(e) => { e.target.style.display = 'none'; }}
                                                onClick={() => {
                                                    sessionStorage.setItem('roomId', room.roomId);
                                                    sessionStorage.setItem('roomType', room.roomType);
                                                    navigate('/roomimages');
                                                }}/>
                                                ))}
                                            </figure>
                                            <div className="card-content1">
                                                <h3 className="h3 card-title">{room.roomType}</h3>
                                                <h4 className="card-title">Room Amenities</h4>
                                                <ul className="amenities-list">
                                                    <li><ion-icon name="wifi"></ion-icon> Wifi</li>
                                                    <li><ion-icon name="eye-sharp"></ion-icon> Garden View</li>
                                                    <li><ion-icon name="accessibility-outline"></ion-icon> Bathroom</li>
                                                    <li><ion-icon name="bed"></ion-icon> Comfortable Beds</li>
                                                    <li><ion-icon name="tv"></ion-icon> Television</li>
                                                    <li><ion-icon name="water"></ion-icon> AC</li>
                                                </ul>
                                                <ul className="card-meta-list1">
                                                    <li className="card-meta-item1">
                                                        <div className="meta-box1">
                                                            <ion-icon style={{color:"#2E8B57",fontSize:"25px"}} name="bed" /><h7>BedType </h7><h7 style={{color:"#8bbe1b"}}> {room.bedType} </h7>
                                                        </div>
                                                        <div className="meta-box1">
                                                            <ion-icon style={{color:"#2E8B57", fontSize:"25px"}} name="expand-outline" />  <h7>RoomSize  </h7>  <h7 style={{color:"#8bbe1b"}}>{room.roomSize} Sqmt.</h7>
                                                        </div>
                                                        <div className="meta-box1">
                                                            <ion-icon style={{color:"#2E8B57", fontSize:"25px"}} name="people-circle-outline" />  <h7>Max People </h7>  <h7 style={{color:"#8bbe1b"}}>{room.maxOccupancy} </h7>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-price">
                                                <div className="wrapper1">
                                                    <ion-icon />Rating :
                                                    <div className="card-rating">
                                                        <ion-icon name="star" />
                                                        <ion-icon name="star" />
                                                        <ion-icon name="star" />
                                                        <ion-icon name="star" />
                                                        <ion-icon name="star" />
                                                    </div>
                                                </div>
                                                <p className="price">
                                                    ₹ {room.baseFare || '220'}
                                                    <span>/ per night</span>
                                                </p>
                                                <button className="btn btn-secondary3" onClick={() => handleBooking(room.roomType,room.roomId)}>Book Now</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default RoomsList;
