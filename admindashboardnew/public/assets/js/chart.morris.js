// // $(document).ready(function () {
// //   if ($("#line-chart").length) {
// //     lineChart();
// //   }
// //   if ($("#donut-chart").length) {
// //     donutChart();
// //   }
// //   $(window).resize(function () {
// //     if ($("#line-chart").length) {
// //       window.lineChart.redraw();
// //     }
// //     if ($("#donut-chart").length) {
// //       window.donutChart.redraw();
// //     }
// //   });
// // });
// function lineChart() {
//   window.lineChart = Morris.Line({
//     element: "line-chart",
//     data: [
//       { y: "2006", a: 100, b: 90 },
//       { y: "2007", a: 75, b: 65 },
//       { y: "2008", a: 50, b: 40 },
//       { y: "2009", a: 75, b: 65 },
//       { y: "2010", a: 50, b: 40 },
//       { y: "2011", a: 75, b: 65 },
//       { y: "2012", a: 100, b: 90 },
//     ],
//     xkey: "y",
//     ykeys: ["a", "b"],
//     labels: ["Series A", "Series B"],
//     lineColors: ["#8bbe1b", "#cdc6c6"],
//     lineWidth: "3px",
//     resize: true,
//     redraw: true,
//   });
// }
// function donutChart() {
//   window.donutChart = Morris.Donut({
//     element: "donut-chart",
//     data: [
//       { label: "Normal Room", value: 50 },
//       { label: "Ac Room", value: 25 },
//       { label: "Special Room", value: 5 },
//       { label: "DoubleBed room", value: 10 },
//       { label: "Video Room", value: 10 },
//     ],
//     backgroundColor: "#f2f5fa",
//     labelColor: "#8bbe1b",
//     colors: ["#7ba818", "#8bbe1b", "#9bd41e", "#a8e12b"],
//     resize: true,
//     redraw: true,
//   });
// }
// // $(document).ready(function () {
// //   lineChart();
// //   donutChart();
// //   $(window).resize(function () {
// //     window.lineChart.redraw();
// //     window.donutChart.redraw();
// //   });
// // });
// // function lineChart() {
// //   fetch("http://localhost:5272/api/Booking/line-chart-data")
// //     .then((response) => response.json())
// //     .then((data) => {
// //       window.lineChart = Morris.Line({
// //         element: "line-chart",
// //         data: data,
// //         xkey: "y",
// //         ykeys: ["a"],
// //         labels: ["Series A"],
// //         lineColors: ["#8bbe1b"],
// //         lineWidth: "3px",
// //         resize: true,
// //         redraw: true,
// //       });
// //     })
// //     .catch((error) => console.error("Error fetching line chart data:", error));
// // }
// // function donutChart() {
// //   fetch("http://localhost:5272/api/Room/donut-chart-data")
// //     .then((response) => response.json())
// //     .then((data) => {
// //       window.donutChart = Morris.Donut({
// //         element: "donut-chart",
// //         data: data,
// //         backgroundColor: "#f2f5fa",
// //         labelColor: "#8bbe1b",
// //         colors: ["#7ba818", "#8bbe1b", "#9bd41e", "#a8e12b"],
// //         resize: true,
// //         redraw: true,
// //       });
// //     })
// //     .catch((error) => console.error("Error fetching donut chart data:", error));
// // }

