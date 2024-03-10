// import React, { useState, useEffect } from "react";

// function EditUser() {
//   const [userData, setUserData] = useState({
//     username: "",
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     email: "",
//     contactNumber: "",
//     role: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value
//     });
//   };

//   const handleSubmit = () => {
//     fetch(`http://localhost:5272/api/User/UpdateUserProfile/${userData.username}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(userData)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("User updated:", data);
//         alert("User updated successfully")
//         // Redirect or show a success message
//       })
//       .catch((error) => console.error("Error updating user:", error));
//   };

//   return (
//     <div className="page-wrapper">
//       <div className="content container-fluid">
//         <div className="page-header">
//           <div className="row align-items-center">
//             <div className="col">
//               <h3 className="page-title mt-5">Edit User</h3>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-12">
//             <form>
//               <div className="row formtype">
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Username</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="username"
//                       value={userData.username}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>First Name</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="firstName"
//                       value={userData.firstName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Last Name</label>
//                     <input
//                       className="form-control"
//                       type="text"
//                       name="lastName"
//                       value={userData.lastName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Date of Birth</label>
//                     <input
//                       type="date"
//                       className="form-control"
//                       name="dateOfBirth"
//                       value={userData.dateOfBirth}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Email</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       name="email"
//                       value={userData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       name="password"
//                       value={userData.password}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Contact Number</label>
//                     <input
//                       type="tel"
//                       className="form-control"
//                       name="contactNumber"
//                       value={userData.contactNumber}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Role</label>
//                     <select
//                       className="form-control"
//                       name="role"
//                       value={userData.role}
//                       onChange={handleChange}
//                     >
//                       <option value="HotelOwner">HotelOwner</option>
//                       <option value="Guest">Guest</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <button
//           type="button"
//           className="btn btn-primary buttonedit1"
//           onClick={handleSubmit}
//         >
//           Update User
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EditUser;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const { username } = useParams();
  
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    contactNumber: "",
    role: "",
    address:"",
    gender:""
  });
  useEffect(() => {
    fetch(`http://localhost:5272/api/User/GetByUsername?username=${username}`)
      .then((response) => response.json())
      .then((data) => {
        // Format dateOfBirth if it exists
        console.log(data.dateOfBirth);
        const dateOfBirth = data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split('T')[0] : '';
        
        setUserData({
          ...data,
          dateOfBirth: dateOfBirth
        });
      })
      .catch((error) => console.error('Error fetching user details:', error));
  }, [username]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    fetch(`http://localhost:5272/api/User/UpdateUserProfile/${username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then((response) => response.json())
      .then(res=>console.log(res))
      .then((data) => {
        console.log("User updated:", data);
        alert("User updated successfully");
        setUserData({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          email: "",
          contactNumber: "",
          role: "",
          address:"",
          gender:""

        })
        
        // Redirect or show a success message
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Edit User</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
              <div className="row formtype">
                {/* <div className="col-md-4">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      value={userData.username}
                      onChange={handleChange}
                    />
                  </div>
                </div> */}
                <div className="col-md-4">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={userData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="contactNumber"
                      value={userData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      className="form-control"
                      name="role"
                      value={userData.role || ""}
                      onChange={handleChange}
                    >
                      <option value="HotelOwner">HotelOwner</option>
                      <option value="Guest">Guest</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={userData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      className="form-control"
                      name="gender"
                      value={userData.gender || ""}
                      onChange={handleChange}
                    >
                      <option value=""></option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                  </div>
                </div>
                
              </div>
              <button
               type="submit"
              className="btn btn-primary buttonedit1"
              >
              Update User
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default EditUser;

