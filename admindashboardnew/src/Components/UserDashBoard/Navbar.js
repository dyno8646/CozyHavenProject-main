/* global bootstrap, $ */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import RegisterOld from '../Register/RegisterOld'
import EditProfile from './EditProfile';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    //const history = useHistory();

    const handleClick = () => {
        navigate("/");
    };


    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }

        const handleToggleMenu = () => {
            const navMenu = document.getElementById('offcanvas-body');
            if (navMenu) {
                navMenu.classList.toggle('show-menu');
            }
        };

        const handleToggleLogin = () => {
            console.log("Login button clicked");
            const login = document.getElementById('login');
            if (login) {
                login.classList.toggle('show-login');
            }
        };

        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const loginBtn = document.getElementById('login-btn');
        const loginClose = document.getElementById('login-close');

        if (navToggle && navClose && loginBtn && loginClose) {
            navToggle.addEventListener('click', handleToggleMenu);
            navClose.addEventListener('click', handleToggleMenu);
            loginBtn.addEventListener('click', handleToggleLogin);
            loginClose.addEventListener('click', handleToggleLogin);
        }

        return () => {
            if (navToggle && navClose && loginBtn && loginClose) {
                navToggle.removeEventListener('click', handleToggleMenu);
                navClose.removeEventListener('click', handleToggleMenu);
                loginBtn.removeEventListener('click', handleToggleLogin);
                loginClose.removeEventListener('click', handleToggleLogin);
            }
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null); 
        sessionStorage.clear();
        navigate('/');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container" id="navbar_logo">
                    <a className="navbar-brand" >
                        <span className="black-color">C</span><span className="btn-lime1">ozy</span>
                        <span className="black-color">H</span><span className="btn-lime1">aven</span>
                    </a>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">COZY HAVEN</h5>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav nav__list justify-content-center flex-grow-1 pe-3">
                                {/* <li className="nav-item active">
                                    <Link
                                        activeClass="active"
                                        onClick={() => navigate('/')}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500} className="nav-link mx-lg-2" aria-current="page">Home</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link activeClass="active"
                                        onClick={() => navigate('/bookingHistory')}
                                        spy={true}
                                        smooth={true}
                                        offset={-100} duration={500} className="nav-link mx-lg-2" >My Bookings</Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClass="active"
                                        onClick={() => navigate('/userReviews')}
                                        spy={true}
                                        smooth={true}
                                        offset={-100} duration={500} className="nav-link mx-lg-2" >My Reviews</Link>
                                </li>
                                <li className="nav-item">
                                    <div className="nav__actions">

                                        <Link activeClass="active"
                                            to="/"
                                            spy={true}
                                            smooth={true}
                                            offset={-100} duration={500} className="nav-link mx-lg-2 " id="login-btn">Edit Profile</Link>

                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100} duration={500} className="nav-link mx-lg-2" >Contact</Link>
                                </li>

                                <li className="nav-item">
                                    <button
                                    activeClass="active"
                                        onClick={handleLogout}
                                        className="nav-link mx-lg-2"
                                        style={{ border: 'none', background: 'none', cursor: 'pointer' ,marginLeft:"140px"}}>LogOut
                                    </button>
                                </li>
                            </ul>

                            {/* Close button */}
                            <div className="nav__close" id="nav-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="ri-close-line" />
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <div className='nav-item active'>
                            <button active
                                className="nav-link mx-lg-2"
                                style={{ border: 'none', background: 'none', cursor: 'pointer' }}>{username}
                            </button>
                        </div>
                    </div> */}
                    <div className="nav__actions">

                        {/* Toggle button */}
                        <div className="nav__toggle" id="nav-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <i className="ri-menu-line" />
                        </div>
                    </div>
                    {/*==================== LOGIN ====================*/}
                    <div className="login" id="login">
                        <EditProfile />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
