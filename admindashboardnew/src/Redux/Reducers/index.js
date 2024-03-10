// reducers/index.js
import {
    SET_TOTAL_BOOKINGS,
    SET_AVAILABLE_ROOMS,
    SET_TOTAL_REVENUE,
    SET_LINE_CHART_DATA,
    SET_DONUT_CHART_DATA,
  } from '../Actions';
  
  const initialState = {
    totalBookings: 0,
    availableRooms: 0,
    totalRevenue: 0,
    lineChartData: [],
    donutChartData: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TOTAL_BOOKINGS:
        return {
          ...state,
          totalBookings: action.payload,
        };
      case SET_AVAILABLE_ROOMS:
        return {
          ...state,
          availableRooms: action.payload,
        };
      case SET_TOTAL_REVENUE:
        return {
          ...state,
          totalRevenue: action.payload,
        };
      case SET_LINE_CHART_DATA:
        return {
          ...state,
          lineChartData: action.payload,
        };
      case SET_DONUT_CHART_DATA:
        return {
          ...state,
          donutChartData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  