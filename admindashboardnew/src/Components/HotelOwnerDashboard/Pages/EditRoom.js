import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const EditRoom = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState({
    hotelId: "",
    roomSize: "",
    roomType: "",
    bedType: "",
    baseFare: "",
    maxOccupancy: "",
    ac: false,
    available: false
  });

  useEffect(() => {
    fetch(`http://localhost:5272/api/Room/GetById?id=${roomId}`)
      .then((response) => response.json())
      .then((data) => setRoomData(data))
      .catch((error) => console.error("Error fetching room:", error));
  }, [roomId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({
      ...roomData,
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
    fetch("http://localhost:5272/api/Room/UpdateDetails", {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(roomData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Updated Successfully");
        // Optionally, redirect to a different page after successful update
      })
      .catch((error) => {
        console.error("Error updating room:", error);
      });
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Edit Room</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
              <div className="row formtype">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Hotel ID</label>
                    <input
                      className="form-control"
                      type="text"
                      name="hotelId"
                      value={roomData.hotelId}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Room Size</label>
                    <input
                      className="form-control"
                      type="text"
                      name="roomSize"
                      value={roomData.roomSize}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Room Type</label>
                    <select
                      className="form-control"
                      name="roomType"
                      value={roomData.roomType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Room Type</option>
                      <option value="Standard">Standard</option>
                      <option value="Deluxe">Deluxe</option>
                      <option value="Suite">Suite</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Bed Type</label>
                    <select
                      className="form-control"
                      name="bedType"
                      value={roomData.bedType}
                      onChange={handleChange}
                    >
                      <option value="">Select Bed Type</option>
                      <option value="SingleBed">Single Bed</option>
                      <option value="DoubleBed">Double Bed</option>
                      <option value="KingSizeBed">King Size Bed</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Base Fare</label>
                    <input
                      className="form-control"
                      type="text"
                      name="baseFare"
                      value={roomData.baseFare}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Max Occupancy</label>
                    <select
                      className="form-control"
                      name="maxOccupancy"
                      value={roomData.maxOccupancy}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Max Occupancy</option>
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>AC</label>
                    <select
                      className="form-control"
                      name="ac"
                      value={roomData.ac}
                      onChange={handleChange}
                    >
                      <option value={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Available</label>
                    <select
                      className="form-control"
                      name="available"
                      value={roomData.available}
                      onChange={handleChange}
                    >
                      <option value={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary buttonedit1">
                Update Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRoom;
