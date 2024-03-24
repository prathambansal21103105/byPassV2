import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "", name: "", email: "", phone: "" },
  reducers: {
    setUser(state, userData) {
      state.username = userData.username;
      state.email = userData.email;
      state.name = userData.name;
      state.phone = userData.phone;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
