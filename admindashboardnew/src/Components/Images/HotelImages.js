import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import lgZoom from 'lightgallery/plugins/zoom';
import styles from '../Images/HotelImages.css'
import { useNavigate } from 'react-router-dom';

function HotelImages() {
  const [imageUrls, setImageUrls] = useState([]);
  const hotelId = sessionStorage.getItem('hotelId');
  const hotelName = sessionStorage.getItem('hotelName');
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:5272/api/Hotel/GetDBMultiImage?hotelId=${hotelId}`);
        setImageUrls(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    setTimeout(() => {
      setLoading(false); // Change the loading state to false after 5 seconds
    }, 3000);
    fetchImages();
  }, [hotelId]);

  return (
    <div className={styles} id="/hotelimages">
      {loading ? (
        <div class="wrap1">
          <div class="loading1">
            <div class="bounceball"></div>
            <div class="text">NOW LOADING</div>
          </div>
        </div>

      ) : (
        <div className="newGallery1">
          <h2 style={{ display: "flex", justifyContent: "center", padding: "40px", marginTop: "50px" }}>{hotelName}</h2>
          <br />
          <button className="bttn" style={{ marginTop: "-60px", marginLeft: "1200px", position: "absolute", width: "10%", height: "30px", borderRadius: "20px" }} type="button" onClick={() => navigate('/Hotels')}>Go Back</button>
          <div className="image-container">
            <h3 style={{ display: "grid" }}>Our Gallery</h3>
            <LightGallery
              plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
              mode="lg-slide"
              speed={500}
              download={false}
              controls={true}
              slideEndAnimatoin={true}
              loadOnDemand={true}
            >
              {imageUrls.map((imageUrl, index) => (
                <a href={`data:image/jpeg;base64,${imageUrl}`} key={index}>
                  <img
                    src={`data:image/jpeg;base64,${imageUrl}`}
                    alt={`Image ${index + 1}`}
                    style={{ marginBottom: "20px" }}
                  />
                </a>
              ))}
            </LightGallery>

          </div>

        </div>
      
      )}
    </div>
  );
}

export default HotelImages;
