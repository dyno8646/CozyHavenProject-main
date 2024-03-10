import React from 'react'

function Error() {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid"></div>
 <div className="error-box">
  <h1>404</h1>
  <h3 className="h2 mb-3"><i className="fas fa-exclamation-triangle" /> Oops! Page not found!</h3>
  <p className="h4 font-weight-normal">The page you requested was not found.</p>
  {/* <a href="index.html" className="btn btn-primary">Back to Home</a> */}
</div>
</div>



  )
}

export default Error