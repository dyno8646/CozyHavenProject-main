// import React,{useState,useEffect} from 'react'

// function Main() {
//   console.log("main component");
//   const [totalBookings, setTotalBookings] = useState(0);
//   const [availableRooms, setAvailableRooms] = useState(0);
//   const [totalRevenue, setTotalRevenue] = useState(0);
//   useEffect(() => {
//     fetch("http://localhost:5272/api/Booking/TotalBookings")
//       .then((response) => response.json())
//       .then((data) => setTotalBookings(data))
//       .catch((error) => console.error("Error fetching total bookings:", error));
//       console.log("Bookings");
//   }, []);
//   useEffect(() => {
//     fetch("http://localhost:5272/api/Room/AvailableRoomsCount")
//       .then((response) => response.json())
//       .then((data) => setAvailableRooms(data))
//       .catch((error) => console.error("Error fetching available rooms:", error));
//   }, []);
//   useEffect(() => {
//     fetch("http://localhost:5272/api/Booking/TotalRevenue")
//       .then((response) => response.json())
//       .then((data) => setTotalRevenue(data))
//       .catch((error) => console.error("Error fetching total revenue:", error));
//   }, []); 
//   const username=sessionStorage.getItem('username'); 
    
//   return (
//     <div className="page-wrapper">
//         <div className="content container-fluid">
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12 mt-5">
//                 <h3 className="page-title mt-3">Hello {username}</h3>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-xl-4 col-sm-12 col-12">
//               <div className="card board1 fill">
//                 <div className="card-body">
//                   <div className="dash-widget-header">
//                     <div>
//                       <h3 className="card_widget_header">{totalBookings}</h3>
//                       <h6 className="text-muted">Total Booking</h6>
//                     </div>
//                     <div className="ml-auto mt-md-3 mt-lg-0">
                      
//                       <span className="opacity-7 text-muted">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={24}
//                           height={24}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="#8bbe1b"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-user-plus"
//                         >
//                           <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                           <circle cx="8.5" cy={7} r={4} />
//                           <line x1={20} y1={8} x2={20} y2={14} />
//                           <line x1={23} y1={11} x2={17} y2={11} />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-4 col-sm-12 col-12">
//               <div className="card board1 fill">
//                 <div className="card-body">
//                   <div className="dash-widget-header">
//                     <div>
//                       <h3 className="card_widget_header">{availableRooms}</h3>
//                       <h6 className="text-muted">Available Rooms</h6>
//                     </div>
//                     <div className="ml-auto mt-md-3 mt-lg-0">
                      
//                       <span className="opacity-7 text-muted">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={24}
//                           height={24}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="#8bbe1b"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-dollar-sign"
//                         >
//                           <line x1={12} y1={1} x2={12} y2={23} />
//                           <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-4 col-sm-12 col-12">
//               <div className="card board1 fill">
//                 <div className="card-body">
//                   <div className="dash-widget-header">
//                     <div>
//                       <h3 className="card_widget_header">{totalRevenue}</h3>
//                       <h6 className="text-muted">Collections</h6>
//                     </div>
//                     <div className="ml-auto mt-md-3 mt-lg-0">
                      
//                       <span className="opacity-7 text-muted">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={24}
//                           height={24}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="#8bbe1b"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-globe"
//                         >
//                           <circle cx={12} cy={12} r={10} />
//                           <line x1={2} y1={12} x2={22} y2={12} />
//                           <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Section2 */}
//           <div className="row">
//             <div className="col-md-12 col-lg-6">
//               <div className="card card-chart">
//                 <div className="card-header">
//                   <h4 className="card-title">VISITORS</h4>
//                 </div>
//                 <div className="card-body">
//                   <div id="line-chart" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-12 col-lg-6">
//               <div className="card card-chart">
//                 <div className="card-header">
//                   <h4 className="card-title">ROOMS BOOKED</h4>
//                 </div>
//                 <div className="card-body">
//                   <div id="donut-chart" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
            
          
//   )
// }

// export default Main;

