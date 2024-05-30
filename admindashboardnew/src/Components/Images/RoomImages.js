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
  const roomId = sessionStorage.getItem('roomId');
  const hotelName = sessionStorage.getItem('hotelName');
  const roomType = sessionStorage.getItem('roomType');
  const navigate=useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:5272/api/Room/GetDBMultiImage?roomId=${roomId}`);
        setImageUrls(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [roomId]);

  return (
    <div className={styles} id="/roomimages">
        <div className="newGallery1">
      <h2 style={{display:"flex",justifyContent:"center",padding:"40px"}}>{hotelName}</h2>
      <br/>
      <button className="bttn" style={{ marginTop: "-60px", marginLeft: "1200px", position: "absolute", width: "10%", height: "30px", borderRadius: "20px" }} type="button" onClick={() => navigate('/Rooms')}>Go Back</button>
      
      <div className="image-container">
      <h3 style={{display:"grid"}}>{roomType}</h3>
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
                style={{ marginBottom:"20px"}}
              />
            </a>
          ))}
        </LightGallery>
      </div>
      </div>
    </div>
  );
}

export default HotelImages;
