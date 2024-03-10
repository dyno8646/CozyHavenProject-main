// import React,{useState,useEffect} from 'react'

// function OwnerMain() {
//   console.log("Owner main");
//   const [totalBookings, setTotalBookings] = useState(0);
//   const [availableRooms, setAvailableRooms] = useState(0);
//   const [totalRevenue, setTotalRevenue] = useState(0);
//   useEffect(() => {
//     fetch("http://localhost:5272/api/Booking/TotalBookings")
//       .then((response) => response.json())
//       .then((data) => setTotalBookings(data))
//       .catch((error) => console.error("Error fetching total bookings:", error));
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
//           {/* Section3 */}
//           {/* <div className="row">
//             <div className="col-md-12 d-flex">
//               <div className="card card-table flex-fill">
//                 <div className="card-header">
//                   <h4 className="card-title float-left mt-2">Booking</h4>
//                   <button
//                     type="button"
//                     className="btn btn-primary float-right veiwbutton"
//                   >
//                     Veiw All
//                   </button>
//                 </div>
//                 <div className="card-body">
//                   <div className="table-responsive">
//                     <table className="table table-hover table-center">
//                       <thead>
//                         <tr>
//                           <th>Booking ID</th>
//                           <th>Name</th>
//                           <th>Email ID</th>
//                           <th>Aadhar Number</th>
//                           <th className="text-center">Room Type</th>
//                           <th className="text-right">Number</th>
//                           <th className="text-center">Status</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className="text-nowrap">
//                             <div>BKG-0001</div>
//                           </td>
//                           <td className="text-nowrap">Tommy Bernal</td>
//                           <td>
//                             <a
//                               href="/cdn-cgi/l/email-protection"
//                               className="__cf_email__"
//                               data-cfemail="3743585a5a4e55524559565b77524f565a475b521954585a"
//                             >
//                               [email&nbsp;protected]
//                             </a>
//                           </td>
//                           <td>12414786454545</td>
//                           <td className="text-center">Double</td>
//                           <td className="text-right">
//                             <div>631-254-6480</div>
//                           </td>
//                           <td className="text-center">
                            
//                             <span className="badge badge-pill bg-success inv-badge">
//                               INACTIVE
//                             </span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-nowrap">
//                             <div>BKG-0002</div>
//                           </td>
//                           <td className="text-nowrap">Ellen Thill</td>
//                           <td>
//                             <a
//                               href="/cdn-cgi/l/email-protection"
//                               className="__cf_email__"
//                               data-cfemail="89fbe0eae1e8fbedebfbe6ebfafdc9ecf1e8e4f9e5eca7eae6e4"
//                             >
//                               [email&nbsp;protected]
//                             </a>
//                           </td>
//                           <td>5456223232322</td>
//                           <td className="text-center">Double</td>
//                           <td className="text-right">
//                             <div>830-468-1042</div>
//                           </td>
//                           <td className="text-center">
                            
//                             <span className="badge badge-pill bg-success inv-badge">
//                               INACTIVE
//                             </span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-nowrap">
//                             <div>BKG-0003</div>
//                           </td>
//                           <td className="text-nowrap">Corina Kelsey</td>
//                           <td>
//                             <a
//                               href="/cdn-cgi/l/email-protection"
//                               className="__cf_email__"
//                               data-cfemail="76131a1a1318021e1f1a1a36130e171b061a135815191b"
//                             >
//                               [email&nbsp;protected]
//                             </a>
//                           </td>
//                           <td>454543232625</td>
//                           <td className="text-center">Single</td>
//                           <td className="text-right">
//                             <div>508-335-5531</div>
//                           </td>
//                           <td className="text-center">
                            
//                             <span className="badge badge-pill bg-success inv-badge">
//                               INACTIVE
//                             </span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-nowrap">
//                             <div>BKG-0004</div>
//                           </td>
//                           <td className="text-nowrap">Carolyn Lane</td>
//                           <td>
//                             <a
//                               href="/cdn-cgi/l/email-protection"
//                               className="__cf_email__"
//                               data-cfemail="50333f22393e313b353c23352910373d31393c7e333f3d"
//                             >
//                               [email&nbsp;protected]
//                             </a>
//                           </td>
//                           <td>2368989562621</td>
//                           <td className="text-center">Double</td>
//                           <td className="text-right">
//                             <div>262-260-1170</div>
//                           </td>
//                           <td className="text-center">
                            
//                             <span className="badge badge-pill bg-success inv-badge">
//                               INACTIVE
//                             </span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-nowrap">
//                             <div>BKG-0005</div>
//                           </td>
//                           <td className="text-nowrap">Denise</td>
//                           <td>
//                             <a
//                               href="/cdn-cgi/l/email-protection"
//                               className="__cf_email__"
//                               data-cfemail="1c7f7d6e73706572707d72795c7b717d7570327f7371"
//                             >
//                               [email&nbsp;protected]
//                             </a>
//                           </td>
//                           <td>3245455582287</td>
//                           <td className="text-center">Single</td>
//                           <td className="text-right">
//                             <div>570-458-0070</div>
//                           </td>
//                           <td className="text-center">
                            
//                             <span className="badge badge-pill bg-success inv-badge">
//                               INACTIVE
//                             </span>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//               </div>
//               </div> */}
//               </div>
//               </div>
            
          
//   )
// }

// export default OwnerMain;
import React, { useEffect,useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalBookings, setAvailableRooms, setTotalRevenue, setLineChartData, setDonutChartData } from '../../Redux/Actions';
function OwnerMain() {
  console.log("Main");
  const dispatch = useDispatch();
  const totalBookings = useSelector((state) => state.totalBookings);
  const availableRooms = useSelector((state) => state.availableRooms);
  const totalRevenue = useSelector((state) => state.totalRevenue);
  const lineChartData = useSelector((state) => state.lineChartData);
  const donutChartData = useSelector((state) => state.donutChartData);
  const lineChartRef = useRef(null);
  const donutChartRef = useRef(null);
  const hotelId=sessionStorage.getItem('selectedHotelId');

  useEffect(() => {
    fetch(`http://localhost:5272/api/Booking/GetHotelBookingsCount?hotelId=${hotelId}`)
      .then((response) => response.json())
      .then((data) => dispatch(setTotalBookings(data)))
      .catch((error) => console.error("Error fetching total bookings:", error));
    
    fetch(`http://localhost:5272/api/Hotel/AvailableRoomsCount?hotelId=${hotelId}`)
      .then((response) => response.json())
      .then((data) => dispatch(setAvailableRooms(data)))
      .catch((error) => console.error("Error fetching available rooms:", error));
    
    fetch(`http://localhost:5272/api/Booking/GetHotelCollections?hotelId=${hotelId}`)
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
  }, [dispatch,hotelId]);

  useEffect(() => {
    if (lineChartRef.current && lineChartData.length > 0) {
      Morris.Line({
        element: lineChartRef.current,
        data: lineChartData,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
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

export default OwnerMain;