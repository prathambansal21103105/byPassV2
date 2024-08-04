import { createSlice } from "@reduxjs/toolkit";
export const userInitialState = { 
  username: "", 
  email: "", 
  mobileNumber: "", 
  password: "",
  city:"",
  code:"",
  car:"",
  type:"",
  color:"",
  carNum:"",
  rating:"",
  _id:"" 
};
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser(state, action) {
      state.username = action.payload?.username;
      state.email = action.payload?.email;
      state.mobileNumber = action.payload?.mobileNumber;
      state.password = action.payload?.password;
      state.city = action.payload?.city;
      state.code = action.payload?.code;
      state.car = action.payload?.car;
      state.type = action.payload?.type;
      state.color = action.payload?.color;
      state.carNum = action.payload?.carNum;
      state.rating = action.payload?.rating;
      state._id = action.payload?._id;
      // console.log("id");
      // console.log(state);
      // console.log(action);
      console.log("redux");
      console.log(state._id);
      console.log(action.payload.type);
    }
  },
});

export const userActions = userSlice.actions;
export default userSlice;
