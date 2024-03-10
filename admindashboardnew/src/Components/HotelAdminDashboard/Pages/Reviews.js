import React,{useEffect,useState} from 'react'

function Reviews() {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5272/api/Review/AllReviews")
          .then((response) => response.json())
          .then((data) => setReviews(data))
          .catch((error) => console.error("Error fetching reviews:", error));
      }, []);
    //   const handleDelete = (id) => {
    //     fetch(`http://localhost:5272/api/review/Deletereview?id=${id}`, {
    //       method: 'DELETE',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //       .then(response => {
    //         if (response.ok) {
    //           // Item deleted successfully, update state or close modal
    //           setReviews(reviews.filter(review => review.reviewId!== id));
    //           alert("Deleted Successfully")
    //         } else {
    //           console.error('Failed to delete review');
    //           alert("Failed to Delete")
    //         }
    //       })
    //       .catch(error => {
    //         console.error('Error deleting review:', error);
    //       });
    //   };
     
   return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <div className="mt-5">
                <h4 className="card-title float-left mt-2">Reviews</h4>
                {/* <a
                  href="add-review.html"
                  className="btn btn-primary float-right veiwbutton "
                >
                  Add review
                </a> */}
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
                        <th>Date Posted</th>
                        {/* <th className="text-right">Actions</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {reviews.map((review) => (
                        <tr key={review.reviewId}>
                          <td>{review.reviewId}</td>
                          <td>{review.hotelId}</td>
                          <td>{review.userId}</td>
                          <td>{review.rating}</td>
                          <td>{review.comment}</td>
                          <td>{review.datePosted}</td>
                          {/* <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                              <i className="fas fa-ellipsis-v ellipse_color" />
                              </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                            <Link to="/edit-review" className="dropdown-item"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                            <Link to="#" className="dropdown-item" onClick={() => handleDelete(review.reviewId)}>
                            <i className="fas fa-trash-alt m-r-5" /> Delete
                            </Link>
                            </div>
                            </div>
                            </td> */}
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

export default Reviews