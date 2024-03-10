// actions/index.js
export const SET_TOTAL_BOOKINGS = 'SET_TOTAL_BOOKINGS';
export const SET_AVAILABLE_ROOMS = 'SET_AVAILABLE_ROOMS';
export const SET_TOTAL_REVENUE = 'SET_TOTAL_REVENUE';
export const SET_LINE_CHART_DATA = 'SET_LINE_CHART_DATA';
export const SET_DONUT_CHART_DATA = 'SET_DONUT_CHART_DATA';

export const setTotalBookings = (data) => ({
  type: SET_TOTAL_BOOKINGS,
  payload: data,
});

export const setAvailableRooms = (data) => ({
  type: SET_AVAILABLE_ROOMS,
  payload: data,
});

export const setTotalRevenue = (data) => ({
  type: SET_TOTAL_REVENUE,
  payload: data,
});

export const setLineChartData = (data) => ({
  type: SET_LINE_CHART_DATA,
  payload: data,
});

export const setDonutChartData = (data) => ({
  type: SET_DONUT_CHART_DATA,
  payload: data,
});
