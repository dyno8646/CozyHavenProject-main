import React from 'react'
import WOW from 'wowjs'; 

function Team() {
    // Initiate the wowjs
    new WOW.WOW().init();
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h3 className="section-title bg-white text-center text-primary px-3">Developers</h3>
                        <h1 className="mb-5">Meet The Team</h1>
                    </div>
                    <div className="row g-4 justify-content-center custom-row">

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="images/girl.png" alt />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-linkedin" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Manasa</h5>
                                    <small>Developer</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="images/boy.png" alt />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-linkedin" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Lavanth</h5>
                                    <small>Developer</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br />
            <hr style={{ width: '90%', margin: 'auto', color: '#031D44' }} />
        </div>

    );
}

export default Team;