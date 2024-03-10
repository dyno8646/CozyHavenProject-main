import React, { useState, useEffect } from 'react';
import styles from '../Bookings/Booking.css';
import { useNavigate } from 'react-router-dom';

function Booking() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [checkIn, setCheckin] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [duration, setDuration] = useState(1); 
  const [editMode, setEditMode] = useState({
    username: false,
    checkIn: false,
    checkOut: false,
  });

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    const storedCheckin = sessionStorage.getItem('checkIn');
    const storedCheckout = sessionStorage.getItem('checkOut');

    if (storedUsername) setUsername(storedUsername);
    if (storedCheckin) setCheckin(storedCheckin);
    if (storedCheckout) setCheckOut(storedCheckout);

    if (storedCheckin && storedCheckout) {
      const diffInMs = new Date(storedCheckout) - new Date(storedCheckin);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // Convert milliseconds to days
      setDuration(Math.ceil(diffInDays)); // Round up to the nearest whole number
    }
  }, []);

  const toggleEditMode = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submission logic here
  };
  const handleCheckInBlur = () => {
    if (checkIn === checkOut) {
        alert('Check-out date must be different from the check-in date.');
        // Reset check-out date to empty string or default value
        setCheckOut('');
    }
};

const handleCheckOutBlur = () => {
    if (checkOut === checkIn) {
        alert('Check-out date must be different from the check-in date.');
        // Reset check-out date to empty string or default value
        setCheckOut('');
    }
};

  const handleCheckInChange = (e) => {
    const value = e.target.value;
    setCheckin(value);
    sessionStorage.setItem('checkIn', value);
  };

  const handleCheckOutChange = (e) => {
    const value = e.target.value;
    setCheckOut(value);
    sessionStorage.setItem('checkOut', value);
  };
  const rescheduleBooking = async () => {
    const bookingId = sessionStorage.getItem('bookingId');
    console.log('Booking ID:', bookingId);
  
    if (bookingId) {
      try {
        const requestData = {
          checkInDate: checkIn + 'T00:00:00.000Z', // Add the time portion
          checkOutDate: checkOut + 'T00:00:00.000Z',
          status: '', 
        };
        console.log('Request Data:', requestData);

        // Calculate new duration between check-in and check-out dates
        const newDiffInMs = new Date(checkOut) - new Date(checkIn);
        const newDiffInDays = newDiffInMs / (1000 * 60 * 60 * 24); // Convert milliseconds to days
        const newDuration = Math.ceil(newDiffInDays); // Round up to the nearest whole number
        

        // Check if new duration is equal to original duration
        if (newDuration !== duration) {
          alert('You can only reschedule for the same duration as the original booking.');
          return;
        }

        const response = await fetch(`http://localhost:5272/api/Booking/RescheduleBooking/${bookingId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (response.ok) {
          const updatedBooking = await response.json();
          console.log('Updated Booking:', updatedBooking);
          alert('Booking rescheduled successfully!');
          navigate('/bookingHistory');
        } else {
          const errorMessage = await response.text();
          console.error('Failed to reschedule booking:', errorMessage);
          alert('Failed to reschedule booking. Room is not available for the specified dates');
        }
      } catch (error) {
        console.error('Error rescheduling booking:', error);
        alert('An error occurred while rescheduling the booking.');
      }
    } else {
      console.error('No booking ID found in session storage');
      alert('No booking ID found. Unable to reschedule.');
    }
  };
  


  return (
    <div>
    <div className={styles}id="/reschedule">
      <div className="body2" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>


        <div className="container635">
          <div className='heading'>Reshedule Here</div>
          <form onSubmit={handleSubmit} className="form3">
            <div className="scrollable-form">
            <div className="input-box2">
                <label>Username</label>
                <input type="text" placeholder="Enter full name" value={username} readOnly={!editMode.username} onChange={(e) => setUsername(e.target.value)} required /> 
              </div>
              <div className="column3">
              <div className="input-box2">
                  <label>Check-In</label>
                  <input type="date" placeholder="Enter CheckIn date" value={checkIn} min={new Date().toISOString().split('T')[0]} onBlur={handleCheckInBlur}  readOnly={!editMode.checkIn}  onChange={handleCheckInChange}required />
                  {!editMode.checkIn && <button style={{marginTop:"10px",borderRadius:'30px',position:"center",width:"40%",height: "30px"}} type="button" onClick={() => toggleEditMode('checkIn')}>Edit</button>}
                </div>
                <div className="input-box2">
                  <label>Check-Out</label>
                  <input type="date" placeholder="Enter CheckOut date" value={checkOut} min={checkIn} readOnly={!editMode.checkOut} onChange={handleCheckOutChange} onBlur={handleCheckOutBlur} required />
                  {!editMode.checkOut && <button style={{marginTop:"10px",borderRadius:'30px',position:"center",width:"40%",height: "30px"}}type="button" onClick={() => toggleEditMode('checkOut')}>Edit</button>}
                </div>
              </div>
              
              
              
            </div>
            
            <button style={{ borderRadius: '30px', backgroundColor:"#8bbe1b" }} onClick={() => {rescheduleBooking();}}>Confirm Reshedule</button>
            <button style={{ borderRadius: '30px', backgroundColor:"red" }} onClick={() => navigate('/bookingHistory')}>Cancel Reshedule</button>
          </form>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Booking