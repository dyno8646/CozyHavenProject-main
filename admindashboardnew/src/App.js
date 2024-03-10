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
// ---------------------------------------------------------------------
import HomePage from './Components/HomePage/HomePage';
import UserDash from './Components/UserDashBoard/UserDash';
import HotelsPage from './Components/Hotels/HotelsPage';
import RoomsPage from './Components/Rooms/RoomsPage';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import Register from './Components/Register/Register';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import { Gallery } from './Components/Gallery/Gallery';
import Booking from './Components/Bookings/Booking';
import Payment from './Components/Payments/Payment';
import BookingHistory from './Components/ManageBooking/BookingHistory';
import RescheduleBooking from './Components/RescheduleBooking/RescheduleBooking';
import PaymentPage from './Components/Payments/Payment2';
import HotelReviews1 from './Components/Reviews/HotelReviews';
import UserReviews from './Components/Reviews/UserReviews';
import HotelImages from './Components/Images/HotelImages';
import RoomImages from './Components/Images/RoomImages';
import FoodBlog from './Components/FoodBlog/FoodBlog';
import ReviewForm from './Components/Reviews/ReviewForm';
import EditReview from './Components/Reviews/EditReview';
import { SearchBar2 } from './Components/UserDashBoard/Searchbar2/SearchBar2';
import FourOhFour from './Components/ErrorPage/Error';
import PreLanding from './Components/HomePage/PreLanding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
        <Route path="/owner-dashboard/*" element={<OwnerDashboard />} />
        <Route path="/owned-hotels/*" element={<OwnedHotels/>}/>
        <Route path="/login" element={<Login />} />
        {/*-------------------------------------------------------*/}
        <Route path="/prelanding" element={<PreLanding />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/foodblog" element={<FoodBlog />} />
          <Route path="/roompage" element={<RoomsPage />} />
          <Route path="/hotelReviews" element={<HotelReviews1/>} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/hotelimages" element={<HotelImages />} />
          <Route path="/roomimages" element={<RoomImages />} />
          <Route path="/error" element={<FourOhFour />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path='/UserDash' element={<UserDash />} />
            <Route path='/search' element={<SearchBar2 />} />
            <Route path="/userReviews" element={<UserReviews/>} />
            <Route path="/bookingHistory" element={<BookingHistory />} />
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/hotelimages" element={<HotelImages />} />
            <Route path="/roomimages" element={<RoomImages />} />
            <Route path="/hotelReviews" element={<HotelReviews1/>} />
            <Route path="/roompage" element={<RoomsPage />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/reschedule" element={<RescheduleBooking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/paymentPage" element={<Payment/>} />
            <Route path="/payment2" element={<PaymentPage />} />
            <Route path="/addreview" element={<ReviewForm />} />
            <Route path="/editreview" element={<EditReview />} />
          </Route>
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

