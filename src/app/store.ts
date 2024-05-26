// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import HomePageReducer from "./screens/HomePage/slice";
// import reduxLogger from 'redux-logger';
// import RestaurantPageReducer from './screens/RestaurantPage/slice';


// export const store = configureStore({
//   middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(reduxLogger),
//   reducer: {
//     homePage: HomePageReducer,
//     restaurantPage: RestaurantPageReducer
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;


import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
//import reduxLogger from 'redux-logger'; // Import redux-logger middleware if it's not already imported
import counterReducer from '../features/counter/counterSlice';
import HomePageReducer from "./screens/HomePage/slice";
import RestaurantPageReducer from './screens/RestaurantPage/slice';
import OrdersPageReducer from './components/orders/slice';

// Import any other necessary middleware or types

export const store = configureStore({
 
  reducer: {
    counter: counterReducer, 
    homePage: HomePageReducer, 
    restaurantPage: RestaurantPageReducer,

    ordersPage: OrdersPageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
