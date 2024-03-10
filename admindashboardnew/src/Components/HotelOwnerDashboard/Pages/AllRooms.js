import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllRooms() {
  const [rooms, setRooms] = useState([]);
  const hotelid=sessionStorage.getItem('selectedHotelId')

  useEffect(() => {
    fetch(`http://localhost:5272/api/Hotel/GetRoomsByHotelId?hotelId=${hotelid}`)
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, [hotelid]);
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }
  
      fetch(`http://localhost:5272/api/Room/DeleteRoom?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setRooms(rooms.filter((room) => room.roomId !== id));
            alert("Deleted Successfully")
          } else {
            console.error('Failed to delete room');
            alert("Failed to delete")
          }
        })
        .catch((error) => console.error('Error deleting room:', error));
    }
  };
  

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Rooms</h3>
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
                        <th>Room ID</th>
                        <th>Hotel ID</th>
                        <th>Room Size</th>
                        <th>Room Type</th>
                        <th>Bed Type</th>
                        <th>BaseFare</th>
                        <th>Max Occupancy</th>
                        <th>AC</th>
                        <th>Available</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rooms.map((room) => (
                        <tr key={room.roomId}>
                          <td>{room.roomId}</td>
                          <td>{room.hotelId}</td>
                          <td>{room.roomSize}</td>
                          <td>{room.roomType}</td>
                          <td>{room.bedType}</td>
                          <td>{room.baseFare}</td>
                          <td>{room.maxOccupancy}</td>
                          <td>{room.ac ? 'Yes' : 'No'}</td>
                          <td>{room.available ? 'Yes' : 'No'}</td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                              <i className="fas fa-ellipsis-v ellipse_color" />
                              </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                            <Link to={`edit-room/${room.roomId}`} className="dropdown-item"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                            <Link to="#" className="dropdown-item" onClick={() => handleDelete(room.roomId)}>
                            <i className="fas fa-trash-alt m-r-5" /> Delete
                            </Link>
                            </div>
                            </div>
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

export default AllRooms;
