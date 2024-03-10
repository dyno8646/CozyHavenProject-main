/* global bootstrap, $ */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// import Login from '../Login/Login';
import RegisterOld from '../Register/RegisterOld'
import EditProfile from './EditProfile';
import styles from '../HomePage/styles.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {

        const handleToggleMenu = () => {
            const navMenu = document.getElementById('offcanvas-body');
            navMenu.classList.toggle('show-menu');
        };

        const handleToggleLogin = () => {
            console.log("Login button clicked");
            const login = document.getElementById('login');
            login.classList.toggle('show-login');
        };

        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');

        navToggle.addEventListener('click', handleToggleMenu);
        navClose.addEventListener('click', handleToggleMenu);

        return () => {
            navToggle.removeEventListener('click', handleToggleMenu);
            navClose.removeEventListener('click', handleToggleMenu);
        };
    }, []);
    const isLoggedIn = () => {
        // Check if user is logged in
        const userId = sessionStorage.getItem('userId');
        return userId !== null;
    };

    const handleSearchClick = () => {
        if (!isLoggedIn()) {
            alert('Please log in first to continue.');
            navigate('/');
        } else {
            navigate('/UserDash');
        }
    };
    return (
        <div className={styles}>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container" id="navbar_logo">
                    <a className="navbar-brand" onClick={() => navigate('/')}>
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
                                        to="discover"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500} className="nav-link mx-lg-2" onClick={() => navigate('/')}aria-current="page">Home</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link activeClass="active"
                                        to="review"
                                        spy={true}
                                        smooth={true}
                                        offset={-100} duration={500} onClick={handleSearchClick}  className="nav-link mx-lg-2" >Go Back</Link>
                                </li>
                                
                                
                            </ul>
                            {/* Close button */}
                            <div className="nav__close" id="nav-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="ri-close-line" />
                            </div>
                        </div>
                    </div>
                    <div className="nav__actions">

                        {/* Toggle button */}
                        <div className="nav__toggle" id="nav-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <i className="ri-menu-line" />
                        </div>
                    </div>
                    
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
