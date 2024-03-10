import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const EditHotel = () => {
  const {hotelId}=useParams();
  const [hotelData, setHotelData] = useState({
    destinationId: "",
    ownerId: "",
    name: "",
    address: "",
    description: ""
  });

  // useEffect(() => {
  //   fetch(`http://localhost:5272/api/Hotel/GetById?id=${hotelId}`,{
  //     method:'PUT',
      
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setHotelData(data))
  //     .catch((error) => console.error("Error fetching hotel:", error));
  // }, [hotelId]);
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      return;
    }
  
    fetch(`http://localhost:5272/api/Hotel/GetById?id=${hotelId}`, {
      method:'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => {
        setHotelData(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        // Handle error
      });
  }, [hotelId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData({
      ...hotelData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      return;
    }
    fetch("http://localhost:5272/api/Hotel/UpdateHotelDetails", {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(hotelData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Updated Successfully");
        setHotelData({
          destinationId: "",
    ownerId: "",
    name: "",
    address: "",
    description: ""

        })
        // Optionally, redirect to a different page after successful update
      })
      .catch((error) => {
        console.error("Error updating hotel:", error);
      });
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Edit Hotel</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
              <div className="row formtype">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Destination ID</label>
                    <input
                      className="form-control"
                      type="text"
                      name="destinationId"
                      value={hotelData.destinationId}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Owner ID</label>
                    <input
                      className="form-control"
                      type="text"
                      name="ownerId"
                      value={hotelData.ownerId}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={hotelData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      value={hotelData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={hotelData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary buttonedit1">
                Update Hotel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHotel;
