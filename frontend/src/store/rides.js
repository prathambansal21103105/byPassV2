import { createSlice } from "@reduxjs/toolkit";

const ridesSlice = createSlice({
  name: "rides",
  initialState: { availabe: [] },
  reducers: {
    async fetchRides(state) {
      //fetch rides call to backend
      const res = await fetch("http://localhost:4000/fetchRides");
      const data = await res.json();
      state.availabe = data;
    },
  },
});

export const ridesActions = ridesSlice.actions;
export default ridesSlice;
