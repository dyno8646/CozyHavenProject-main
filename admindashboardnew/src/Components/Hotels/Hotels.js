import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Hotels.css';
import HotelImages from '../Images/HotelImages';


function Hotels() {
    const [hotels, setHotels] = useState([]);
    const [destinationId, setDestinationId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedDestinationId = sessionStorage.getItem('destinationId');
        if (storedDestinationId) {
            setDestinationId(storedDestinationId);
        }

        fetch(`http://localhost:5272/api/Hotel/GetHotelsByDestinationId/${storedDestinationId}`)
            .then(response => response.json())
            .then(data => {
                setHotels(data);
            })
            .catch(error => console.error('Error fetching hotels:', error));


        const intervalId = setInterval(() => {
            if (navigate && navigate.location && navigate.location.pathname) {
                const currentUrlDestinationId = navigate.location.pathname.split('/').pop();
                if (storedDestinationId !== currentUrlDestinationId) {
                    setDestinationId(currentUrlDestinationId);
                }
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [navigate]);

    const handleBookNow = (hotelId, name) => {
        console.log("Book Now clicked for hotelId:", hotelId);
        sessionStorage.setItem('hotelId', hotelId);
        sessionStorage.setItem('hotelName', name);
        navigate('/roompage');
    };

    return (
        <div className={styles}>
            <section className="package1" id="package1">
                <div className="container22">
                    <h2 className="h2 section-title">Hotels</h2>
                    <p className="section-text">Experience luxury beyond imagination at our exquisite hotel. Indulge in unparalleled comfort, impeccable service, and breathtaking views. Your dream getaway awaits!</p>
                    <br/>
                    {hotels.length === 0 && (
                            <div className="centeredMessage">
                                <h3 style={{color:"#8bbe1b"}}>No Hotels are available in this destination at present to book.</h3>
                                <h6>Sorry, no hotels are currently available to book and plan your stay here.</h6>
                                <button onClick={() => navigate('/UserDash')} className={styles.button}>Click here..To go back to Search for a diffrent destination to plan your stay.</button>
                            </div>
                        )}
                    {hotels.map((hotel) => (
                        <div key={hotel.id}>
                            <ul className="package1-list">
                                <li>
                                    <div className="package1-card">
                                        <figure className="card-banner1">
                                            {['png', 'jpeg', 'gif','webp', 'jpg'].map((format) => (
                                                <img
                                                    key={format}
                                                    src={`/HotelImages/${hotel.hotelId}.${format}`}
                                                    alt={hotel.name}
                                                    onError={(e) => { e.target.style.display = 'none'; }}
                                                    onClick={() => {
                                                        sessionStorage.setItem('hotelId', hotel.hotelId);
                                                        sessionStorage.setItem('hotelName', hotel.name);
                                                        navigate('/hotelimages');
                                                    }}
                                                />
                                            ))}
                                        </figure>

                                        <div className="card-content1">
                                            <h3 className="h3 card-title" onClick={() => handleBookNow(hotel.hotelId, hotel.name)}>{hotel.name}</h3>
                                            <h4 className="h6 card-title" style={{ color: "#8bbe1b" }}>{hotel.description}</h4>
                                            <h4 className="h6 card-title">Hotel Amenities</h4>
                                            <ul className="amenities-list">
                                                <li><ion-icon name="wifi"></ion-icon> Wifi</li>
                                                <li><ion-icon name="water"></ion-icon> Swimming Pool</li>
                                                <li><ion-icon name="restaurant"></ion-icon> Restaurants</li>
                                                <li><ion-icon name="bed"></ion-icon> Comfortable Beds</li>
                                                <li><ion-icon name="tv"></ion-icon> Television</li>
                                                <li><ion-icon name="water"></ion-icon> AC</li>
                                            </ul>
                                            <ul className="card-meta-list">
                                                <li className="card-meta-item"><div className="meta-box"><ion-icon name="time"></ion-icon>12PM/10AM</div></li>
                                                <li className="card-meta-item"><div className="meta-box"><ion-icon name="people"></ion-icon>Cherished Patrons: 10</div></li>
                                                <li className="card-meta-item"><div className="meta-box"><ion-icon name="location"></ion-icon>{hotel.address}</div></li>
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
                                            <h6 style={{ color: "white", marginTop: "30px", marginBottom: "-10px" }}>CheckOut Our Reviews</h6>
                                            <button
                                                className="btn btn-secondary3"
                                                style={{ margin: "20px 0 30px", padding: "10px", borderRadius: "10PX", borderColor: "black" }}
                                                onMouseEnter={() => sessionStorage.setItem('hotelId', hotel.hotelId)}
                                                onMouseLeave={() => sessionStorage.removeItem('hotelId')}
                                                onClick={() => navigate('/hotelReviews')}
                                            >
                                                Here
                                            </button><br />

                                            <button className="btn btn-secondary3" onClick={() => handleBookNow(hotel.hotelId, hotel.name)}>Book Now</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Hotels;
