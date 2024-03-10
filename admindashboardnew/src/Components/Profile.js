// import React, { useState, useEffect } from 'react'

// function Profile() {
//   const [userData, setUserData] = useState(null);
//   const username=sessionStorage.getItem('username');
//   useEffect(() => {
//     fetch(`http://localhost:5272/api/User/GetByUsername?username=${username}`)
//       .then(response => response.json())
//       .then(data => setUserData(data))
//       .catch(error => console.error('Error fetching user details:', error));
//   }, [username]);
//   return (
//     <div className="page-wrapper">
//   <div className="content container-fluid">
//     <div className="page-header mt-5">
//     <h3 className="page-title">Profile</h3>
//     <div className="row">
//       <div className="col-md-12">
//         <div className="profile-menu">
//           <ul className="nav nav-tabs nav-tabs-solid">
//           <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#per_details_tab">About</a> </li>
//           <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#password_tab">Password</a> </li>
//           </ul>
//         </div>
//         <div className="tab-content profile-tab-cont">
//           <div className="tab-pane fade show active" id="per_details_tab">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title d-flex justify-content-between">
//                       <span>Personal Details</span>
//                       <a className="edit-link" data-toggle="modal" href="#edit_personal_details"><i className="fa fa-edit mr-1" />Edit</a>
//                     </h5>
//                     <div className="row mt-5">
//                       <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Name</p>
//                       <p className="col-sm-9">David Alvarez</p>
//                     </div>
//                     <div className="row">
//                       <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Date of Birth</p>
//                       <p className="col-sm-9">24 Jul 1983</p>
//                     </div>
//                     <div className="row">
//                       <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Email ID </p>
//                       <p className="col-sm-9"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="caaeabbca3aeaba6bcabb8afb08aafb2aba7baa6afe4a9a5a7">[email&nbsp;protected]</a></p>
//                     </div>
//                     <div className="row">
//                       <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Mobile</p>
//                       <p className="col-sm-9">305-310-5857</p>
//                     </div>
//                     <div className="row">
//                       <p className="col-sm-3 text-sm-right mb-0">Address</p>
//                       <p className="col-sm-9 mb-0">4663 Agriculture Lane,
//                         <br /> Miami,
//                         <br /> Florida - 33165,
//                         <br /> United States.</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
//                   <div className="modal-dialog modal-dialog-centered" role="document">
//                     <div className="modal-content">
//                       <div className="modal-header">
//                         <h5 className="modal-title">Personal Details</h5>
//                         <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
//                       </div>
//                       <div className="modal-body">
//                         <form>
//                           <div className="row form-row">
//                             <div className="col-12 col-sm-6">
//                               <div className="form-group">
//                                 <label>First Name</label>
//                                 <input type="text" className="form-control" defaultValue="John" /> </div>
//                             </div>
//                             <div className="col-12 col-sm-6">
//                               <div className="form-group">
//                                 <label>Last Name</label>
//                                 <input type="text" className="form-control" defaultValue="Doe" /> </div>
//                             </div>
//                             <div className="col-12">
//                               <div className="form-group">
//                                 <label>Date of Birth</label>
//                                 <div className="cal-icon">
//                                   <input type="text" className="form-control" defaultValue="24-07-1983" /> </div>
//                               </div>
//                             </div>
//                             <div className="col-12 col-sm-6">
//                               <div className="form-group">
//                                 <label>Email ID</label>
//                                 <input type="email" className="form-control" defaultValue="johndoe@example.com" /> </div>
//                             </div>
//                             <div className="col-12 col-sm-6">
//                               <div className="form-group">
//                                 <label>Mobile</label>
//                                 <input type="text" defaultValue="+1 202-555-0125" className="form-control" /> </div>
//                             </div>
//                             <div className="col-12">
//                               <h5 className="form-title"><span>Address</span></h5> </div>
//                             <div className="col-12">
//                               <div className="form-group">
//                                 <label>Address</label>
//                                 <input type="text" className="form-control" defaultValue="4663 Agriculture Lane" /> </div>
//                             </div>
//                             <div className="col-12 col-sm-6">
//                               <div className="form-group">
//                                 <label>City</label>
//                                 <input type="text" className="form-control" defaultValue="Miami" /> </div>
//                             </div>
//                             <div className="col-12 col-sm-6">
//                               <div className="form-group">
//                                 <label>State</label>
//                                 <input type="text" className="form-control" defaultValue="Florida" /> </div>
//                             </div>
//                             <div className="col-12 col-sm-6">
//                               <div className="form-group">
//                                 <label>Zip Code</label>
//                                 <input type="text" className="form-control" defaultValue={22434} /> </div>
//                             </div>
//                             <div className="col-12 col-sm-6">
//                               <div className="form-group">
//                                 <label>Country</label>
//                                 <input type="text" className="form-control" defaultValue="United States" /> </div>
//                             </div>
//                           </div>
//                           <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div id="password_tab" className="tab-pane fade">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Change Password</h5>
//                 <div className="row">
//                   <div className="col-md-10 col-lg-6">
//                     <form>
//                       <div className="form-group">
//                         <label>Old Password</label>
//                         <input type="password" className="form-control" /> </div>
//                       <div className="form-group">
//                         <label>New Password</label>
//                         <input type="password" className="form-control" /> </div>
//                       <div className="form-group">
//                         <label>Confirm Password</label>
//                         <input type="password" className="form-control" /> </div>
//                       <button className="btn btn-primary" type="submit">Save Changes</button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>


