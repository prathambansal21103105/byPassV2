import { createSlice } from "@reduxjs/toolkit";
export const initialNotificationState = { 
  show:false,
  hostRides:[], 
  guestRides:[],
};
const notificationSlice = createSlice({
  name: "notification",
  initialState: initialNotificationState,
  reducers: {
    setShow(state,action){
      state.show=action.payload.show;
      console.log(action.payload.show);
    },
    setHostRides(state,action){
      state.hostRides=action.payload.driver;
      console.log(action.payload.driver);
    },
    setGuestRides(state,action){
      state.guestRides=action.payload.passenger;
      console.log(action.payload.passenger);
    },
    addHostRide(state,action){
        state.hostRides=[...state.hostRides, action.payload.ride];
        console.log(state.hostRides);
    },
    addGuestRide(state,action){
        state.guestRides=[...state.guestRides, action.payload.ride];
    }
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;
