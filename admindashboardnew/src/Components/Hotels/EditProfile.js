import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../HomePage/styles.css'

function EditProfile() {
    useEffect(() => {
        // Code inside useEffect runs after the component has been mounted and the DOM is ready

        // Select the input[type="file"] and .profile label elements
        const input_file = document.querySelector('input[type="file"]');
        const profile_img = document.querySelector('.profile label');

        // Add onchange event handler to input_file
        input_file.onchange = (e) => {
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            profile_img.style.background = `url(${url}) center / cover no-repeat`;
            profile_img.querySelector('.user').style.display = "none";
            setTimeout(() => {
                URL.revokeObjectURL(url);
            }, 100);
        };
    }, []);

    const { username } = useParams(); // Accessing username from the URL params
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        contactnumber: "",
        address: "",
        gender: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };

        fetch(`http://localhost:5272/api/User/UpdateUserProfile/${form.username}`, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                alert("Profile Updated Successfully");
                console.log("Profile Update Success:", data);
                // Redirect or handle success as needed
            })
            .catch(error => {
                console.error("Profile Update Error:", error);
                alert("Profile Update Failed: " + error.message);
            });
    };

    return (
        <div className={styles}>
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
                                    <label htmlFor="contactnumber" className="login__label">Contact</label>
                                    <input name="contactnumber" placeholder='Enter your contact number' className="login__input" type="phone" value={form.contactnumber} onChange={handleChange} />
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
