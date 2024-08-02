import { createSlice } from "@reduxjs/toolkit";

export const initialLoginState = { 
    login: false 
}

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    setLogin(state, action) {
        state.login=action.payload.login;
        console.log(action);
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
