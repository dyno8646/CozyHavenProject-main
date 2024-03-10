import React from 'react'
import WOW from 'wowjs';

function Destination() {
    // Initiate the wowjs
    new WOW.WOW().init();
    return (
        <div id='gallery'>
            <div className="container-xxl py-5 destination">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="section-title bg-white text-center text-primary px-3">Popular Destinations</h1>
                        <br />
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                    <img className="img-fluid" src="https://preview.redd.it/iyhygkj6h8931.jpg?auto=webp&s=36b8cfc7daba4c1e53c1dd9f0fa2f21d4c84cbc5" alt />
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                            MUMBAI</div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                        <img className="img-fluid" src="https://images.pexels.com/photos/16864154/pexels-photo-16864154/free-photo-of-jw-marriott-hotel-in-baku.jpeg?auto=compress&cs=tinysrgb&w=600" alt />
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                            BANGALORE</div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                        <img className="img-fluid" src="https://images.pexels.com/photos/12649267/pexels-photo-12649267.jpeg?auto=compress&cs=tinysrgb&w=600" alt />
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                            KOCHI</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                            <a className="position-relative d-block h-100 overflow-hidden" href>
                                <img className="img-fluid position-absolute w-100 h-100" src="https://images.pexels.com/photos/14840818/pexels-photo-14840818.jpeg?auto=compress&cs=tinysrgb&w=600" alt style={{ objectFit: 'cover' }} />
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">CHENNAI
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <hr style={{ width: '90%', margin: 'auto', color: '#031D44' }} />
            <br /><br />
            <br /><br />
        </div>

    );
}

export default Destination;