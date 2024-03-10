import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function HotelBookings() {
  const [bookings, setBookings] = useState([]);
  const hotelid=sessionStorage.getItem('selectedHotelId');

  useEffect(() => {
    fetch(`http://localhost:5272/api/Booking/HotelBookings?hotelId=${hotelid}`)
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, [hotelid]);
  // const handleDelete = (id) => {
  //   fetch(`http://localhost:5272/api/Booking/DeleteBooking?id=${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         // Item deleted successfully, update state or close modal
  //         setBookings(bookings.filter(booking => booking.bookingId!== id));
  //         alert("Deleted Successfully")
  //       } else {
  //         console.error('Failed to delete booking');
  //         alert("Failed to Delete")
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error deleting booking:', error);
  //     });
  // };
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <div className="mt-5">
                <h4 className="card-title float-left mt-2">Bookings</h4>
                {/* <a
                  href="add-booking.html"
                  className="btn btn-primary float-right veiwbutton "
                >
                  Add Booking
                </a> */}
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
                        {/* <th className="text-right">Actions</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
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
                          {/* <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                              <i className="fas fa-ellipsis-v ellipse_color" />
                              </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                            <Link to="/edit-booking" className="dropdown-item"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                            <Link to="#" className="dropdown-item" onClick={() => handleDelete(booking.bookingId)}>
                            <i className="fas fa-trash-alt m-r-5" /> Delete
                            </Link>
                            </div>
                            </div>
                            </td> */}
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

export default HotelBookings;
