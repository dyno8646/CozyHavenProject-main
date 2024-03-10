// import React, { useState } from "react";

// function AddUser() {
//   const [userData, setUserData] = useState({
//     username: "",
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     email: "",
//     contactNumber: "",
//     role: "",
//     password: "",
//     address:"",
//     gender:""
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevUserData) => ({
//       ...prevUserData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!userData.username) {
//       newErrors.username = "Username is required";
//     }
//     if (!userData.firstName.trim()) {
//       newErrors.firstName = "First name is required";
//     }
//     if (!userData.lastName.trim()) {
//       newErrors.lastName = "Last name is required";
//     }
//     if (!userData.dateOfBirth) {
//       newErrors.dateOfBirth = "Date of birth is required";
//     }
//     if (!userData.email.trim()) {
//       newErrors.email = "Email is required";
//     }
//     if (!userData.password.trim()) {
//       newErrors.password = "Password is required";
//     }
//     if (!userData.contactNumber.trim()) {
//       newErrors.contactNumber = "Contact number is required";
//     }
//     if (!userData.role) {
//       newErrors.role = "Role is required";
//     }
//     if (!userData.address.trim()) {
//       newErrors.address = "Address is required";
//     }
//     if (!userData.gender) {
//       newErrors.gender = "Gender is required";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//     fetch("http://localhost:5272/api/User/Register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("User added successfully:", data);
//         alert("User Created Successfully")
//         // You can add any additional logic here, such as showing a success message or redirecting to another page
//       })
//       .catch((error) => console.error("Error adding user:", error));
//       setUserData({
//         username: "",
//         firstName: "",
//         lastName: "",
//         dateOfBirth: "",
//         email: "",
//         contactNumber: "",
//         password: "",
//         role: "", 
//         address:"",
//         gender:""
//       });
//   };

//   return (
//     <div className="page-wrapper">
//       <div className="content container-fluid">
//         <div className="page-header">
//           <div className="row align-items-center">
//             <div className="col">
//               <h3 className="page-title mt-5">Add User</h3>
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
//                 <div className="form-group">
//                  <label>Role</label>
//                    <select
//                      className="form-control"
//                      name="role"
//                      value={userData.role}
//                      onChange={handleChange}
//                     >
//                     <option value=""></option>
//                     <option value="HotelOwner">HotelOwner</option>
//                     <option value="Guest">Guest</option>
//                    </select>
//                 </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="form-group">
//                     <label>Address</label>
//                     <input
//                       type="tel"
//                       className="form-control"
//                       name="address"
//                       value={userData.address}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                 <div className="form-group">
//                  <label>Gender</label>
//                    <select
//                      className="form-control"
//                      name="gender"
//                      value={userData.gender}
//                      onChange={handleChange}
//                     >
//                     <option value=""></option>
//                     <option value="Female">Female</option>
//                     <option value="Male">Male</option>
//                    </select>
//                 </div>
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
//           Create User
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddUser;
import React, { useState } from "react";

function AddUser() {
  const [userData, setUserData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    contactNumber: "",
    role: "",
    password: "",
    address: "",
    gender: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!userData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!userData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!userData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!userData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
      isValid = false;
    }

    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!userData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
      isValid = false;
    }

    if (!userData.role) {
      newErrors.role = "Role is required";
      isValid = false;
    }

    if (!userData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!userData.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    if (!userData.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, continue with submission
      fetch("http://localhost:5272/api/User/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User added successfully:", data);
          alert("User Created Successfully");
          setUserData({
            username: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            email: "",
            contactNumber: "",
            role: "",
            password: "",
            address: "",
            gender: ""
          });
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Add User</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
              <div className="row formtype">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      value={userData.username}
                      onChange={handleChange}
                    />
                    {errors.username && <div className="text-danger">{errors.username}</div>}
                  </div>
                </div>
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
                    {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
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
                    {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
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
                    {errors.dateOfBirth && <div className="text-danger">{errors.dateOfBirth}</div>}
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
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
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
                    {errors.contactNumber && <div className="text-danger">{errors.contactNumber}</div>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      className="form-control"
                      name="role"
                      value={userData.role}
                      onChange={handleChange}
                    >
                      <option value=""></option>
                      <option value="HotelOwner">HotelOwner</option>
                      <option value="Guest">Guest</option>
                    </select>
                    {errors.role && <div className="text-danger">{errors.role}</div>}
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
                    {errors.address && <div className="text-danger">{errors.address}</div>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      className="form-control"
                      name="gender"
                      value={userData.gender}
                      onChange={handleChange}
                    >
                      <option value=""></option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                    {errors.gender && <div className="text-danger">{errors.gender}</div>}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary buttonedit1"
              >
                Create User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;

