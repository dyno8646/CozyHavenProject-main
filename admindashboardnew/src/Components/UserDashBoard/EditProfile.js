import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditProfile() {
    const [form, setForm] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        contactNumber: "",
        address: "",
        gender: ""
    });

    useEffect(() => {
        const input_file = document.querySelector('input[type="file"]');
        const profile_img = document.querySelector('.profile label');

        input_file.onchange = (e) => {
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);

            sessionStorage.setItem('profilePic', url);

            profile_img.style.background = `url(${url}) center / cover no-repeat`;
            profile_img.querySelector('.user').style.display = "none";

            setTimeout(() => {
                URL.revokeObjectURL(url);
            }, 100);
        };

        const storedFormData = sessionStorage.getItem('formData');
        if (storedFormData) {
            setForm(JSON.parse(storedFormData));
        }
    }, []);

    useEffect(() => {
        const username = sessionStorage.getItem('username');

        axios.get(`http://localhost:5272/api/User/GetByUsername?username=${username}`)
            .then(response => {
                const userData = response.data;
                setForm(userData);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        // Validations
        if (/^[A-Z0-9]/.test(form.username)) {
            alert("Username must not start with a capital letter or a digit.");
            return;
        }

        if (!form.username || !form.firstName || !form.lastName || !form.email || !form.dateOfBirth || !form.contactNumber || !form.address || !form.gender) {
            alert("Please fill in all the required fields.");
            return;
        }

        if (!form.email.includes("@") || !form.email.includes(".com")) {
            alert("Please enter a valid email address.");
            return;
        }

        const birthDate = new Date(form.dateOfBirth);
        if (birthDate.getFullYear() > 2005 || birthDate.getFullYear() > new Date().getFullYear()) {
            alert("Please enter a valid date of birth (before Jan 2005).");
            return;
        }

        if (!/^\d{10}$/.test(form.contactNumber)) {
            alert("Please enter a valid 10-digit contact number.");
            return;
        }

        if (form.address.split(" ").length > 100) {
            alert("Address must be less than or equal to 100 words.");
            return;
        }

        sessionStorage.setItem('formData', JSON.stringify(form));

        const profilePic = sessionStorage.getItem('profilePic');
        if (profilePic) {
            alert("Profile picture added successfully!");
            //sessionStorage.removeItem('profilePic'); 
        }
        const username = sessionStorage.getItem('username');
        axios.put(`http://localhost:5272/api/User/UpdateUserProfile/${username}`, form)
            .then(response => {
                alert("Profile updated successfully!");
                // Optionally, you may want to clear sessionStorage or perform any other actions after successful update
            })
            .catch(error => {
                console.error('Error updating user profile:', error);
                alert("An error occurred while updating profile. Please try again later.");
            });


    };

    return (
        <div>
            <div>
                <form onSubmit={handleUpdateProfile} action className="login__form1">
                    <h2 className="login__title">Manage Profile</h2>
                    <div className="login__scrollable">
                        <div className="login__group">
                            <label className="login__label">Enter New Details</label>
                            <h6>Click to add new Profile Pic</h6>
                            <div className="profile">
                                <label>
                                    <span className="user">&#128100;</span>
                                    <input type="file" />
                                </label>
                            </div>
                            <div className="login__input-container">
                                <div>
                                    <label htmlFor="username" className="login__label">Username</label>
                                    <input name="username" placeholder='Enter your username' className="login__input" type="text" value={form.username} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="login__input-container">
                                <div>
                                    <label htmlFor="firstName" className="login__label">First Name</label>
                                    <input name="firstName" placeholder='Enter your first name' className="login__input" type="text" value={form.firstName} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="login__label">Last Name</label>
                                    <input name="lastName" placeholder='Enter your last name' className="login__input" type="text" value={form.lastName} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="login__input-container">
                                <div>
                                    <label htmlFor="dateOfBirth" className="login__label">Date of Birth</label>
                                    <input
                                        name="dateOfBirth" placeholder='Enter your date of birth' className="login__input" type="date" value={form.dateOfBirth} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="login__input-container">
                                <div>
                                    <label htmlFor="email" className="login__label">Email</label>
                                    <input name="email" placeholder='Enter your email' className="login__input" type="email" value={form.email} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="contactNumber" className="login__label">Contact</label>
                                    <input name="contactNumber" placeholder='Enter your contact number' className="login__input" type="phone" value={form.contactNumber} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="gender" className="login__label">Gender</label>
                                <select
                                    name="gender"
                                    className="login__input"
                                    value={form.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="address" className="login__label">Address</label>
                                <input name="address"
                                    placeholder='Enter your address'
                                    className="login__input"
                                    value={form.address}
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="login__button">Update Profile</button>
                    </div>
                </form>
                <i className="ri-close-line login__close" id="login-close" />
            </div>
        </div>
    );
}

export default EditProfile;
