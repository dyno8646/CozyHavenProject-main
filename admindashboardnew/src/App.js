//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import Header from './Components/HotelAdminDashboard/Header';
import Sidebar from './Components/HotelAdminDashboard/Sidebar';
import Main from './Components/HotelAdminDashboard/Main';
import AllBookings from './Components/HotelAdminDashboard/Pages/AllBookings';
import './App.css';
import AddBooking from './Components/HotelAdminDashboard/Pages/AddBooking';
import EditBooking from './Components/HotelAdminDashboard/Pages/EditBooking';
import Pricing from './Components/HotelAdminDashboard/Pages/Pricing';
import AllUsers from './Components/HotelAdminDashboard/Pages/AllUsers';
import AddUser from './Components/HotelAdminDashboard/Pages/AddUser';
import EditUser from './Components/HotelAdminDashboard/Pages/EditUser';
import AllHotels from './Components/HotelAdminDashboard/Pages/AllHotels';
import AddHotel from './Components/HotelAdminDashboard/Pages/AddHotel';
import EditHotel from './Components/HotelAdminDashboard/Pages/EditHotel';
import Reviews from './Components/HotelAdminDashboard/Pages/Reviews';
import OwnerHeader from './Components/HotelOwnerDashboard/OwnerHeader';
import OwnerSidebar from './Components/HotelOwnerDashboard/OwnerSidebar';
import OwnerMain from './Components/HotelOwnerDashboard/OwnerMain'
import HotelBookings from './Components/HotelOwnerDashboard/Pages/HotelBookings';
import Login from './Components/Login/Login';
import AllRooms from './Components/HotelOwnerDashboard/Pages/AllRooms';
import AddRoom from './Components/HotelOwnerDashboard/Pages/AddRoom';
import EditRoom from './Components/HotelOwnerDashboard/Pages/EditRoom';
import Refunds from './Components/HotelOwnerDashboard/Pages/Refunds';
import HotelReviews from './Components/HotelOwnerDashboard/Pages/HotelReviews';
import OwnedHotels from './Components/HotelOwnerDashboard/Pages/OwnedHotels';
import Profile from './Components/Profile';
import Error from './Components/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
        <Route path="/owner-dashboard/*" element={<OwnerDashboard />} />
        <Route path="/owned-hotels/*" element={<OwnedHotels/>}/>
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

function AdminDashboard() {
  const isLoggedIn = sessionStorage.getItem('token');

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Header />
      <Sidebar />
      <Routes key="admin-dashboard-routes">
        <Route index element={<Main />} />
        <Route path="all-bookings" element={<AllBookings />} />
        <Route path="add-booking" element={<AddBooking />} />
        <Route path="all-bookings/edit-booking/:bookingId" element={<EditBooking />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="all-users" element={<AllUsers />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="all-users/edit-user/:username" element={<EditUser />} />
        <Route path="all-hotels" element={<AllHotels />} />
        <Route path="add-hotel" element={<AddHotel />} />
        <Route path="all-hotels/edit-hotel/:hotelId" element={<EditHotel />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="profile" element={<Profile/>}/>
        <Route path="*" element={<Error />} />
        </Routes>
    </>
  );
}

function OwnerDashboard() {
  const isLoggedIn = sessionStorage.getItem('token');

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <OwnerHeader />
      <OwnerSidebar />
      <Routes key="owner-dashboard-routes">
        <Route index element={<OwnerMain />} />
        <Route path="all-bookings" element={<HotelBookings/>}/>
        <Route path="all-rooms" element={<AllRooms/>}/>
        <Route path="add-room" element={<AddRoom/>}/>
        <Route path="all-rooms/edit-room/:roomId" element={<EditRoom/>}/>
        <Route path="all-refunds" element={<Refunds/>}/>
        <Route path="reviews" element={<HotelReviews/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

