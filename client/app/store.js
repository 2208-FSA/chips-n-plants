import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import ordersSlice from '../slices/ordersSlice';
import productsSlice from '../slices/productsSlice';
import singleProductSlice from '../slices/singleProductSlice';


const store = configureStore({
  reducer: { 
    auth: authReducer,
    products: productsSlice,
    singleProduct: singleProductSlice, 
    orders: ordersSlice
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
