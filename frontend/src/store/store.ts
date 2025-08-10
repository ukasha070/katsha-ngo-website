import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchFormSlice from "./slice/searchFormSlice";
import appSidebarSlice from "./slice/appSidebarSlice";
import donationFormSlice from "./slice/donationFormSlice";


// Configure the Redux store
export const store = configureStore({
  reducer: combineReducers({
    appSidebar: appSidebarSlice.reducer,
    searchForm: searchFormSlice.reducer,
    donationForm: donationFormSlice.reducer,
  }),
  devTools: process.env.NODE_ENV !== "production",
});

// Types for state & dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
