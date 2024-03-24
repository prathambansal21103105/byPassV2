import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';
import ridesSlice from './rides';

const store=configureStore({
    reducer:{user:userSlice.reducer, rides:ridesSlice.reducer},
});

export default store;