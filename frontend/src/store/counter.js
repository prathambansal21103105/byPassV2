import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{counter:0,visibility:true},
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter=state.counter+action.payload;
        },
        toggle(state){
            state.visibility=!state.visibility;
        },
    }
});

export const counterActions=counterSlice.actions;
export default counterSlice;