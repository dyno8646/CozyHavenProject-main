/* global bootstrap, $ */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Login from '../Login2/Login';

function Navbar() {
    const [open, setOpen] = useState(false);


    useEffect(() => {

        const handleToggleMenu = () => {
            const navMenu = document.getElementById('offcanvas-body');
            // navMenu.classList.toggle('show-menu');
            if (navMenu) {
                navMenu.classList.toggle('show-menu');
            }
        };

        const handleToggleLogin = () => {
            const login = document.getElementById('login');
            //login.classList.toggle('show-login');
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
    return (
        <div id="/navbar">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container" id="navbar_logo">
                    <a className="navbar-brand" href="#">
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
                                <li className="nav-item active">
                                    <Link
                                        activeClass="active"
                                        to="discover"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500} className="nav-link mx-lg-2" aria-current="page">DISCOVER</Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClass="active"
                                        to="gallery"
                                        spy={true}
                                        smooth={true}
                                        offset={-100} duration={500} className="nav-link mx-lg-2" >GALLERY</Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100} duration={500} className="nav-link mx-lg-2" >CONTACT</Link>
                                </li>
                            </ul>
                            {/* Close button */}
                            <div className="nav__close" id="nav-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="ri-close-line" />
                            </div>
                        </div>
                    </div>
                    <div className="nav__actions">
                        {/* Login button */}
                        <i className="ri-user-line nav__login" id="login-btn" />
                        {/* Toggle button */}
                        <div className="nav__toggle" id="nav-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <i className="ri-menu-line" />
                        </div>
                    </div>
                    {/*==================== LOGIN ====================*/}
                    <div className="login" id="login">
                        <Login />
                        {/* <form action className="login__form">
                            <h2 className="login__title">Log In</h2>
                            <div className="login__group">
                                <div>
                                    <label htmlFor="email" className="login__label">Email</label>
                                    <input type="email" placeholder="Write your email" id="email" className="login__input" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="login__label">Password</label>
                                    <input type="password" placeholder="Enter your password" id="password" className="login__input" />
                                </div>
                            </div>
                            <div>
                                <p className="login__signup">
                                    You do not have an account? <a href="registration.html">Sign up</a>
                                </p>
                                <a href="#" className="login__forgot">
                                    You forgot your password
                                </a>
                                <button type="submit" className="login__button">Log In</button>
                            </div>
                        </form>
                        <i className="ri-close-line login__close" id="login-close" />
                         */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
