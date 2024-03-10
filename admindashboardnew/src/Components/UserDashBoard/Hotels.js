/* global bootstrap, $ */
import React, { useEffect } from 'react';
import WOW from 'wowjs'; 

function Hotels() {
    useEffect(() => {
        // Initiate the wowjs
        new WOW.WOW().init();
        var multipleCardCarousel = document.querySelector("#carouselExampleControls");
        function updateCarouselOnResize() {
            if (window.matchMedia("(min-width: 768px)").matches) {
                var carousel = new bootstrap.Carousel(multipleCardCarousel, {
                    interval: false,
                });
                var carouselWidth = $(".carousel-inner")[0].scrollWidth;
                var cardWidth = $(".carousel-item").width();
                var scrollPosition = 0;

                $("#carouselExampleControls .carousel-control-next").on("click", function () {
                    if (scrollPosition < carouselWidth - cardWidth * 4) {
                        scrollPosition += cardWidth;
                        $("#carouselExampleControls .carousel-inner").animate(
                            { scrollLeft: scrollPosition },
                            1000
                        );
                    }
                });

                $("#carouselExampleControls .carousel-control-prev").on("click", function () {
                    if (scrollPosition > 0) {
                        scrollPosition -= cardWidth;
                        $("#carouselExampleControls .carousel-inner").animate(
                            { scrollLeft: scrollPosition },
                            1000 // Adjusted animation speed
                        );
                    }
                });
            } else {
                $(multipleCardCarousel).addClass("slide");
            }
        }

        // Initialize and update carousel on window resize
        updateCarouselOnResize();
        window.addEventListener('resize', updateCarouselOnResize);

        // Clean up event listeners
        return () => {
            window.removeEventListener('resize', updateCarouselOnResize);
            $("#carouselExampleControls .carousel-control-next").off("click");
            $("#carouselExampleControls .carousel-control-prev").off("click");
        };
    });
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h3 className="section-title bg-white text-center text-primary px-3" />
                    <h1 className="mb-5">Hotels</h1>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Package 1 */}
                        <div className="carousel-item active">
                            <div className="card">
                                <div className="overflow-hidden wow fadeInUp" data-wow-delay="0.1s">
                                    <img className="img-fluid" src="https://images.pexels.com/photos/2187662/pexels-photo-2187662.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Thailand" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />Japan</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />2
                                        Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">$800.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                    </div>
                                    <p>Description here</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                        <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Package 2 */}
                        <div className="carousel-item active">
                            <div className="card">
                                <div className="overflow-hidden wow fadeInUp" data-wow-delay="0.1s">
                                    <img className="img-fluid" src="https://images.pexels.com/photos/3405486/pexels-photo-3405486.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Thailand" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />Korea</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />2
                                        Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">$1000.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                    </div>
                                    <p>Description here</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                        <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Package 3 */}
                        <div className="carousel-item active">
                            <div className="card">
                                <div className="overflow-hidden wow fadeInUp" data-wow-delay="0.1s">
                                    <img className="img-fluid" src="https://images.pexels.com/photos/2792601/pexels-photo-2792601.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Thailand" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />India</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />2
                                        Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">$780.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                    </div>
                                    <p>Description here</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                        <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Package 4 */}
                        <div className="carousel-item active">
                            <div className="card">
                                <div className="overflow-hidden wow fadeInUp" data-wow-delay="0.1s">
                                    <img className="img-fluid" src="https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Thailand" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />India</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />2
                                        Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">$569.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                    </div>
                                    <p>Description here</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                        <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Package 5 */}
                        <div className="carousel-item active">
                            <div className="card">
                                <div className="overflow-hidden wow fadeInUp" data-wow-delay="0.1s">
                                    <img className="img-fluid" src="https://images.pexels.com/photos/92632/pexels-photo-92632.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Thailand" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />London</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />2
                                        Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">$149.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                    </div>
                                    <p>Description here</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                        <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Package 6 */}
                        <div className="carousel-item active">
                            <div className="card">
                                <div className="overflow-hidden wow fadeInUp" data-wow-delay="0.1s">
                                    <img className="img-fluid" src="https://images.pexels.com/photos/2670273/pexels-photo-2670273.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Thailand" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />California</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />2
                                        Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">$149.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                    </div>
                                    <p>Description here</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                        <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Additional packages go here, repeat the format above for each package */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Hotels;