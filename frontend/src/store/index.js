import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';
import ridesSlice from './rides';
import loginSlice from './login';

const store=configureStore({
    reducer:{user:userSlice.reducer, rides:ridesSlice.reducer, login:loginSlice.reducer},
});

export default store;