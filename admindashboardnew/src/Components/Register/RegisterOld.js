// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styles from '../Register/Register.css';

// function Register() {
//         const navigate = useNavigate();

//         const [form, setForm] = useState({
//                 username: "",
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 dateofbirth: "",
//                 password: "",
//                 confirmpassword: "",
//                 contactnumber: "",
//                 address: "",
//                 gender: "",
//                 role: ""
//         });

//         const handleChange = (e) => {
//                 const { id, value } = e.target;
//                 setForm(prevForm => ({
//                         ...prevForm,
//                         [id]: value
//                 }));
//         };

//         const handleRegister = (e) => {
//                 e.preventDefault();

//                 const requestOptions = {
//                         method: 'POST',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify(form
//                                 // username: form.username,
//                                 // firstName: form.firstName,
//                                 // lastName: form.lastName,
//                                 // contactnumber: form.contactnumber,
//                                 // email: form.email,
//                                 // //password: form.password,
//                                 // dateofbirth: form.dateofbirth,
//                                 // address: form.address,
//                                 // gender: form.gender,
//                                 // role: form.role
//                         )
//                 };
//                 if (form.password !== form.confirmpassword) {
//                         alert("Passwords do not match");
//                         return;
//                 }
//                 //Password validation regex pattern
//                 const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

//                 if (!passwordPattern.test(form.password)) {
//                         alert("Password must contain at least 1 number, 1 uppercase letter, 1 special character, and be at least 8 characters long");
//                         return;
//                 }

//                 fetch("http://localhost:5272/api/User/Register", requestOptions)
//                         .then(response => response.json())
//                         .then(data => {
//                                 alert("Registration Successful")
//                                 console.log("Registration Success:", data);
//                                 setLoggedin(true);
//                                 if (window.confirm("You can now log in. Press OK to go to the homepage.")) {
//                                         navigate('/');
//                                 }
//                                 navigate('/');
//                         })

//                         .catch(error => {
//                                 console.error("Registration Error:", error);
//                                 alert("Registration Failed: " + error.message);
//                                 setLoggedin(false);
//                         });

//         };
//         const handleSignUp = () => {
//                 navigate('/register');
//         };
//         const [loggedin, setLoggedin] = useState(false);

//         return (
//                 <div>
//                         {loggedin ? <h2 className='alert-succes' style={{ textAlign: 'center', margin: '-20px auto 20px auto' }}>Welcome {form.username} you have successfully logged in.</h2> : null}

//                         <div>


//                                 <form onSubmit={handleRegister} className="login__form1">
//                                         <h2 className="login__title1">Register</h2>
//                                         <div class="login__scrollable1">
//                                                 <div className="login__group1">
//                                                         <div>
//                                                                 <label htmlFor="username" className="login__label1">Username</label>
//                                                                 <input
//                                                                         name="username"
//                                                                         placeholder='Enter your username'
//                                                                         className="login__input1"
//                                                                         type="text"
//                                                                         value={form.username}
//                                                                         onChange={handleChange}
//                                                                 />
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="firstName" className="login__label1">First Name</label>
//                                                                 <input
//                                                                         name="firstName"
//                                                                         placeholder='Enter your first name'
//                                                                         className="login__input1"
//                                                                         type="text"
//                                                                         value={form.firstName}
//                                                                         onChange={handleChange}
//                                                                 />
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="lastName" className="login__label1">Last Name</label>
//                                                                 <input
//                                                                         name="lastName"
//                                                                         placeholder='Enter your last name'
//                                                                         className="login__input1"
//                                                                         type="text"
//                                                                         value={form.lastName}
//                                                                         onChange={handleChange}
//                                                                 />
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="dateOfBirth" className="login__label1">Date of Birth</label>
//                                                                 <input
//                                                                         name="dateOfBirth"
//                                                                         placeholder='Enter your date of birth'
//                                                                         className="login__input1"
//                                                                         type="date"
//                                                                         value={form.dateOfBirth}
//                                                                         onChange={handleChange}
//                                                                 />
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="email" className="login__label1">Email</label>
//                                                                 <input
//                                                                         name="email"
//                                                                         placeholder='Enter your email'
//                                                                         className="login__input1"
//                                                                         type="email"
//                                                                         value={form.email}
//                                                                         onChange={handleChange}
//                                                                 />
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="contact" className="login__label1">Contact</label>
//                                                                 <input
//                                                                         name="contact"
//                                                                         placeholder='Enter your contact number'
//                                                                         className="login__input1"
//                                                                         type="text"
//                                                                         value={form.contact}
//                                                                         onChange={handleChange}
//                                                                 />
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="gender" className="login__label1">Gender</label>
//                                                                 <select
//                                                                         name="gender"
//                                                                         className="login__input1"
//                                                                         value={form.gender}
//                                                                         onChange={handleChange}
//                                                                 >
//                                                                         <option value="">Select Gender</option>
//                                                                         <option value="Male">Male</option>
//                                                                         <option value="Female">Female</option>
//                                                                 </select>
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="role" className="login__label1">Role</label>
//                                                                 <select
//                                                                         name="role"
//                                                                         className="login__input1"
//                                                                         value={form.role}
//                                                                         onChange={handleChange}
//                                                                 >
//                                                                         <option value="">Select Role</option>
//                                                                         <option value="User">User</option>
//                                                                         <option value="Owner">Owner</option>
//                                                                         <option value="Admin">Admin</option>
//                                                                 </select>
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="address" className="login__label1">Address</label>
//                                                                 <textarea
//                                                                         name="address"
//                                                                         placeholder='Enter your address'
//                                                                         className="login__input1"
//                                                                         value={form.address}
//                                                                         onChange={handleChange}
//                                                                 />
//                                                         </div>

//                                                         <div>
//                                                                 <label htmlFor="password" className="login__label1">Password</label>
//                                                                 <input
//                                                                         name="password"
//                                                                         placeholder='Enter your password'
//                                                                         className="login__input1"
//                                                                         type="password"
//                                                                         value={form.password}
//                                                                         onChange={handleChange}
//                                                                 />
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="confirmPassword" className="login__label1">Confirm Password</label>
//                                                                 <input
//                                                                         name="confirmPassword"
//                                                                         placeholder='Confirm your password'
//                                                                         className="login__input1"
//                                                                         type="password"
//                                                                         value={form.confirmPassword}
//                                                                         onChange={handleChange}
//                                                                 />
//                                                         </div>

//                                                 </div>
//                                         </div>
//                                         <div>
//                                                 <button type="submit" className="login__button1">Sign Up</button>
//                                                 <p className="login__signup1">
//                                                         Have an account already? <Link onClick={handleSignUp}>Sign In</Link>
//                                                 </p>
//                                         </div>
//                                 </form>
//                                 <i className="ri-close-line login__close1" id="login-close" />
//                         </div>


//                 </div>
//         );
// }
// export default Register;
