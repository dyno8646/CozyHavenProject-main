import React, { useEffect,useState } from 'react';
import styles from '../Payments/Payment2.css';
import { useNavigate } from 'react-router-dom';

function Payment2() {
    const [profilePic, setProfilePic] = useState('');
    const [username, setUsername] = useState('');
    const navigate=useNavigate();
    useEffect(() => {
        const section = document.querySelector("section"),
            overlay = document.querySelector(".overlay3"),
            showBtn = document.querySelector(".show-modal"),
            closeBtn = document.querySelector(".close-btn2");

        showBtn.addEventListener("click", () => section.classList.add("active"));
        overlay.addEventListener("click", () => section.classList.remove("active"));
        closeBtn.addEventListener("click", () => section.classList.remove("active"));

        // Cleanup function to remove event listeners when component unmounts
        return () => {
            showBtn.removeEventListener("click", () => section.classList.add("active"));
            overlay.removeEventListener("click", () => section.classList.remove("active"));
            closeBtn.removeEventListener("click", () => section.classList.remove("active"));
        };
    }, []);
    useEffect(() => {
        // Retrieve profile picture and username from session storage
        const storedProfilePic = sessionStorage.getItem('profilePic');
        const storedUsername = sessionStorage.getItem('username');

        // Update state with retrieved values
        setProfilePic(storedProfilePic);
        setUsername(storedUsername);
    }, []);
    useEffect(() => {
        // Retrieve profile picture and username from session storage
        const storedProfilePic = sessionStorage.getItem('profilePic');
        const storedUsername = sessionStorage.getItem('username');

        // Update state with retrieved values
        setProfilePic(storedProfilePic);
        setUsername(storedUsername);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const bookingData = {
            userId: parseInt(sessionStorage.getItem('userId')),
            roomId: parseInt(sessionStorage.getItem('roomId')),
            checkInDate: sessionStorage.getItem('checkIn'),
            checkOutDate: sessionStorage.getItem('checkOut'),
            adults: parseInt(sessionStorage.getItem('adults')),
            children: parseInt(sessionStorage.getItem('children')),
            //totalPrice: parseFloat(sessionStorage.getItem('totalPrice')),
            status: '' // Replace 'string' with the actual status value
        };

        fetch(`http://localhost:5272/api/Booking/AddBooking?username=${sessionStorage.getItem('username')}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error adding booking');
                }
            })
            .catch(error => {
                console.error('Error adding booking:', error.message);
            });
    };

    return (
        <div>
        <div className='bodyy' id='/payment2'>
            <div className={styles}>
                <section className="payment_section">
                    <button className="show-modal" onClick={handleSubmit} >Pay on arrival</button>
                    <span className="overlay3" />
                    <div className="modal-box">
                        <div className="profile-text" style={{ marginLeft: "-140px" }}>
                            <img src="/images/girl.png" alt />
                            <div className="text4">
                                <span className="name4" style={{ color: "black", marginLeft: "10px", fontSize: "20px" }}>{username.toUpperCase()}</span>
                            </div>
                        </div>
                        <hr style={{ width: '100%', padding: "0.7px", margin: '0 0 30px 0', color: "black" }} />
                        <i className="fa-regular fa-circle-check" />
                        <h2>Completed</h2>
                        <h3>You have successfully booked your room.</h3>
                        <div className="buttons">
                            <button className="close-btn2" onClick={()=>navigate('/UserDash')}>Ok, Close</button>
                            <button>Open File</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        
        
        </div>
    )
}

export default Payment2;