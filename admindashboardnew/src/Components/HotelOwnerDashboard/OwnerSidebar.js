import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";

function Sidebar() {
  const [openBookings, setOpenBookings] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openRooms, setOpenRooms] = useState(false);
  const navigate=useNavigate();

  const toggleBookings = () => {
    setOpenBookings(!openBookings);
  };

  const toggleUsers = () => {
    setOpenUsers(!openUsers);
  };

  const toggleRooms = () => {
    setOpenRooms(!openRooms);
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="active">
              <Link to='/owner-dashboard'>
                <i className="fas fa-tachometer-alt" /> <span>Dashboard</span>
              </Link>
            </li>
            <li className="list-divider" />
            {/* <li className="submenu">
              <a href="#" onClick={toggleBookings}>
                <i className="fas fa-suitcase" /> <span> Bookings </span>
                <span className="menu-arrow" />
              </a>
              <ul
                className="submenu_class"
                style={{ display: openBookings ? "block" : "none" }}
              >
                <li>
                  <Link to="/all-bookings"> All Bookings </Link>
                </li>
                <li>
                  <Link to="/edit-booking"> Edit Booking </Link>
                </li>
                <li>
                  <Link to="/add-booking"> Add Booking </Link>
                </li>
              </ul>
            </li> */}
            {/* <li className="submenu">
              <a href="#" onClick={toggleUsers}>
                <i className="fas fa-user" /> <span> Users </span>
                <span className="menu-arrow" />
              </a>
              <ul
                className="submenu_class"
                style={{ display: openUsers ? "block" : "none" }}
              >
                <li>
                  <Link to="/all-users"> All users </Link>
                </li>
                <li>
                  <Link to="/edit-user"> Edit User </Link>
                </li>
                <li>
                  <Link to="/add-user"> Add User </Link>
                </li>
              </ul>
            </li> */}
            <li className="submenu">
              <a href="#" onClick={toggleRooms}>
                <i className="fas fa-key" /> <span> Rooms </span>
                <span className="menu-arrow" />
              </a>
              <ul
                className="submenu_class"
                style={{ display: openRooms ? "block" : "none" }}
              >
                <li>
                  <Link to="all-rooms">All Rooms</Link>
                </li>
                {/* <li>
                  <Link to="edit-room">Edit Room</Link>
                </li> */}
                <li>
                  <Link to="add-room">Add Room</Link>
                </li>
              </ul>
            </li>
            <li>
            <Link to="all-bookings">
            <i className="fas fa-suitcase" /> <span>Bookings</span>
            </Link>
            </li>
            <li>
            <Link to="all-refunds">
            <i className="fas fa-undo" /> <span>Refunds</span>
            </Link>
            </li>

            {/* <li className="submenu">
              <a href="#" onClick={toggleEmployees}>
                <i className="fas fa-user" /> <span> Employees </span>
                <span className="menu-arrow" />
              </a>
              <ul
                className="submenu_class"
                style={{ display: openEmployees ? "block" : "none" }}
              >
                <li>
                  <Link to="/employees">Employees List</Link>
                </li>
              </ul>
            </li> */}
            <li>
            <Link to="reviews">
            <i className="far fa-star" /> <span>Reviews</span>
            </Link>
            </li>

            {/* <li>
              <Link to="pricing">
                <i className="far fa-money-bill-alt" /> <span>Pricing</span>
              </Link>
            </li> */}
            {/* <li>
              <Link to="/calendar">
                <i className="fas fa-calendar-alt" /> <span>Calendar</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
