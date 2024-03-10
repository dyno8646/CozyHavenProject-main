import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handlelogout=()=>{
    sessionStorage.clear();
  }
  const username=sessionStorage.getItem('username');
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/admin-dashboard" className="logo">
          <img src="/assets/img/hotel_logo.png" width={50} height={70} alt="logo"/>
          <span className="logoclass">Cozy Haven</span>
        </Link>
        <Link to="/admin-dashboard" className="logo logo-small">
          <img src="/assets/img/hotel_logo.png" alt="Logo" width={30} height={30}/>
        </Link>
      </div>
      <a href="#" id="toggle_btn" onClick={toggleSidebar}>
        <i className="fe fe-text-align-left" />
      </a>
      <a className="mobile_btn" id="mobile_btn" onClick={toggleSidebar}>
        <i className="fas fa-bars" />
      </a>
      {/* <ul className={`nav user-menu ${isSidebarOpen ? 'open' : ''}`}> */}
      <ul className="nav user-menu">
        <li className="nav-item dropdown has-arrow">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <span className="user-img">
              <img className="rounded-circle" src="/assets/img/profiles/avatar-01.jpg" width={31} alt="Manasa"/>
            </span>
          </a>
          <div className="dropdown-menu">
            <div className="user-header">
              <div className="avatar avatar-sm">                
                <img src="/assets/img/profiles/avatar-01.jpg" alt="User Image" className="avatar-img rounded-circle"/>
              </div>
              <div className="user-text">
                <h6>{username}</h6>
                <p className="text-muted mb-0">Administrator</p>
              </div>
            </div>
            <Link className="dropdown-item" to="profile">
              My Profile
            </Link>
            {/* <a className="dropdown-item" href="settings.html">
              Account Settings
            </a> */}
            <Link className="dropdown-item" to="/login" onClick={handlelogout}>
              Logout
            </Link>
          </div>
        </li>
      </ul>
      {/* <div className="top-nav-search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
          <button className="btn" type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div> */}
    </div>
  );
}

export default Header;

