// import React, { useState } from "react";

// function AddRoom() {
//   const [roomData, setRoomData] = useState({
//     hotelId: "",
//     roomSize: "",
//     roomType: "",
//     bedType: "",
//     baseFare: "",
//     maxOccupancy: "",
//     ac: true,
//     available: true
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRoomData({
//       ...roomData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!roomData.hotelId || !roomData.roomSize || !roomData.roomType || !roomData.baseFare || !roomData.maxOccupancy) {
//       alert("Please fill in all required fields");
//       return;
//     }
  
//     // Check if input values are in the correct format
//     if (isNaN(roomData.hotelId) || isNaN(roomData.baseFare) || isNaN(roomData.maxOccupancy)) {
//       alert("Hotel ID, Base Fare, and Max Occupancy must be numbers");
//       return;
//     }
    
//     fetch("http://localhost:5272/api/Room/AddRoom", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(roomData)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         alert("Room Added Successfully.")
//         // Optionally, reset the form after successful submission
//         setRoomData({
//           hotelId: "",
//           roomSize: "",
//           roomType: "",
//           bedType: "",
//           baseFare: "",
//           maxOccupancy: "",
//           ac: true,
//           available: true
//         });
//       })
//       .catch((error) => {
//         console.error("Error adding room:", error);
//       });
//   };

//   return (
//     <div className="page-wrapper">
//       <div className="content container-fluid">
//         <div className="page-header">
//           <div className="row align-items-center">
//             <div className="col">
//               <h3 className="page-title mt-5">Add Room</h3>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-12">
//             <form onSubmit={handleSubmit}>
//               <div className="row formtype">
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Hotel ID</label>
//                     <input
//                       className="form-control"
//                       type="number"
//                       name="hotelId"
//                       value={roomData.hotelId}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Room Size</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="roomSize"
//                       value={roomData.roomSize}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Room Type</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="roomType"
//                       value={roomData.roomType}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Bed Type</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="bedType"
//                       value={roomData.bedType}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Base Fare</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="baseFare"
//                       value={roomData.baseFare}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Max Occupancy</label>
//                     <input
//                       className="form-control"
//                       type="number"
//                       name="maxOccupancy"
//                       value={roomData.maxOccupancy}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>AC</label>
//                     <select
//                       className="form-control"
//                       name="ac"
//                       value={roomData.ac}
//                       onChange={handleChange}
//                     >
//                       <option value={true}>True</option>
//                       <option value={false}>False</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Available</label>
//                     <select
//                       className="form-control"
//                       name="available"
//                       value={roomData.available}
//                       onChange={handleChange}
//                     >
//                       <option value={true}>True</option>
//                       <option value={false}>False</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-primary buttonedit1"
//               >
//                 Create Room
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddRoom;
// import React, { useState } from "react";

// function AddRoom() {
//   const [roomData, setRoomData] = useState({
//     hotelId: "",
//     roomSize: "",
//     roomType: "",
//     bedType: "",
//     baseFare: "",
//     maxOccupancy: "",
//     ac: true,
//     available: true
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRoomData({
//       ...roomData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!roomData.hotelId || !roomData.roomSize || !roomData.roomType || !roomData.baseFare || !roomData.maxOccupancy) {
//       alert("Please fill in all required fields");
//       return;
//     }
  
//     // Check if input values are in the correct format
//     if (isNaN(roomData.hotelId) || isNaN(roomData.baseFare) || isNaN(roomData.maxOccupancy)) {
//       alert("Hotel ID, Base Fare, and Max Occupancy must be numbers");
//       return;
//     }
    
//     fetch("http://localhost:5272/api/Room/AddRoom", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(roomData)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         alert("Room Added Successfully.")
//         // Optionally, reset the form after successful submission
//         setRoomData({
//           hotelId: "",
//           roomSize: "",
//           roomType: "",
//           bedType: "",
//           baseFare: "",
//           maxOccupancy: "",
//           ac: true,
//           available: true
//         });
//       })
//       .catch((error) => {
//         console.error("Error adding room:", error);
//       });
//   };

//   return (
//     <div className="page-wrapper">
//       <div className="content container-fluid">
//         <div className="page-header">
//           <div className="row align-items-center">
//             <div className="col">
//               <h3 className="page-title mt-5">Add Room</h3>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-12">
//             <form onSubmit={handleSubmit}>
//               <div className="row formtype">
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Hotel ID</label>
//                     <input
//                       className="form-control"
//                       type="number"
//                       name="hotelId"
//                       value={roomData.hotelId}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Room Size</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="roomSize"
//                       value={roomData.roomSize}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Room Type</label>
//                     <select
//                       className="form-control"
//                       name="roomType"
//                       value={roomData.roomType}
//                       onChange={handleChange}
//                     >
//                       <option value="Standard">Standard</option>
//                       <option value="Deluxe">Deluxe</option>
//                       <option value="Suite">Suite</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Bed Type</label>
//                     <select
//                       className="form-control"
//                       name="bedType"
//                       value={roomData.bedType}
//                       onChange={handleChange}
//                     >
//                       <option value="SingleBed">Single Bed</option>
//                       <option value="DoubleBed">Double Bed</option>
//                       <option value="KingSizeBed">King Size Bed</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Base Fare</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="baseFare"
//                       value={roomData.baseFare}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Max Occupancy</label>
//                     <select
//                       className="form-control"
//                       name="maxOccupancy"
//                       value={roomData.maxOccupancy}
//                       onChange={handleChange}
//                     >
//                       <option value="2">2</option>
//                       <option value="4">4</option>
//                       <option value="6">6</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>AC</label>
//                     <select
//                       className="form-control"
//                       name="ac"
//                       value={roomData.ac}
//                       onChange={handleChange}
//                     >
//                       <option value={true}>True</option>
//                       <option value={false}>False</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Available</label>
//                     <select
//                       className="form-control"
//                       name="available"
//                       value={roomData.available}
//                       onChange={handleChange}
//                     >
//                       <option value={true}>True</option>
//                       <option value={false}>False</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-primary buttonedit1"
//               >
//                 Create Room
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddRoom;
import React, { useState } from "react";

function AddRoom() {
  const [roomData, setRoomData] = useState({
    hotelId: sessionStorage.getItem("selectedHotelId") || "",
    roomSize: "",
    roomType: "",
    bedType: "",
    baseFare: "",
    maxOccupancy: "",
    ac: true,
    available: true
  });
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({
      ...roomData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!roomData.hotelId) {
      errors.hotelId = "Hotel ID is required";
      isValid = false;
    }

    if (!roomData.roomSize) {
      errors.roomSize = "Room Size is required";
      isValid = false;
    }

    if (!roomData.roomType) {
      errors.roomType = "Room Type is required";
      isValid = false;
    }

    if (!roomData.baseFare) {
      errors.baseFare = "Base Fare is required";
      isValid = false;
    }

    if (!roomData.maxOccupancy) {
      errors.maxOccupancy = "Max Occupancy is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     // Form is valid, continue with submission
  //     fetch("http://localhost:5272/api/Room/AddRoom", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(roomData)
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data);

  //         const roomId = data.roomId;
  //         const formData = new FormData();
  //         Array.from(images).forEach((image, index) => {
  //           formData.append("filecollection", image);
  //         });

  //         fetch(`http://localhost:5272/api/Room/DBMultiUploadImage1?roomId=${roomId}`, {
  //           method: "POST",
  //           body: formData
  //         })
  //           .then((response) => response.json())
  //           .then((data) => {
  //             console.log("Success uploading images:", data);
  //             alert("Room Added Successfully.");
  //             setImages([]);
  //             setRoomData({
  //               hotelId: sessionStorage.getItem("selectedHotelId") || "",
  //               roomSize: "",
  //               roomType: "",
  //               bedType: "",
  //               baseFare: "",
  //               maxOccupancy: "",
  //               ac: true,
  //               available: true
  //             });

  //           })
  //           .catch((error) => {
  //             console.error("Error uploading images:", error);
  //           });
  //       })
  //       .catch((error) => {
  //         console.error("Error adding room:", error);
  //       });
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }
  
      // Form is valid, continue with submission
      fetch("http://localhost:5272/api/Room/AddRoom", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(roomData)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to add room');
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
  
          const roomId = data.roomId;
          const formData = new FormData();
          Array.from(images).forEach((image, index) => {
            formData.append("filecollection", image);
          });
  
          fetch(`http://localhost:5272/api/Room/DBMultiUploadImage1?roomId=${roomId}`, {
            method: "POST",
            body: formData
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Failed to upload image');
              }
              return response.json();
            })
            .then((data) => {
              console.log("Success uploading images:", data);
              alert("Room Added Successfully.");
              setImages([]);
              setRoomData({
                hotelId: sessionStorage.getItem("selectedHotelId") || "",
                roomSize: "",
                roomType: "",
                bedType: "",
                baseFare: "",
                maxOccupancy: "",
                ac: true,
                available: true
              });
  
            })
            .catch((error) => {
              console.error("Error uploading images:", error);
            });
        })
        .catch((error) => {
          console.error("Error adding room:", error);
        });
    }
  };  

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Add Room</h3>
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
                      type="number"
                      name="hotelId"
                      value={roomData.hotelId}
                      onChange={handleChange}
                      required
                    />
                    {errors.hotelId && <div className="text-danger">{errors.hotelId}</div>}
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
                      required
                    />
                    {errors.roomSize && <div className="text-danger">{errors.roomSize}</div>}
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
                    {errors.roomType && <div className="text-danger">{errors.roomType}</div>}
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
                      required
                    />
                    {errors.baseFare && <div className="text-danger">{errors.baseFare}</div>}
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
                    {errors.maxOccupancy && <div className="text-danger">{errors.maxOccupancy}</div>}
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Images</label>
                    <input
                      className="form-control"
                      type="file"
                      name="images"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary buttonedit1"
              >
                Create Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRoom;

