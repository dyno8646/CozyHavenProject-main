import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Register/Register.css';
import { Button } from 'react-scroll';

function ForgotPassword() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [id]: value
        }));
    };
    
    const handleUpdatePassword = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Password validation regex pattern
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

        if (!passwordPattern.test(form.password)) {
            alert("Password must contain at least 1 number, 1 uppercase letter, 1 special character, and be at least 8 characters long");
            return;
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: form.username,
                password: form.password
            })
        };

        fetch(`http://localhost:5272/api/User/${form.username}/update-password?password=${form.password}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                alert("Password Updated Successfully!")
                console.log("Password Updated Successfully:", data);
                if (window.confirm("You can now log in. Press OK to go to the homepage.")) {
                    navigate('/');
                }
            })
            .catch(error => {
                console.error("Updation Error:", error);
                alert("Password update Failed: " + error.message);
            });
    };

    return (
        <div className={styles} id="/forgotpassword">
            <div className="wrapper43">
                <div className="container123 main1">
                    <div className="row1">
                        <div className="col-md-12 right3">
                            
                                <span className="close-symbol" id="closeSymbol" onClick={() => navigate('/')}>×</span>
                                <form onSubmit={handleUpdatePassword} className="input-box">
                                    <h3 >Update Password</h3>
                                    <div className="scrollable-form">
                                    <div className="input-field">
                                        <input type="text" className="input" id="username" required autoComplete="off" value={form.username} onChange={handleChange} />
                                        <label htmlFor="username">Username</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="password" className="input" id="password" required value={form.password} onChange={handleChange} />
                                        <label htmlFor="password">New Password</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="password" className="input" id="confirmPassword" required value={form.confirmPassword} onChange={handleChange} />
                                        <label htmlFor="confirmPassword">Confirm New Password</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="submit" className="submit" value="Update Password" />
                                    </div>
                                    <div className="signin">
                                        <span>Already have an account? <button onClick={() => navigate('/')}>Log in here</button></span>
                                    </div>
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
