import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Register/Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        dateofbirth: "",
        password: "",
        confirmPassword: "",
        contactnumber: "",
        address: "",
        gender: "",
        role: "User"
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [id]: value
        }));
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (/^[A-Z0-9]/.test(form.username)) {
            alert("Username must not start with a capital letter or a digit.");
            return;
        }

        // Validations
        if (!form.username || !form.firstName || !form.lastName || !form.email || !form.dateofbirth || !form.contactnumber || !form.address || !form.gender || !form.role) {
            alert("Please fill in all the required fields.");
            return;
        }

        if (!form.email.includes("@") || !form.email.includes(".com")) {
            alert("Please enter a valid email address.");
            return;
        }

        const birthDate = new Date(form.dateofbirth);
        const currentDate = new Date();
        const minimumAge = 20;
        const minimumYear = currentDate.getFullYear() - minimumAge;

        if (birthDate.getFullYear() > minimumYear) {
            alert("Please enter a valid date of birth (at least 20 years old).");
            return;
        }

        if (!/^\d{10}$/.test(form.contactnumber)) {
            alert("Please enter a valid 10-digit contact number.");
            return;
        }

        if (form.address.split(" ").length > 100) {
            alert("Address must be less than or equal to 100 words.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form
            )
        };
        
        // Password validation regex pattern
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{5,}$/;

        if (!passwordPattern.test(form.password)) {
            alert("Password must contain at least 1 number, 1 uppercase letter, 1 special character, and be at least 5 characters long");
            return;
        }
        sessionStorage.setItem('gender', form.gender);

        fetch("http://localhost:5272/api/User/Register", requestOptions)
            .then(response => response.json())
            .then(data => {
                alert("Registration Successful")
                console.log("Registration Success:", data);
                if (window.confirm("You can now log in. Press OK to go to the homepage.")) {
                    navigate('/');
                }
                navigate('/');
            })

            .catch(error => {
                console.error("Registration Error:", error);
                alert("Registration Failed: " + error.message);
            });

    };
    useEffect(() => {
        const handleRedirect = () => {
            navigate('/');
        };

        const closeSymbol = document.querySelector('.close-symbol');
        if (closeSymbol) {
            closeSymbol.addEventListener('click', handleRedirect);
        }

        return () => {
            if (closeSymbol) {
                closeSymbol.removeEventListener('click', handleRedirect);
            }
        };
    }, []);


    const handleSignIn = () => {
        navigate('/');
    };

    return (
        <div className={styles} id="register">
            <div className="wrapper43">
                <div className="container123 main1">
                    <div className="row1">
                        <div className="col-md-12 right3">
                            <span className="close-symbol" id="closeSymbol" onClick={() => navigate('/')}>×</span>
                            <form onSubmit={handleRegister} className="input-box">
                                <h3>Create account</h3>
                                <div className="scrollable-form">
                                    <div className="input-field">
                                        <input type="text" className="input" id="username" required autoComplete="off" value={form.username} onChange={handleChange} />
                                        <label htmlFor="username">Username</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" className="input" id="firstName" required autoComplete="off" value={form.firstName} onChange={handleChange} />
                                        <label htmlFor="firstName">First Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" className="input" id="lastName" required autoComplete="off" value={form.lastName} onChange={handleChange} />
                                        <label htmlFor="lastName">Last Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="phone" className="input" id="contactnumber" required autoComplete="off" value={form.contactnumber} onChange={handleChange} />
                                        <label htmlFor="lastName">Contact</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" className="input" id="email" required autoComplete="on" value={form.email} onChange={handleChange} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="date" className="input no-placeholder" id="dateofbirth" required autoComplete="off" value={form.dateofbirth} onChange={handleChange} />
                                        <label htmlFor="dateofbirth">Date of Birth</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" className="input" id="address" required autoComplete="off" value={form.address} onChange={handleChange} />
                                        <label htmlFor="address">Address</label>
                                    </div>
                                    <div className="input-field">
                                        <select id="gender" className="input" value={form.gender} onChange={handleChange}>
                                            <option value="" disabled>Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="input-field">
                                        <input type="password" className="input" id="password" required value={form.password} onChange={handleChange} />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="password" className="input" id="confirmPassword" required value={form.confirmPassword} onChange={handleChange} />
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                    </div>
                                    <div className="input-field">
                                        <select id="role" className="input" value={form.role} onChange={handleChange}>
                                            <option value="" disabled>Select Role</option>
                                            <option value="User">Guest</option>
                                            <option value="Owner">Hotel Owner</option>
                                            <option value="Admin">Hotel Administrator</option>
                                        </select>
                                    </div>
                                    <div className="input-field">
                                        <input type="submit" className="submit" value="Sign Up" />
                                    </div>
                                    <div className="signin">
                                        <h6>Already have an account? <button onClick={handleSignIn} >Log in here</button></h6>
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

export default Register;
