import React, { useState, useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';
import styles from '../Gallery/Gallery.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

export function Gallery() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const data = [
            { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 1' },
            { src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 2' },
            { src: 'https://images.pexels.com/photos/1040893/pexels-photo-1040893.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 3' },
            { src: 'https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 4' },
            { src: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 5' },
            { src: 'https://images.pexels.com/photos/2867903/pexels-photo-2867903.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 6' },
            { src: 'https://images.pexels.com/photos/633269/pexels-photo-633269.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 7' },
            { src: 'https://images.pexels.com/photos/2923415/pexels-photo-2923415.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 8' },
            { src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 9' },
            { src: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 10' },
            { src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 11' },
            { src: 'https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 12' },
            { src: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 13' },
            { src: 'https://images.pexels.com/photos/1139785/pexels-photo-1139785.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 14' },
            { src: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 15' },
            { src: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 16' },
            { src: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 17' },
            { src: 'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 18' },
            { src: 'https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 19' },
            { src: 'https://images.pexels.com/photos/1813467/pexels-photo-1813467.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 20' },
            { src: 'https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 21' },
            { src: 'https://images.pexels.com/photos/2878785/pexels-photo-2878785.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 22' },
            { src: 'https://images.pexels.com/photos/6474532/pexels-photo-6474532.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 23' },
            { src: 'https://images.pexels.com/photos/2090651/pexels-photo-2090651.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 24' },
            { src: 'https://images.pexels.com/photos/2670273/pexels-photo-2670273.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 25' },
            { src: 'https://images.pexels.com/photos/1520619/pexels-photo-1520619.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 26' },
            { src: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 27' },
            { src: 'https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 28' },
            { src: 'https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 29' },
            { src: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 30' },
            { src: 'https://images.pexels.com/photos/4846454/pexels-photo-4846454.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 31' },
            { src: 'https://images.pexels.com/photos/6758528/pexels-photo-6758528.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 32' },
            { src: 'https://images.pexels.com/photos/6039181/pexels-photo-6039181.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 33' },
            { src: 'https://images.pexels.com/photos/9959711/pexels-photo-9959711.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 34' },
            { src: 'https://images.pexels.com/photos/6394513/pexels-photo-6394513.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 35' },
            { src: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 36' },
            { src: 'https://images.pexels.com/photos/9400910/pexels-photo-9400910.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 37' },
            { src: 'https://images.pexels.com/photos/19136570/pexels-photo-19136570/free-photo-of-hotel-building-of-hyatt-regency-dusseldorf.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 38' },
            { src: 'https://images.pexels.com/photos/5044542/pexels-photo-5044542.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 39' },
            { src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 40' },
            { src: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 41' },
            { src: 'https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 42' },
            { src: 'https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 43' },
            { src: 'https://images.pexels.com/photos/261105/pexels-photo-261105.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 44' },
            { src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 45' },
            { src: 'https://images.pexels.com/photos/235466/pexels-photo-235466.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 46' },
            { src: 'https://images.pexels.com/photos/7365412/pexels-photo-7365412.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 47' },
            { src: 'https://images.pexels.com/photos/6621172/pexels-photo-6621172.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 48' },
            { src: 'https://images.pexels.com/photos/6621075/pexels-photo-6621075.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 49' },
            { src: 'https://images.pexels.com/photos/5563469/pexels-photo-5563469.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Image 50' }


        ];
        setImages(data);
        setTimeout(() => {
            setLoading(false); // Change the loading state to false after 5 seconds
        }, 5000);
    }, []);

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className={styles} id='/gallery'>
            <div className="newGallery">
                <h2 style={{ display: "flex", justifyContent: "center", padding: "40px" ,color:"white"}}>GALLERY</h2>
                {loading ? (
                    <div className="center">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
                    
                ) : (
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
                    >
                        {images.map((image, index) => (
                            <a href={image.src} key={index} data-lg-size="1280-720" data-src={image.src} data-sub-html={`<h4>${image.alt}</h4>`}>
                                <img alt={image.alt} src={image.src} />
                            </a>
                        ))}
                    </LightGallery>
                )}
            </div>
        </div>
    );
}
