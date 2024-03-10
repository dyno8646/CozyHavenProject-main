// import React from 'react'
// import { Line,Doughnut } from 'react-chartjs-2';
// function Charts() {
//   return (
//           <div className="row">
//             <div className="col-md-12 col-lg-6">
//               <div className="card card-chart">
//                 <div className="card-header">
//                   <h4 className="card-title">VISITORS</h4>
//                 </div>
//                 <div className="card-body">
//                   <Line
//                    data={{
//                     labels:["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
//                     datasets: [{
//                       label: 'Series A',
//                       data: [100, 75, 50, 75, 50, 75, 100],
//                       borderColor: "#8bbe1b",
//                       backgroundColor: 'rgba(0, 0, 0, 0)',
//                       borderWidth: 3
//                     }, {
//                       label: 'Series B',
//                       data: [90, 65, 40, 65, 40, 65, 90],
//                       borderColor: "#cdc6c6",
//                       backgroundColor: 'rgba(0, 0, 0, 0)',
//                       borderWidth: 3
//                     }],
                    
//                    }}
//                    options={{
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     plugins: {
//                       tooltip: {
//                         displayColors: false,
//                         backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                         titleFont: { weight: 'bold' },
//                         bodyFont: { color: '#666' },
//                         borderColor: 'rgba(230, 230, 230, 0.8)',
//                         borderWidth: 2,
//                         borderRadius: 10,
//                         padding: 6,
//                       },
//                     },
//                   }}
                   

//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-12 col-lg-6">
//               <div className="card card-chart">
//                 <div className="card-header">
//                   <h4 className="card-title">ROOMS BOOKED</h4>
//                 </div>
//                 <div className="card-body">
//                   <Doughnut
//                    data={{
//                     labels:["Normal Room", "Ac Room", "Special Room", "DoubleBed room", "Video Room"],
//                     datasets: [{
//                       label: 'Rooms',
//                       data: [50, 25, 5, 10, 10],
//                       backgroundColor: ["#7ba818", "#8bbe1b", "#9bd41e", "#a8e12b"],
//                     }],
//                    }}
//                    options={{
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     plugins: {
//                       tooltip: {
//                         displayColors: false,
//                         backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                         titleFont: { weight: 'bold' },
//                         bodyFont: { color: '#666' },
//                         borderColor: 'rgba(230, 230, 230, 0.8)',
//                         borderWidth: 2,
//                         borderRadius: 10,
//                         padding: 6,
//                       },
//                     },
//                   }}
                   
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
              
              
          
//   )
// }


// export default Charts