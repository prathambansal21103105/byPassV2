import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';
import ridesSlice from './rides';
import loginSlice from './login';
import notificationSlice from './notifications';

const store=configureStore({
    reducer:{user:userSlice.reducer, rides:ridesSlice.reducer, login:loginSlice.reducer, notification:notificationSlice.reducer},
});

export default store;