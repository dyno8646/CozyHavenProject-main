import React, { useEffect, useState } from 'react';
import styles from '../ManageBooking/BookingHistory.css'
import { useNavigate } from 'react-router-dom';

function BookingHistory() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const searchTable = () => {
    const tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach((row, i) => {
      let rowData = row.textContent.toLowerCase();
      let searchData = searchValue.toLowerCase();
      row.classList.toggle('hide', rowData.indexOf(searchData) < 0);
      row.style.setProperty('--delay', i / 25 + 's');
    });

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visibleRow, i) => {
      visibleRow.style.backgroundColor = i % 2 === 0 ? 'transparent' : '#0000000b';
    });
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    searchTable();
  };

  useEffect(() => {
    const tableHeadings = document.querySelectorAll('thead th');

    tableHeadings.forEach((head, i) => {
      let sortAsc = true;
      head.onclick = () => {
        tableHeadings.forEach((head) => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach((td) => td.classList.remove('active'));
        const tableRows = [...document.querySelectorAll('tbody tr')];
        tableRows.forEach((row) => {
          row.querySelectorAll('td')[i].classList.add('active');
        });

        head.classList.toggle('asc', sortAsc);
        sortAsc = head.classList.contains('asc') ? false : true;

        sortTable(i, sortAsc);
      };
    });
  }, []);

  function sortTable(column, sortAsc) {
    const tableRows = [...document.querySelectorAll('tbody tr')];
    const sortedRows = tableRows.sort((a, b) => {
      let firstRow = a.querySelectorAll('td')[column].textContent.toLowerCase();
      let secondRow = b.querySelectorAll('td')[column].textContent.toLowerCase();
      return sortAsc ? (firstRow < secondRow ? 1 : -1) : firstRow < secondRow ? -1 : 1;
    });
    sortedRows.forEach((sortedRow) => document.querySelector('tbody').appendChild(sortedRow));
  }


  useEffect(() => {
    const username = sessionStorage.getItem('username');
    if (username) {
      fetch(`http://localhost:5272/api/User/userbookings/${username}`)
        .then(response => response.json())
        .then(data => {
          const bookingsWithDuration = data.map(booking => ({
            ...booking,
            duration: calculateDuration(booking.checkInDate, booking.checkOutDate)
          }));
          setBookings(bookingsWithDuration);
        })
        .catch(error => console.error('Error fetching bookings:', error));
    }
  }, []);

  const calculateDuration = (checkInDate, checkOutDate) => {
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const diffInMilliseconds = endDate - startDate;
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return `${days} days`;
  };
  const formatBookingDate = (bookingDate) => {
    const date = new Date(bookingDate);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isCompleted = (checkoutDate, status) => {
    const today = new Date();
    const checkout = new Date(checkoutDate);
    return checkout < today && (status && status.toLowerCase() !== 'cancelled'  && status.toLowerCase() !== 'refunded');
  };


  const handleReschedule = (bookingId, checkInDate, checkOutDate, adults, children) => {
    // Get the timezone offset in minutes
    const timezoneOffset = new Date().getTimezoneOffset();

    // Adjust the checkInDate and checkOutDate by adding the timezone offset in minutes
    const adjustedCheckInDate = new Date(checkInDate);
    adjustedCheckInDate.setMinutes(adjustedCheckInDate.getMinutes() - timezoneOffset);

    const adjustedCheckOutDate = new Date(checkOutDate);
    adjustedCheckOutDate.setMinutes(adjustedCheckOutDate.getMinutes() - timezoneOffset);

    // Convert adjusted checkInDate and checkOutDate to yyyy-mm-dd format
    const formattedCheckInDate = adjustedCheckInDate.toISOString().split('T')[0];
    const formattedCheckOutDate = adjustedCheckOutDate.toISOString().split('T')[0];

    // Store the formatted dates and bookingId in sessionStorage
    sessionStorage.setItem('bookingId', bookingId);
    sessionStorage.setItem('checkIn', formattedCheckInDate);
    sessionStorage.setItem('checkOut', formattedCheckOutDate);

    // Update session storage with adults and children data
    sessionStorage.setItem('adults', adults);
    sessionStorage.setItem('children', children);

    // Navigate to the reschedule page
    navigate('/reschedule');
  };


  const [refresh, setRefresh] = useState(false);
  const handleCancel = (bookingId) => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this booking?');
    if (confirmCancel) {
      sessionStorage.setItem('bookingToCancel', bookingId);
      const bookingToDelete = sessionStorage.getItem('bookingToCancel');
      fetch(`http://localhost:5272/api/Booking/CancelBooking/${bookingToDelete}`, {
        method: 'PUT'
      })
        .then(response => {
          if (response.ok) {
            alert('Booking successfully cancelled. Please refresh the page or fetch updated bookings data.');
            window.location.reload();
            setRefresh(!refresh);
            console.log('Booking successfully cancelled.');
            sessionStorage.removeItem('bookingToCancel');
            setBookings(prevBookings => prevBookings.filter(booking => booking.bookingId !== bookingToDelete));
          } else {
            console.error('Failed to cancel booking.');
          }
        })
        .catch(error => console.error('Error cancelling booking:', error));
    }
  };

  const handleRefundRequest = (bookingId) => {
    const confirmRefundRequest = window.confirm('Are you sure you want to request a refund for this booking?');
    if (confirmRefundRequest) {
      // Simulate sending refund request
      setTimeout(() => {
        alert('Refund request sent successfully.');
        setTimeout(() => {
          alert('Refund is initiated.');
          // Update status to "Cancelled and Refunded"
          const updatedBookings = bookings.map(booking => {
            if (booking.bookingId === bookingId) {
              return { ...booking, status: 'UnderProcess' };
            } else {
              return booking;
            }
          });
          setBookings(updatedBookings);
        }, 2000);
      }, 1000); 
    }
  };

  const isOptionAvailable = (booking) => {
    const checkInDate = new Date(booking.checkInDate);
    const currentTime = new Date();

    const twoHoursInMillis = 2 * 60 * 60 * 1000;


    if (booking.status.toLowerCase() !== 'cancelled' && booking.status.toLowerCase() !== 'underprocess' ) {
      return checkInDate - currentTime > twoHoursInMillis;
    } else {
      return false;
    }
  };

  

  return (

    <div className={styles} id="/bookingHistory">
      <div className='body3'>
        <div className="table" id="customers_table">
          <section className="table__header">
            <h3 style={{marginBottom:"-10px"}}><img src="images/doctor.png" alt="Doctor" className="doctor_image" />{sessionStorage.getItem('username').toUpperCase()}'s Bookings</h3>
            <div className="input-group5">
              <input type="search" placeholder="Search Data..." value={searchValue} onChange={handleSearchChange}/>
              <img src="images/search.png" alt="" />
            </div>
            <button className="bttn" style={{ marginTop: "10px", marginRight: "5px", position: "center", width: "10%", height: "30px", borderRadius: "20px" }} type="button" onClick={() => navigate('/UserDash')}>Go Back</button>
            <div className="export__file">
              <label htmlFor="export-file" className="export__file-btn" title="Export File" />
              <input type="checkbox" id="export-file" />
              <div className="export__file-options">
                <label>Export As &nbsp; ➜</label>
                <label htmlFor="export-file" id="toPDF">PDF <img src="images/pdf.png" alt="" /></label>
              </div>
            </div>
          </section>


          <section className="table__body">
            <table>
              <thead>
                <tr>
                  <th onClick={() => sortTable(0, true)}> Id <span className="icon-arrow">↑</span></th>
                  <th onClick={() => sortTable(1, true)}> Hotel <span className="icon-arrow">↑</span></th>
                  <th> Room Type <span className="icon-arrow">↑</span></th>
                  <th> Booking Date <span className="icon-arrow">↑</span></th>
                  <th style={{marginLeft:"35px"}}> Status <span className="icon-arrow">↑</span></th>
                  <th> CkeckIn - CheckOut <span className="icon-arrow">↑</span></th>
                  <th> Duration <span className="icon-arrow">↑</span></th>
                  <th> Amount <span className="icon-arrow">↑</span></th>
                  <th className="newth" style={{ color: 'black' }}> Rechedule or Cancel   /Refund/AddReview</th>
                  
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr key={booking.bookingId}>
                    <td>{booking.bookingId}</td>
                    <td>{booking.hotelName.toUpperCase()}</td>
                    <td>{booking.roomType.toUpperCase()}</td>
                    <td>{formatBookingDate(booking.bookedDate)}</td>
                    <td>
                      <p className={`status ${booking.status.toLowerCase()}`}>{booking.status.toUpperCase()}</p>
                    </td>
                    <td>{new Date(booking.checkInDate).toLocaleDateString()}-{new Date(booking.checkOutDate).toLocaleDateString()}</td>
                    <td>{booking.duration}</td>
                    <td>₹{booking.totalPrice}</td>
                    {isCompleted(booking.checkOutDate, booking.status) && (
                      <td>
                        <button
                          className="bttn2"
                          style={{ marginTop: "10px", marginRight: "5px", position: "center", width: "80%", height: "30px" }}
                          type="button"
                          onClick={() => {
                            sessionStorage.setItem('reviewRoomId', booking.roomId);
                            sessionStorage.setItem('reviewRoomType', booking.roomType);
                            
                            navigate('/addreview');
                          }}
                        >
                          AddReview
                        </button>
                      </td>
                    )}
                    {isOptionAvailable(booking) && (
                      <td>
                        <button className="bttn" style={{ marginTop: "10px", marginRight: "5px", position: "center", width: "80%", height: "30px" }} type="button" onClick={() => handleReschedule(booking.bookingId, booking.checkInDate, booking.checkOutDate, booking.adults, booking.children)}>Reschedule</button>
                        <button className="bttn" style={{ marginTop: "10px", backgroundColor: "red", position: "center", width: "80%", height: "30px" }} type="button" onClick={() => handleCancel(booking.bookingId)}>Cancel</button>
                      </td>
                    )}

                    {booking.status.toLowerCase() === 'cancelled' && (
                      <td>
                        <button
                          className="bttn1"
                          style={{ marginTop: "10px", marginRight: "5px", position: "center", width: "80%", height: "30px" }}
                          type="button"
                          onClick={() => handleRefundRequest(booking.bookingId)}
                        >
                          Refund
                        </button>
                      </td>
                    )}


                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

      </div>

    </div>
  )
}

export default BookingHistory