// import React, { useEffect } from 'react';
// import styles from '../Rooms/Room.css';
// import Swiper from 'swiper';

// function Room() {
//     useEffect(() => {
//         const menuBtn = document.querySelector('#menu-btn');
//         if (!menuBtn) return;

//         const faqBoxes = document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
//             faqBox.onclick = () => {
//                 faqBox.parentElement.classList.toggle('active');
//             }
//         });
//         var swiper = new Swiper(".home-slider", {
//             loop: true,
//             effect: "coverflow",
//             spaceBetween: 30,
//             grabCursor: true,
//             coverflowEffect: {
//                 rotate: 50,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 1,
//                 slideShadows: false,
//             },
//             navigation: {
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//             },
//         });
//         var swiper = new Swiper(".gallery-slider", {
//             loop:true,
//             effect: "coverflow",
//             slidesPerView: "auto",
//             centeredSlides: true,
//             grabCursor: true,
//             coverflowEffect: {
//                rotate: 0,
//                stretch: 0,
//                depth: 100,
//                modifier: 2,
//                slideShadows: true,
//             },
//             pagination: {
//                el: ".swiper-pagination",
//              },
//          });

//     }, []); // Empty dependency array ensures the effect runs only once on component mount

//     return (
//         <div className={styles}>
//             <section className="home1" id="home">
//                 <div className="swiper home-slider">
//                     <div className="swiper-wrapper">
//                         <div className="box swiper-slide">
//                             <img src="images/room3.jpg" alt="" />
//                             <div className="flex">
//                                 <h3>luxurious rooms</h3>
//                                 <a href="#availability" className="btn">check availability</a>
//                             </div>
//                         </div>
//                         <div className="box swiper-slide">
//                             <img src="images/room1.jpg" alt="" />
//                             <div className="flex">
//                                 <h3>foods and drinks</h3>
//                                 <a href="#reservation" className="btn">make a reservation</a>
//                             </div>
//                         </div>
//                         <div className="box swiper-slide">
//                             <img src="images/room2.jpg" alt="" />
//                             <div className="flex">
//                                 <h3>luxurious halls</h3>
//                                 <a href="#contact" className="btn">contact us</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="swiper-button-next"></div>
//                     <div className="swiper-button-prev"></div>
//                 </div>
//             </section>

//             <section className="gallery1" id="gallery1">
//                 <div className="swiper gallery-slider">
//                     <div className="swiper-wrapper">
//                         <img src="images/room1.jpg" className="swiper-slide" alt />
//                         <img src="images/room1.jpg" className="swiper-slide" alt />
//                         <img src="images/room1.jpg" className="swiper-slide" alt />
//                     </div>
//                     <div className="swiper-pagination" />
//                 </div>
//             </section>

//         </div>
//     );
// }

// export default Room;
