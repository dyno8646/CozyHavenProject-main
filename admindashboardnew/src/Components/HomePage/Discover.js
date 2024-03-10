import React from 'react'
import WOW from 'wowjs'; 
import { useNavigate } from 'react-router-dom';

function Discover() {
    const navigate=useNavigate();
    // Initiate the wowjs
    new WOW.WOW().init();
    return (
        <div id="discover">
            <section className="discover-section wow fadeInUp" id="discover" data-wow-delay="0.1s">
                <div className="container1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="discover-wrapper" />
                            <div className="discover-content">
                                <h2>DISCOVER THIS PLACE</h2>
                                <p>Immerse yourself in the comfort and luxury of our selected hotels. Each property is a blend
                                    of local charm and modern amenities, ensuring a stay that is both authentic and indulgent.
                                    Experience the best in hospitality and service, handpicked to make your travels
                                    unforgettable.</p>
                            </div>
                            <div className="discover-images" />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <section id="loginn" className="wow fadeInUp" data-wow-delay="0.3s">
                <div className="container-fluid llll">
                    <div className="row ll">
                        <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding: '1% 4%' }}>
                            <img src="https://images.pexels.com/photos/10568576/pexels-photo-10568576.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Traditional Dress" className="look-image-left" />
                            <h4 style={{ textDecoration: 'underline', color: '#000' }}>Hotels</h4><br />
                            <p>
                                Discover a world of elegance and relaxation at our premier hotels. Each destination promises an
                                exceptional stay, combining modern luxury with timeless charm. Whether you're seeking a tranquil
                                retreat or a vibrant city experience, our hotels cater to every desire.
                            </p>
                            <div className="login_button">
                                <div className="outer">
                                    <a href="#" className="shop-now-btn" onClick={()=>navigate('/error')}>DISCOVER</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding: '1% 4%' }}>
                            <img src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Traditional Dress" className="look-image-left" />
                            <h4 style={{ textDecoration: 'underline', color: '#000' }}>Food</h4><br />
                            <p>
                                Discover a culinary oasis at our hotel, where every dish is a blend of local flavors and global
                                cuisines. Enjoy expertly crafted meals in an ambiance that complements the dining experience,
                                making each bite a delightful journey of taste and tradition.
                            </p>
                            <div className="login_button">
                                <a href="#" className="shop-now-btn" onClick={()=>navigate('/foodblog')}>EXPLORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <hr style={{ width: '90%', margin: 'auto', color: '#031D44' }} />
            <br />
            <br />
        </div>

    );
}

export default Discover;