import React from 'react'
import WOW from 'wowjs'; 

function About() {
    // Initiate the wowjs
    new WOW.WOW().init();
    console.log('About');
    
    return (
        <div className="about">
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s" style={{ minHeight: 400 }}>
                            <div className="gallery">
                                <img src="/images/new8.jpeg" alt />
                                <img src="/images/new6.jpeg" alt />
                                <img src="/images/new3.jpeg" alt />
                                <img src="/images/new4.jpeg" alt />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h3 className="section-title about text-start pe-3">About Us</h3>
                            <h1 className="mb-4">Welcome to <span className="text-primary">Cozy Haven</span></h1>
                            <p className="mb-4">Experience the epitome of luxury and comfort with Cozy Haven. Our selection of hotels offers unparalleled elegance and tranquility, ensuring your stay is nothing short of extraordinary. From the bustling city centers to serene getaways, we have the perfect spot for every traveler.</p>
                            <p className="mb-4">At Cozy Haven, we believe in providing an experience that transcends the ordinary. Our handpicked hotels are a testament to our commitment to quality and comfort. Each hotel is carefully chosen for its exceptional standards, ensuring your stay is both luxurious and memorable.</p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Hotel Reseration</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Handpicked Hotels</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />5 Star Accommodations</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Latest Modern Hotels</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />150 Premium City Tours</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />24/7 Service</p>
                                </div>
                            </div>
                            <a className="btn btn-primary8 py-3 px-5 mt-2" href>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;