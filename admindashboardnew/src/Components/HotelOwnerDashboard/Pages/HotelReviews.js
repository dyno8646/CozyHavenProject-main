import React,{useEffect,useState} from 'react'

function HotelReviews() {
    const [reviews, setReviews] = useState([]);
    const hotelid=sessionStorage.getItem('selectedHotelId');
    
    useEffect(() => {
        fetch(`http://localhost:5272/api/Hotel/HotelReviews?id=${hotelid}`)
          .then((response) => response.json())
          .then((data) => setReviews(data))
          .catch((error) => console.error("Error fetching reviews:", error));
      }, [hotelid]);
    
     
   return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <div className="mt-5">
                <h4 className="card-title float-left mt-2">Reviews</h4>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body review_card">
                <div className="table-responsive">
                  <table className="datatable table table-stripped table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Review ID</th>
                        <th>Hotel ID</th>
                        <th>User ID</th>
                        <th>Rating</th>
                        <th>Comment</th>
                        <th>Date Posted</th>                      </tr>
                    </thead>
                    <tbody>
                      {reviews.map((review,index) => (
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{review.hotelId}</td>
                          <td>{review.userId}</td>
                          <td>{review.rating}</td>
                          <td>{review.comment}</td>
                          <td>{review.datePosted}</td>
                          
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default HotelReviews;