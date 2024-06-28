import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

export const store = configureStore({
    reducer :{
        authSlice : authSlice,
    }
})

export type AppDispatch = typeof store.dispatch;
export type Rootstate = ReturnType<typeof store.getState>;