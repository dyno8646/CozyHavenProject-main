// import React from 'react'

// function AddBooking() {
//   return (
//     <div className="page-wrapper">
//   <div className="content container-fluid">
//     <div className="page-header">
//       <div className="row align-items-center">
//         <div className="col">
//           <h3 className="page-title mt-5">Add Booking</h3> </div>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-lg-12">
//         <form>
//           <div className="row formtype">
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Booking ID</label>
//                 <input className="form-control" type="text" defaultValue="BKG-0001" /> </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Name</label>
//                 <select className="form-control" id="sel1" name="sellist1">
//                   <option>Select</option>
//                   <option>Jennifer Robinson</option>
//                   <option>Terry Baker</option>
//                 </select>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Room Type</label>
//                 <select className="form-control" id="sel2" name="sellist1">
//                   <option>Select</option>
//                   <option>Single</option>
//                   <option>Double</option>
//                   <option>Quad</option>
//                   <option>King</option>
//                   <option>Suite</option>
//                   <option>Villa</option>
//                 </select>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Total Members</label>
//                 <select className="form-control" id="sel3" name="sellist1">
//                   <option>Select</option>
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                   <option>4</option>
//                   <option>5</option>
//                 </select>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Date</label>
//                 <div className="cal-icon">
//                   <input type="text" className="form-control datetimepicker" /> </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Time</label>
//                 <div className="time-icon">
//                   <input type="text" className="form-control" id="datetimepicker3" /> </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Arrival Date</label>
//                 <div className="cal-icon">
//                   <input type="text" className="form-control datetimepicker" /> </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Depature Date</label>
//                 <div className="cal-icon">
//                   <input type="text" className="form-control datetimepicker" /> </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Email ID</label>
//                 <input type="text" className="form-control" id="usr" /> </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Phone Number</label>
//                 <input type="text" className="form-control" id="usr1" /> </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>File Upload</label>
//                 <div className="custom-file mb-3">
//                   <input type="file" className="custom-file-input" id="customFile" name="filename" />
//                   <label className="custom-file-label" htmlFor="customFile">Choose file</label>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Message</label>
//                 <textarea className="form-control" rows={5} id="comment" name="text" defaultValue={""} />
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//     <button type="button" className="btn btn-primary buttonedit1">Create Booking</button>
//   </div>
// </div>

//   )
// }

// export default AddBooking
import React, { useState, useEffect } from "react";

function AddBooking() {
  const [bookingData, setBookingData] = useState({
    userId: 0,
    roomId: 0,
    checkInDate: '',
    checkOutDate: '',
    adults: 0,
    children: 0,
    totalPrice: 0,
    status: "Booked", // Default status
    bookedDate: new Date().toISOString().slice(0, 10), // Default booked date
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Handle date inputs separately
    if (name === 'checkInDate' || name === 'checkOutDate') {
      // Ensure that value is a valid date string or empty string
      if (value === '' || Date.parse(value)) {
        setBookingData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setBookingData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  useEffect(() => {
    const calculateTotalPrice = async () => {
      console.log("roomId",bookingData.roomId);
      console.log("checkindate",bookingData.checkInDate);
      console.log("checkoutdate",bookingData.checkOutDate);
      console.log("adults",bookingData.adults);
      console.log("children",bookingData.children);
      try {
        const response = await fetch(
          "http://localhost:5272/api/Booking/CalculateTotalPrice",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              roomId: bookingData.roomId,
              checkInDate: bookingData.checkInDate,
              checkOutDate: bookingData.checkOutDate,
              adults: bookingData.adults,
              children: bookingData.children,
            }),
          }
        );
        const data = await response.json();
          console.log("Total price calculated:", data);
          setBookingData((prevData) => ({
          ...prevData,
          totalPrice: data,
          }));
        
        
      } catch (error) {
        console.error("Error calculating total price:", error);
      }
    };

    if (bookingData.roomId && bookingData.checkInDate && bookingData.checkOutDate && bookingData.adults && bookingData.children) {
      calculateTotalPrice();
    }
  }, [bookingData.roomId,
    bookingData.checkInDate,
    bookingData.checkOutDate,
    bookingData.adults,
    bookingData.children,]);


  const username = sessionStorage.getItem("username");

  const handleSubmit = () => {
    const newErrors = {};
    if (!bookingData.roomId) {
      newErrors.roomId = "Room ID is required";
    }
    if (!bookingData.checkInDate) {
      newErrors.checkInDate = "Check-in date is required";
    }
    if (!bookingData.checkOutDate) {
      newErrors.checkOutDate = "Check-out date is required";
    }
    if (!bookingData.adults) {
      newErrors.adults = "Number of adults is required";
    }
    if (!bookingData.children) {
      newErrors.children = "Number of children is required";
    }

    // Set errors and prevent submission if there are validation errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Send a POST request to the server with bookingData
    fetch(`http://localhost:5272/api/Booking/AddBooking?username=${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Booking created:", data);
        setBookingData({
          userId: 0,
    roomId: 0,
    checkInDate: '',
    checkOutDate: '',
    adults: 0,
    children: 0,
    totalPrice: 0,
    status: "Booked", // Default status
    bookedDate: new Date().toISOString().slice(0, 10),
        }

        )
        alert("Booking created successfully!");
        // Optionally, you can redirect the user to a different page or show a success message
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
        alert("Booking is already done for the specified dates.Please choose other dates");
        // Handle error
      });
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Add Booking</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form>
              <div className="row formtype">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>User ID</label>
                    <input
                      className="form-control"
                      type="number"
                      name="userId"
                      value={bookingData.userId}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Room ID</label>
                    <input
                      className="form-control"
                      type="number"
                      name="roomId"
                      value={bookingData.roomId}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Check-In Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="checkInDate"
                      value={bookingData.checkInDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Check-Out Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="checkOutDate"
                      value={bookingData.checkOutDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Adults</label>
                    <input
                      type="number"
                      className="form-control"
                      name="adults"
                      value={bookingData.adults}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Children</label>
                    <input
                      type="number"
                      className="form-control"
                      name="children"
                      value={bookingData.children}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Total Price</label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      name="totalPrice"
                      value={bookingData.totalPrice}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      className="form-control"
                      name="status"
                      value={bookingData.status}
                      onChange={handleChange}
                    >
                      <option value="Active">Booked</option>
                      <option value="CheckedIn">CheckedIn</option>
                      <option value="CheckedOut">CheckedOut</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Booked Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="bookedDate"
                      value={bookingData.bookedDate}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary buttonedit1"
          onClick={handleSubmit}
        >
          Create Booking
        </button>
      </div>
    </div>
  );
}

export default AddBooking;