// Main.js
import React, { useEffect,useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalBookings, setAvailableRooms, setTotalRevenue, setLineChartData, setDonutChartData } from '../../Redux/Actions';
function Main() {
  const dispatch = useDispatch();
  const totalBookings = useSelector((state) => state.totalBookings);
  const availableRooms = useSelector((state) => state.availableRooms);
  const totalRevenue = useSelector((state) => state.totalRevenue);
  const lineChartData = useSelector((state) => state.lineChartData);
  const donutChartData = useSelector((state) => state.donutChartData);
  const lineChartRef = useRef(null);
  const donutChartRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5272/api/Booking/TotalBookings")
      .then((response) => response.json())
      .then((data) => dispatch(setTotalBookings(data)))
      .catch((error) => console.error("Error fetching total bookings:", error));
    
    fetch("http://localhost:5272/api/Room/AvailableRoomsCount")
      .then((response) => response.json())
      .then((data) => dispatch(setAvailableRooms(data)))
      .catch((error) => console.error("Error fetching available rooms:", error));
    
    fetch("http://localhost:5272/api/Booking/TotalRevenue")
      .then((response) => response.json())
      .then((data) => dispatch(setTotalRevenue(data)))
      .catch((error) => console.error("Error fetching total revenue:", error));

    fetch("http://localhost:5272/api/Booking/line-chart-data")
      .then((response) => response.json())
      .then((data) => dispatch(setLineChartData(data)))
      .catch((error) => console.error("Error fetching line chart data:", error));

    fetch("http://localhost:5272/api/Room/donut-chart-data")
      .then((response) => response.json())
      .then((data) => dispatch(setDonutChartData(data)))
      .catch((error) => console.error("Error fetching donut chart data:", error));
  }, [dispatch]);

  useEffect(() => {
    if (lineChartRef.current && lineChartData.length > 0) {
      Morris.Line({
        element: lineChartRef.current,
        data: lineChartData,
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        lineColors: ['#8bbe1b', '#cdc6c6'],
        lineWidth: '3px',
        resize: true,
      });
    }
  }, [lineChartRef, lineChartData]);

  useEffect(() => {
    if (donutChartRef.current && donutChartData.length > 0) {
      Morris.Donut({
        element: donutChartRef.current,
        data: donutChartData,
        backgroundColor: '#f2f5fa',
        labelColor: '#8bbe1b',
        colors: ['#7ba818', '#8bbe1b', '#9bd41e', '#a8e12b'],
        resize: true,
      });
    }
  }, [donutChartRef, donutChartData]);

  const username=sessionStorage.getItem('username');

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12 mt-5">
              <h3 className="page-title mt-3">Hello {username}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-sm-12 col-12">
            <div className="card board1 fill">
              <div className="card-body">
                <div className="dash-widget-header">
                  <div>
                    <h3 className="card_widget_header">{totalBookings}</h3>
                    <h6 className="text-muted">Total Booking</h6>
                  </div>
                  <div className="ml-auto mt-md-3 mt-lg-0">
                    <span className="opacity-7 text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#8bbe1b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <line x1={20} y1={8} x2={20} y2={14} />
                        <line x1={23} y1={11} x2={17} y2={11} />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12 col-12">
            <div className="card board1 fill">
              <div className="card-body">
                <div className="dash-widget-header">
                  <div>
                    <h3 className="card_widget_header">{availableRooms}</h3>
                    <h6 className="text-muted">Available Rooms</h6>
                  </div>
                  <div className="ml-auto mt-md-3 mt-lg-0">
                    <span className="opacity-7 text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#8bbe1b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign">
                        <line x1={12} y1={1} x2={12} y2={23} />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12 col-12">
            <div className="card board1 fill">
              <div className="card-body">
                <div className="dash-widget-header">
                  <div>
                    <h3 className="card_widget_header">{totalRevenue}</h3>
                    <h6 className="text-muted">Collections</h6>
                  </div>
                  <div className="ml-auto mt-md-3 mt-lg-0">
                    <span className="opacity-7 text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#8bbe1b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
                        <circle cx={12} cy={12} r={10} />
                        <line x1={2} y1={12} x2={22} y2={12} />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section2 */}
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">BOOKINGS</h4>
              </div>
              <div className="card-body">
                <div ref={lineChartRef} />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">ROOMS BOOKED</h4>
              </div>
              <div className="card-body">
                <div ref={donutChartRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

