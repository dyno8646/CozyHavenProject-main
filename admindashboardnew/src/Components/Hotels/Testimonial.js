/* global bootstrap, $ */
import React, { useEffect } from 'react';
import WOW from 'wowjs'; 

function Testimonial() {
    new WOW.WOW().init();
    useEffect(() => {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }, []);
    return (
        <div >
        <div className="container-xxl py-5 wow fadeInUp" id="review" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title bg-white text-center text-primary px-3">Testimonial</h2>
                    <h1 className="mb-5">Our Clients Say!!!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative">
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="images/11.png" style={{ width: 80, height: 80 }} />
                        <h5 className="mb-0">Jessie</h5>
                        <p>New York, USA</p>
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                            Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="images/13.png" style={{ width: 80, height: 80 }} />
                        <h5 className="mb-0">Victor</h5>
                        <p>New York, USA</p>
                        <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et
                            eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="images/14.png" style={{ width: 80, height: 80 }} />
                        <h5 className="mb-0">Patric Jane</h5>
                        <p>New York, USA</p>
                        <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et
                            eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                    <div className="testimonial-item bg-white text-center border p-4">
                        <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="images/12.png" style={{ width: 80, height: 80 }} />
                        <h5 className="mb-0">Lisbon</h5>
                        <p>New York, USA</p>
                        <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et
                            eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
}

export default Testimonial;