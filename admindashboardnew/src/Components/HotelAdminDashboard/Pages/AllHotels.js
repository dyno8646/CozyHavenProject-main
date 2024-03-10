import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllHotels() {
  // const [hotels, setHotels] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   fetch("http://localhost:5272/api/Hotel/GetAllHotels")
  //     .then((response) => response.json())
  //     .then((data) => setHotels(data))
  //     .catch((error) => console.error("Error fetching hotels:", error));
  // }, []);
  // const handleDelete = (id) => {
  //   if (window.confirm('Are you sure you want to delete this hotel?')) {
  //   fetch(`http://localhost:5272/api/Hotel/DeleteHotel?id=${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         setHotels(hotels.filter((hotel) => hotel.hotelId !== id));
  //         alert("Deleted Successfully")
  //       } else {
  //         console.error('Failed to delete hotel');
  //         alert("Failed to delete")
  //       }
  //     })
  //     .catch((error) => console.error('Error deleting hotel:', error));
  //   }
  // };
  // const filteredHotels = hotels.filter(hotel => 
  //   hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   hotel.address.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token'); 
    if (!token) {
      console.error('Token not found');
      return;
    }
  
    fetch("http://localhost:5272/api/Hotel/GetAllHotels", {
      method:'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch hotels');
        }
        return response.json();
      })
      .then((data) => {
        setHotels(data);
      })
      .catch((error) => {
        console.error('Error fetching hotels:', error);
        // Handle error
      });
  }, []);

  const handleDelete = (id) => {
    const token = sessionStorage.getItem('token'); 
    if (!token) {
      console.error('Token not found');
      return;
    }

    if (window.confirm('Are you sure you want to delete this hotel?')) {
      fetch(`http://localhost:5272/api/Hotel/DeleteHotel?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (response.ok) {
            setHotels(hotels.filter((hotel) => hotel.hotelId !== id));
            alert("Deleted Successfully")
          } else {
            console.error('Failed to delete hotel');
            alert("Failed to delete")
          }
        })
        .catch((error) => console.error('Error deleting hotel:', error));
    }
  };

  const filteredHotels = hotels.filter(hotel => 
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Hotels</h3>
              <input 
                type="text" 
                className="form-control mt-3" 
                placeholder="Search hotels by name or address" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
                        <th>Hotel ID</th>
                        <th>Destination ID</th>
                        <th>Owner ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Description</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredHotels.map((hotel) => (
                        <tr key={hotel.hotelId}>
                          <td>{hotel.hotelId}</td>
                          <td>{hotel.destinationId}</td>
                          <td>{hotel.ownerId}</td>
                          <td>{hotel.name}</td>
                          <td>{hotel.address}</td>
                          <td>{hotel.description}</td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                              <i className="fas fa-ellipsis-v ellipse_color" />
                              </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                            <Link to={`edit-hotel/${hotel.hotelId}`} className="dropdown-item"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                            <Link to="#" className="dropdown-item" onClick={() => handleDelete(hotel.hotelId)}>
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

export default AllHotels;
