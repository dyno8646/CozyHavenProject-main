import React, { useState, useEffect } from 'react';
import styles from '../Bookings/Booking.css';
import { useNavigate } from 'react-router-dom';

function Booking() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckin] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [price, setPrice] = useState(0);
  const [editMode, setEditMode] = useState({
    username: false,
    roomType: false,
    checkIn: false,
    checkOut: false,
    adults: false,
    children: false
  });
  const [isRoomAvailable, setIsRoomAvailable] = useState(false);

  useEffect(() => {
    fetchPrice();
    const storedUsername = sessionStorage.getItem('username');
    const storedFullname = sessionStorage.getItem('roomType');
    const storedCheckin = sessionStorage.getItem('checkIn');
    const storedCheckout = sessionStorage.getItem('checkOut');
    const storedAdults = sessionStorage.getItem('adults');
    const storedChildren = sessionStorage.getItem('children');

    if (storedUsername) setUsername(storedUsername);
    if (storedFullname) setRoomType(storedFullname);
    if (storedCheckin) setCheckin(storedCheckin);
    if (storedCheckout) setCheckOut(storedCheckout);
    if (storedAdults) setAdults(parseInt(storedAdults));
    if (storedChildren) setChildren(parseInt(storedChildren));

  }, []);
  useEffect(() => {
    // Fetch price whenever relevant fields change
    fetchPrice();
  }, [checkIn, checkOut, adults, children]);

  const toggleEditMode = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  const fetchPrice = async () => {
    try {
      const response = await fetch('http://localhost:5272/api/Booking/CalculateTotalPrice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: sessionStorage.getItem('userId'),
          roomId: sessionStorage.getItem('roomId'),
          hotelName: "",
          checkInDate: sessionStorage.getItem('checkIn'),
          checkOutDate: sessionStorage.getItem('checkOut'),
          adults: sessionStorage.getItem('adults'),
          children: sessionStorage.getItem('children'),
          roomType: sessionStorage.getItem('roomType'),
          status: ""
        })
      });
      const data = await response.json();
      console.log("API Response:", data);
      setPrice(data);
      console.log("totalprice:", data);
    } catch (error) {
      console.error('Error fetching price:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submission logic here
  };
  const handleAdultChange = (e) => {
    const value = parseInt(e.target.value);
    setAdults(value);
    sessionStorage.setItem('adults', value.toString());
  };

  const handleChildChange = (e) => {
    const value = parseInt(e.target.value);
    setChildren(value);
    sessionStorage.setItem('children', value.toString());
  };

  const handleCheckInChange = (e) => {
    const value = e.target.value;
    const currentDate = new Date().toISOString().split('T')[0]; // Get today's date
    if (value < currentDate) {
      alert("Check-in date must be today or later.");
      return; // Prevent setting invalid date
    }
    setCheckin(value);
    sessionStorage.setItem('checkIn', value);
  };

  const handleCheckOutChange = (e) => {
    const value = e.target.value;
    if (value <= checkIn) {
      alert("Check-out date must be later than check-in date.");
      return; // Prevent setting invalid date
    }
    setCheckOut(value);
    sessionStorage.setItem('checkOut', value);
  };

  const checkRoomAvailability = async () => {
    try {
        const roomId = sessionStorage.getItem('roomId');
        const checkInDate = sessionStorage.getItem('checkIn');
        const checkOutDate = sessionStorage.getItem('checkOut');
        const adults = sessionStorage.getItem('adults');
        const children = sessionStorage.getItem('children');

        // Check if any of the required fields is empty
        if (!checkInDate || !checkOutDate || !adults || !children) {
            alert("Please fill in all the required fields.");
            return; // Stop further execution
        }

        const response = await fetch(`http://localhost:5272/api/Booking/CheckAvailability?roomId=${roomId}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
        const data = await response.json();
        setIsRoomAvailable(data);

        if (!data) {
            alert("The room is not available for the selected dates.");
        } else {
            alert("The room is available!");
            navigate('/paymentPage');
        }
    } catch (error) {
        console.error('Error checking room availability:', error);
    }
};


  return (
    <div>
      <div className={styles}>
        <div className="body2" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>


          <div className="container635">
            <div className='heading'>Booking Form</div>
            <form onSubmit={handleSubmit} className="form3">
              <div className="scrollable-form">
                <div className="input-box2">
                  <label>Username</label>
                  <input type="text" placeholder="Enter full name" value={username} readOnly={!editMode.username} onChange={(e) => setUsername(e.target.value)} required />

                </div>
                <div className="input-box2">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter full name" required />
                </div>
                <div className="input-box2">
                  <label>Room Type</label>
                  <input type="text" value={roomType} readOnly={!editMode.roomType} onChange={(e) => setRoomType(e.target.value)} required />
                </div>
                <div className="column3">
                  <div className="input-box2">
                    <label>Check-In</label>
                    <input type="date" placeholder="Enter CheckIn date" value={checkIn} min={new Date().toISOString().split('T')[0]} readOnly={!editMode.checkIn} onChange={handleCheckInChange} required />
                    {!editMode.checkIn && <button style={{ marginTop: "10px", borderRadius: '30px', position: "center", width: "40%", height: "30px" }} type="button" onClick={() => toggleEditMode('checkIn')}>Edit</button>}
                  </div>
                  <div className="input-box2">
                    <label>Check-Out</label>
                    <input type="date" placeholder="Enter CheckOut date" value={checkOut} readOnly={!editMode.checkOut} min={checkIn} onChange={handleCheckOutChange} required />
                    {!editMode.checkOut && <button style={{ marginTop: "10px", borderRadius: '30px', position: "center", width: "40%", height: "30px" }} type="button" onClick={() => toggleEditMode('checkOut')}>Edit</button>}
                  </div>
                </div>
                <div className="column3">
                  <div className="input-box2">
                    <label>Adults</label>
                    <div className="select-box">
                      <select disabled={!editMode.adults} value={adults} onChange={handleAdultChange} required>
                        <option hidden disabled value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </div>
                    {!editMode.adults && <button style={{ marginTop: "10px", borderRadius: '30px', position: "center", width: "40%", height: "30px" }} type="button" onClick={() => toggleEditMode('adults')}>Edit</button>}
                  </div>
                  <div className="input-box2">
                    <label>Children</label>
                    <div className="select-box">
                      <select disabled={!editMode.children} value={children} onChange={handleChildChange} required>
                        <option >0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    {!editMode.children && <button style={{ marginTop: "10px", borderRadius: '30px', position: "center", width: "40%", height: "30px" }} type="button" onClick={() => toggleEditMode('children')}>Edit</button>}
                  </div>
                </div>
                <div className="input-box2">
                  <label>Phone Number</label>
                  <input type="number" placeholder="Enter phone number" required />
                </div>
                <br />
                <br />
                <hr style={{ width: '100%', margin: 'auto', color: '#031D44' }} />
                <br />

                {/* <div className="gender-box"> value={price}
                <h3>Gender</h3>
                <div className="gender-option">
                  <div className="gender">
                    <input type="radio" id="check-male" name="gender" defaultChecked />
                    <label htmlFor="check-male">male</label>
                  </div>
                  <div className="gender">
                    <input type="radio" id="check-female" name="gender" />
                    <label htmlFor="check-female">Female</label>
                  </div>
                  <div className="gender">
                    <input type="radio" id="check-other" name="gender" />
                    <label htmlFor="check-other">prefer not to say</label>
                  </div>
                </div>
              </div> */}
                {/* <div className="input-box2 address">
                <label>Address</label>
                <input type="text" placeholder="Enter street address" required />
                <input type="text" placeholder="Enter street address line 2" required />
                <div className="column3">
                  <div className="select-box">
                    <select>
                      <option hidden>Country</option>
                      <option>America</option>
                      <option>Japan</option>
                      <option>India</option>
                      <option>Nepal</option>
                    </select>
                  </div>
                  <input type="text" placeholder="Enter your city" required />
                </div>
                <div className="column3">
                  <input type="text" placeholder="Enter your region" required />
                  <input type="number" placeholder="Enter postal code" required />
                </div>
              </div> */}

              </div>
              <div className="input-box2">
                <label style={{ marginLeft: "50px" }}>Total Price</label>
                <input type="number" style={{ width: "50%", marginLeft: "50px" }} placeholder="Price" value={price} readOnly required />
              </div>
              <button style={{ borderRadius: '30px', backgroundColor: "#8bbe1b" }} onClick={checkRoomAvailability}>Proceed To Payment</button>
              <button style={{ borderRadius: '30px', backgroundColor: "red" }} onClick={() => navigate('/roompage')}>Cancel Booking</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Booking