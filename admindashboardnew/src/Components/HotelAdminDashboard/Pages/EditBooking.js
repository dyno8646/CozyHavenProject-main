// import React from 'react'

// function EditBooking() {
//   return (
//    <div className="page-wrapper">
//   <div className="content container-fluid">
//     <div className="page-header">
//       <div className="row align-items-center">
//         <div className="col">
//           <h3 className="page-title mt-5">Edit Booking</h3>
//         </div>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-lg-12">
//         <form>
//           <div className="row formtype">
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Booking ID</label>
//                 <input className="form-control" type="text" defaultValue="BKG-0001" />
//               </div>
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
//                   <input type="text" className="form-control datetimepicker" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Time</label>
//                 <div className="time-icon">
//                   <input type="text" className="form-control" id="datetimepicker3" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Arrival Date</label>
//                 <div className="cal-icon">
//                   <input type="text" className="form-control datetimepicker" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Depature Date</label>
//                 <div className="cal-icon">
//                   <input type="text" className="form-control datetimepicker" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Email ID</label>
//                 <input type="text" className="form-control" id="usr" />
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="form-group">
//                 <label>Phone Number</label>
//                 <input type="text" className="form-control" id="usr1" />
//               </div>
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
//     <button type="button" className="btn btn-primary buttonedit">Save</button>
//   </div>
// </div>

//   )
// }

// export default EditBooking
// import React from 'react';

// function EditBooking() {
//   return (
//     <div className="page-wrapper">
//       <div className="content container-fluid">
//         <div className="page-header">
//           <div className="row align-items-center">
//             <div className="col">
//               <h3 className="page-title mt-5">Edit Booking</h3>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-12">
//             <form>
//               <div className="row formtype">
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Booking ID</label>
//                     <input className="form-control" type="text" name="bookingId" />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>User ID</label>
//                     <input className="form-control" type="text" name="userId" />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Room ID</label>
//                     <input className="form-control" type="text" name="roomId" />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Check-In Date</label>
//                     <input type="date" className="form-control" name="checkInDate" />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Check-Out Date</label>
//                     <input type="date" className="form-control" name="checkOutDate" />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Adults</label>
//                     <input type="number" className="form-control" name="totalMembers" />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Children</label>
//                     <input type="number" className="form-control" name="totalMembers" />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Status</label>
//                     <select className="form-control" name="status">
//                       <option>Booked</option>
//                       <option>CheckedIn</option>
//                       <option>CheckedOut</option>
//                       <option>Cancelled</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Booked Date</label>
//                     <input type="date" className="form-control" name="bookedDate" />
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <button type="button" className="btn btn-primary buttonedit">Save</button>
//       </div>
//     </div>
//   );
// }

// export default EditBooking;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditBooking() {
  const { bookingId } = useParams();
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
  useEffect(() => {
    fetch(`http://localhost:5272/api/Booking/GetById?id=${bookingId}`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = {
          ...data,
          checkInDate: new Date(data.checkInDate).toISOString().split('T')[0],
          checkOutDate: new Date(data.checkOutDate).toISOString().split('T')[0],
          bookedDate: new Date(data.bookedDate).toISOString().split('T')[0]
        };
        setBookingData(formattedData);
      })
      .catch((error) => console.error('Error fetching booking details:', error));
  }, [bookingId]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    fetch(`http://localhost:5272/api/Booking/UpdateBooking/${bookingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Booking updated:', data);
        // Redirect or show a success message
      })
      .catch((error) => console.error('Error updating booking:', error));
  };
  

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Edit Booking</h3>
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
                    <input className="form-control" type="text" name="userId" value={bookingData.userId} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Room ID</label>
                    <input className="form-control" type="text" name="roomId" value={bookingData.roomId} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Check-In Date</label>
                    <input type="date" className="form-control" name="checkInDate" value={bookingData.checkInDate} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Check-Out Date</label>
                    <input type="date" className="form-control" name="checkOutDate" value={bookingData.checkOutDate} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Adults</label>
                    <input type="number" className="form-control" name="adults" value={bookingData.adults} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Children</label>
                    <input type="number" className="form-control" name="children" value={bookingData.children} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Total Price</label>
                    <input type="number" className="form-control" name="totalPrice" value={bookingData.totalPrice} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Status</label>
                    <select className="form-control" name="status" value={bookingData.status} onChange={handleChange}>
                      <option>Booked</option>
                      <option>CheckedIn</option>
                      <option>CheckedOut</option>
                      <option>Cancelled</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Booked Date</label>
                    <input type="date" className="form-control" name="bookedDate" value={bookingData.bookedDate} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <button type="button" className="btn btn-primary buttonedit" onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}

export default EditBooking;
