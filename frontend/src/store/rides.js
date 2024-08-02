import { createSlice } from "@reduxjs/toolkit";
export const initialRideState = { 
  rides:[], 
  hostRides:[], 
  guestRides:[],
  search:false 
};
const ridesSlice = createSlice({
  name: "rides",
  initialState: initialRideState,
  reducers: {
    setSearch(state,action){
      state.search=action.payload.search;
    },
    setRides(state,action){
      state.rides=action.payload.rides;
    },
    setHostRides(state,action){
      state.hostRides=action.payload.hostRides;
      console.log(action);
    },
    setGuestRides(state,action){
      state.guestRides=action.payload.guestRides;
      console.log(action);
    }
  },
});

export const ridesActions = ridesSlice.actions;
export default ridesSlice;