//   )
// }

// export default Profile
import React, { useState, useEffect } from 'react';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const username = sessionStorage.getItem('username');

  useEffect(() => {
    fetch(`http://localhost:5272/api/User/GetByUsername?username=${username}`)
      .then(response => response.json())
      .then(data =>setUserData(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [username]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Implement save logic here
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header mt-5">
          <h3 className="page-title">Profile</h3>
          <div className="row">
            <div className="col-md-12">
              <div className="profile-menu">
                <ul className="nav nav-tabs nav-tabs-solid">
                  <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#per_details_tab">About</a> </li>
                  <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#password_tab">Password</a> </li>
                </ul>
              </div>
              <div className="tab-content profile-tab-cont">
                <div className="tab-pane fade show active" id="per_details_tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title d-flex justify-content-between">
                            <span>Personal Details</span>
                            {!editMode && <a className="edit-link" onClick={handleEdit}><i className="fa fa-edit mr-1" />Edit</a>}
                          </h5>
                          {editMode ? (
                            <form>
                              <div className="row mt-5">
                                <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">First Name</p>
                                <input className="col-sm-9 form-control" type="text" name="firstName" value={userData?.firstName} onChange={handleChange} />
                              </div>
                              <div className="row">
                                <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Last Name</p>
                                <input className="col-sm-9 form-control" type="text" name="lastName" value={userData?.lastName} onChange={handleChange} />
                              </div>
                              <div className="row">
                                <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Date of Birth</p>
                                <input className="col-sm-9 form-control" type="date" name="dateOfBirth" value={"1999-04-05"} onChange={handleChange} />
                              </div>
                              <div className="row">
                                <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Email ID</p>
                                <input className="col-sm-9 form-control" type="email" name="email" value={userData?.email} onChange={handleChange} />
                              </div>
                              <div className="row">
                                <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Mobile</p>
                                <input className="col-sm-9 form-control" type="text" name="contactNumber" value={userData?.contactNumber} onChange={handleChange} />
                              </div>
                              <div className="row">
                                <p className="col-sm-3 text-sm-right mb-0">Address</p>
                                <input className="col-sm-9 form-control" type="text" name="address" value={userData?.address} onChange={handleChange} />
                              </div>
                              <button className="btn btn-primary mt-3" type="button" onClick={handleSave}>Save Changes</button>
                            </form>
                          ) : (
                            <>
                              <div className="row mt-5">
                                <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Name</p>
                                <p className="col-sm-9">{userData?.firstName} {userData?.lastName}</p>
                              </div>
                              <div className="row">
                                <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Date of Birth</p>
                                <p className="col-sm-9">{"1999-04-05"}</p>
                              </div>
                              <div className="row">
                                <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Email ID</p>
                                <p className="col-sm-9">{userData?.email}</p>
                              </div>
                              <div className="row">
                                <p className="col-sm-3 text-sm-right mb-0 mb-sm-3">Mobile</p>
                                <p className="col-sm-9">{userData?.contactNumber}</p>
                              </div>
                              <div className="row">
                                <p className="col-sm-3 text-sm-right mb-0">Address</p>
                                <p className="col-sm-9 mb-0">{userData?.address}</p>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="password_tab" className="tab-pane fade">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Change Password</h5>
                      <div className="row">
                        <div className="col-md-10 col-lg-6">
                          <form>
                            <div className="form-group">
                              <label>Old Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>New Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <button className="btn btn-primary" type="submit">Save Changes</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
