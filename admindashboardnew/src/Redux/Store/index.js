// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers';

const store = configureStore({
    reducer: rootReducer, // pass the root reducer as an object
  });
export default store;
