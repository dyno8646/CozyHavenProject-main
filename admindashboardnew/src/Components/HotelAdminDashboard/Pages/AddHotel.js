// import React, { useState } from "react";

// function AddHotel() {
//   const [hotelData, setHotelData] = useState({
//     destinationId: "",
//     ownerId: "",
//     name: "",
//     address: "",
//     description: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setHotelData({
//       ...hotelData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     fetch("http://localhost:5272/api/Hotel/AddHotel", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(hotelData)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         alert("Hotel Added Successfully.")
//         // Optionally, reset the form after successful submission
//         setHotelData({
//           destinationId: "",
//           ownerId: "",
//           name: "",
//           address: "",
//           description: ""
//         });
//       })
//       .catch((error) => {
//         console.error("Error adding hotel:", error);
//       });
//   };
  

//   return (
//     <div className="page-wrapper">
//       <div className="content container-fluid">
//         <div className="page-header">
//           <div className="row align-items-center">
//             <div className="col">
//               <h3 className="page-title mt-5">Add Hotel</h3>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-12">
//             <form onSubmit={handleSubmit}>
//               <div className="row formtype">
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Destination ID</label>
//                     <input
//                       className="form-control"
//                       type="number"
//                       name="destinationId"
//                       value={hotelData.destinationId}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Owner ID</label>
//                     <input
//                       className="form-control"
//                       type="number"
//                       name="ownerId"
//                       value={hotelData.ownerId}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Name</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="name"
//                       value={hotelData.name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Address</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="address"
//                       value={hotelData.address}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Description</label>
//                     <textarea
//                       className="form-control"
//                       type="text"
//                       name="description"
//                       value={hotelData.description}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-primary buttonedit1"
//               >
//                 Create Hotel
//               </button>
              
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddHotel;
import React, { useState } from "react";

function AddHotel() {
  const [hotelData, setHotelData] = useState({
    destinationId: "",
    ownerId: "",
    name: "",
    address: "",
    description: ""
  });
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData({
      ...hotelData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!hotelData.destinationId) {
      errors.destinationId = "Destination ID is required";
      isValid = false;
    }

    if (!hotelData.ownerId) {
      errors.ownerId = "Owner ID is required";
      isValid = false;
    }

    if (!hotelData.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!hotelData.address) {
      errors.address = "Address is required";
      isValid = false;
    }

    if (!hotelData.description) {
      errors.description = "Description is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     const token = sessionStorage.getItem('token');
  //   if (!token) {
  //     console.error('Token not found');
  //     return;
  //   }
  //     // Form is valid, continue with submission
  //     fetch("http://localhost:5272/api/Hotel/AddHotel", {
  //       method: "POST",
        
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(hotelData)
  //     })
  //       .then(res=>console.log(res))
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data);
          
  //         const hotelId = data.hotelId;
  //         const formData = new FormData();
  //         Array.from(images).forEach((image, index) => {
  //           formData.append("filecollection",image);
  //         });

  //         fetch(`http://localhost:5272/api/Hotel/DBMultiUploadImage1?hotelId=${hotelId}`, {
  //           method: "POST",
  //           body: formData
  //         })
  //           .then((response) => response.json())
  //           .then((data) => {
  //             console.log("Success uploading image:", data);
  //             alert("Hotel Added Successfully.");
  //             setImages([]);
  //             setHotelData({
  //               destinationId: "",
  //               ownerId: "",
  //               name: "",
  //               address: "",
  //               description: ""
  //             });
              
  //           })
  //           .catch((error) => {
  //             console.error("Error uploading image:", error);
  //           });
  //       })
  //       .catch((error) => {
  //         console.error("Error adding hotel:", error);
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
      fetch("http://localhost:5272/api/Hotel/AddHotel", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(hotelData)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to add hotel');
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          
          const hotelId = data.hotelId;
          const formData = new FormData();
          Array.from(images).forEach((image, index) => {
            formData.append("filecollection",image);
          });
  
          fetch(`http://localhost:5272/api/Hotel/DBMultiUploadImage1?hotelId=${hotelId}`, {
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
              console.log("Success uploading image:", data);
              alert("Hotel Added Successfully.");
              setImages([]);
              setHotelData({
                destinationId: "",
                ownerId: "",
                name: "",
                address: "",
                description: ""
              });
            })
            .catch((error) => {
              console.error("Error uploading image:", error);
            });
        })
        .catch((error) => {
          console.error("Error adding hotel:", error);
        });
    }
  };
  

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Add Hotel</h3>
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
                      type="number"
                      name="destinationId"
                      value={hotelData.destinationId}
                      onChange={handleChange}
                      required
                    />
                    {errors.destinationId && <div className="text-danger">{errors.destinationId}</div>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Owner ID</label>
                    <input
                      className="form-control"
                      type="number"
                      name="ownerId"
                      value={hotelData.ownerId}
                      onChange={handleChange}
                      required
                    />
                    {errors.ownerId && <div className="text-danger">{errors.ownerId}</div>}
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
                      required
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
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
                      required
                    />
                    {errors.address && <div className="text-danger">{errors.address}</div>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      type="text"
                      name="description"
                      value={hotelData.description}
                      onChange={handleChange}
                      required
                    />
                    {errors.description && <div className="text-danger">{errors.description}</div>}
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
                Create Hotel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddHotel;
