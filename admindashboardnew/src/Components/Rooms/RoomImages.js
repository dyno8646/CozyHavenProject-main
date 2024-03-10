// import LightGallery from 'lightgallery/react';

// // import styles
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import 'lightgallery/css/lg-autoplay.css';
// import 'lightgallery/css/lg-fullscreen.css';
// import 'lightgallery/css/lg-share.css';
// import 'lightgallery/css/lg-rotate.css';

// import styles from '../Rooms/RoomImage.css'


// // import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgAutoplay from 'lightgallery/plugins/autoplay'
// import lgFullscreen from 'lightgallery/plugins/fullscreen';
// import lgShare from 'lightgallery/plugins/share';
// import lgRotate from 'lightgallery/plugins/rotate';
// const images = [
//     { src: "images/room1.jpg", alt: "Flag of India" },
//     { src: "images/room2.jpg", alt: "2" },
//     { src: "images/room3.jpg", alt: "3" },
//     { src: "images/room4.jpg", alt: "4", },
//     { src: "images/room5.jpg", alt: "5", }
// ]

//  function RoomImages() {
//     const onInit = () => {
//         console.log('lightGallery has been initialized');
//     };
//     return (
//         <div classname={styles}>
//             <div className="App">
//             <LightGallery
//                 onInit={onInit}
//                 speed={500}
//                 plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
//             >
//                 {images.map((image, index) => {
//                     return (
//                         <div className='rimg'>
//                         <a href={image.src} key={index}>
//                             <img alt={image.alt} src={image.src} />
//                         </a>
//                         </div>
//                     )
//                 })}
//             </LightGallery>
//         </div>
//         </div>
//     );
// }
// export default RoomImages;