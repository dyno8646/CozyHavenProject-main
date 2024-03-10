import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewProfile() {
    const { username } = useParams(); // Accessing username from the URL params
    const [userDetails, setUserDetails] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        contactnumber: "",
        address: "",
        gender: ""
    });

    useEffect(() => {
        // Fetch user data from the API
        fetch(`http://localhost:5272/api/User/GetByUsername?username=${username}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch user data.');
            })
            .then(data => {
                // Set the user details state with the retrieved data
                setUserDetails(data);
            })
            .catch(error => {
                console.error("Fetch User Data Error:", error);
                // Handle error
            });
    }, [username]);

    return (
        <div>
            <div>
                <h2 className="login__title">User Profile</h2>
                <div className="login__scrollable">
                    <div className="login__group">

                        <label className="login__label">User Details</label>

                        <div className="login__input-container">
                            <div>
                                <label htmlFor="username" className="login__label">Username</label>
                                <input name="username" className="login__input" type="text" value={userDetails.username} readOnly />
                            </div>
                        </div>

                        <div className="login__input-container">
                            <div>
                                <label htmlFor="firstName" className="login__label">First Name</label>
                                <input name="firstName" className="login__input" type="text" value={userDetails.firstName} readOnly />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="login__label">Last Name</label>
                                <input name="lastName" className="login__input" type="text" value={userDetails.lastName} readOnly />
                            </div>
                        </div>

                        <div className="login__input-container">
                            <div>
                                <label htmlFor="dateOfBirth" className="login__label">Date of Birth</label>
                                <input name="dateOfBirth" className="login__input" type="date" value={userDetails.dateOfBirth} readOnly />
                            </div>
                        </div>
                        <div className="login__input-container">
                            <div>
                                <label htmlFor="email" className="login__label">Email</label>
                                <input name="email" className="login__input" type="email" value={userDetails.email} readOnly />
                            </div>
                            <div>
                                <label htmlFor="contactnumber" className="login__label">Contact</label>
                                <input name="contactnumber" className="login__input" type="phone" value={userDetails.contactnumber} readOnly />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="gender" className="login__label">Gender</label>
                            <input name="gender" className="login__input" type="text" value={userDetails.gender} readOnly />
                        </div>
                        <div>
                            <label htmlFor="address" className="login__label">Address</label>
                            <input name="address" className="login__input" value={userDetails.address} readOnly />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProfile;
