import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "", email: "", phone: "", password: "" },
  reducers: {
    setUser(state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.password = action.payload.password;
      console.log(action);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
