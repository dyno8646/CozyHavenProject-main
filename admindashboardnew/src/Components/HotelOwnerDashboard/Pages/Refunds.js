import React, { useState, useEffect } from 'react';

function Refunds() {
        const [cancelledBookings, setCancelledBookings] = useState([]);
        const hotelId=sessionStorage.getItem('selectedHotelId')
        useEffect(() => {
          // Fetch cancelled bookings
          fetch(`http://localhost:5272/api/Booking/Cancelledbookings?hotelId=${hotelId}`)
            .then((response) => response.json())
            .then((data) => setCancelledBookings(data))
            .catch((error) => console.error('Error fetching cancelled bookings:', error));
        }, [hotelId]);
      
        // const handleRefund = (userId,totalprice,bookingId) => {
        //   // Send refund request to backend
        //   fetch(`http://localhost:5272/api/Payment/Refund/${userId}/${totalprice}`, {
        //     method: 'POST',
        //   })
        //   .then((response) => {
        //     if (response.ok) {
        //       console.log('Refund success: Refund successful');
        //       setCancelledBookings(cancelledBookings.filter((booking) => booking.bookingId !== bookingId));
        //     } else {
        //       console.error('Error refunding booking:', response.statusText);
        //     }
        //   })
        //   .catch((error) => console.error('Error refunding booking:', error));
        // };
        const handleRefund = (userId, totalprice, bookingId) => {
            // Send refund request to backend
            fetch(`http://localhost:5272/api/Payment/Refund/${userId}/${totalprice}`, {
              method: 'POST',
            })
            .then((response) => {
              if (response.ok) {
                // Update the status of the booking to "Refunded"
                fetch(`http://localhost:5272/api/Booking/UpdateBookingStatus?id=${bookingId}&status=Refunded`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                .then((updateResponse) => {
                  if (updateResponse.ok) {
                    console.log('Refund success: Refund successful');
                    alert("Refund Succesfull")
                    setCancelledBookings(cancelledBookings.filter((booking) => booking.bookingId !== bookingId));
                  } else {
                    console.error('Error updating booking status:', updateResponse.statusText);
                  }
                })
                .catch((error) => console.error('Error updating booking status:', error));
              } else {
                console.error('Error refunding booking:', response.statusText);
              }
            })
            .catch((error) => console.error('Error refunding booking:', error));
          };
          
      
        return (
            <div className="page-wrapper">
            <div className="content container-fluid">
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="mt-5">
                      <h4 className="card-title float-left mt-2">Cancelled Bookings</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card card-table">
                    <div className="card-body booking_card">
                      <div className="table-responsive">
                        <table className="datatable table table-stripped table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Booking ID</th>
                              <th>User ID</th>
                              <th>Room ID</th>
                              <th>Check-in Date</th>
                              <th>Check-out Date</th>
                              <th>Adults</th>
                              <th>Children</th>
                              <th>Total Price</th>
                              <th>Status</th>
                              <th>Booked Date</th>
                              <th>Refund</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cancelledBookings.map((booking) => (
                              <tr key={booking.bookingId}>
                                <td>{booking.bookingId}</td>
                                <td>{booking.userId}</td>
                                <td>{booking.roomId}</td>
                                <td>{booking.checkInDate}</td>
                                <td>{booking.checkOutDate}</td>
                                <td>{booking.adults}</td>
                                <td>{booking.children}</td>
                                <td>{booking.totalPrice}</td>
                                <td>{booking.status}</td>
                                <td>{booking.bookedDate}</td>
                                <td>
                                  <button className="btn btn-primary" onClick={() => handleRefund(booking.userId,booking.totalPrice,booking.bookingId)}>Refund</button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
      
}

export default Refunds