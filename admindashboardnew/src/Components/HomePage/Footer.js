/* global bootstrap, $ */
import React from 'react'
import { useNavigate } from 'react-router-dom';


function Footer() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/gallery");
    };
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/__r375__?utm_source=qr&igshid=ZmhlaDJ6NGNudm1z', '_blank');
    };

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo');
        return false;
    });

    const handleSignUp = () => {

        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value;
        const isEmailRegistered = checkIfEmailIsRegistered(email);

        if (isEmailRegistered) {
            alert(`The email "${email}" is registered and you will receive monthly updates from now on.`);
            emailInput.value = '';
        }
    };

    const checkIfEmailIsRegistered = (email) => {
        return true;
    };

    return (
        <div id="contact">
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" id="contact" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Company</h4>
                            <a className="btn btn-link" href>About Us</a>
                            <a className="btn btn-link" href>Contact Us</a>
                            <a className="btn btn-link" href>Privacy Policy</a>
                            <a className="btn btn-link" href>Terms &amp; Condition</a>
                            <a className="btn btn-link" href>FAQs &amp; Help</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, Kochi, INDIA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+91 945 6789022</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3" />info@cozyhaven.com</p>
                            <div className="d-flex pt-2">
                                {/*-<a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>*/}
                                <ul className="wrapper">
                                    <li className="icon facebook">
                                        <span className="tooltip">Facebook</span>
                                        <span><i className="fab fa-facebook-f" /></span>
                                    </li>
                                    <li className="icon twitter">
                                        <span className="tooltip">Twitter</span>
                                        <span><i className="fab fa-twitter" /></span>
                                    </li>
                                    <li className="icon instagram" onClick={handleInstagramClick}>
                                        <span className="tooltip">Instagram</span>
                                        <span><i className="fab fa-instagram" /></span>
                                    </li>
                                    <li className="icon linkedin">
                                        <span className="tooltip">LinkedIn</span>
                                        <span><i className="fab fa-linkedin" /></span>
                                    </li>
                                    <li className="icon youtube">
                                        <span className="tooltip">Youtube</span>
                                        <span><i className="fab fa-youtube" /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div onClick={handleClick}>
                                <h4 className="text-white mb-3">Gallery</h4>
                                <div className="row g-2 pt-2">
                                    <div className="col-4">
                                        <img className="img-fluid bg-light p-1" src="/HotelImages/1.webp" alt />
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid bg-light p-1" src="/HotelImages/2.webp" alt />
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid bg-light p-1" src="/HotelImages/3.jpg" alt />
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid bg-light p-1" src="/HotelImages/4.jpeg" alt />
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid bg-light p-1" src="/HotelImages/5.webp" alt />
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid bg-light p-1" src="/HotelImages/8.jpg" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Newsletter</h4>
                            <p>Stay updated with the latest news, trends, and exclusive offers delivered straight to your inbox!</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                <input id="emailInput" className="form-control border-primary w-100 py-3 ps-4 pe-5" type="email" placeholder="Your email" />
                                <button type="button" className="btn btn-primary8 py-1 position-absolute top-0 end-0 mt-1 me-1" onClick={handleSignUp}>SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a className="border-bottom" href="#">Cozy Haven</a>, All Right Reserved.
                                Designed By <a className="border-bottom" href="#">Team5</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href>Home</a>
                                    <a href>Cookies</a>
                                    <a href>Help</a>
                                    <a href>FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary8 btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
        </div>

    );
}

export default Footer;