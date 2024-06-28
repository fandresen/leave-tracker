import { setAccessToken, setRefreshToken } from "@/lib/tokenService";
import { createSlice } from "@reduxjs/toolkit";

export interface authStateT {
    accesToken: string;
    refreshToken: string;
}

const initialState :authStateT = {
    accesToken:'',
    refreshToken:''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
     setToken: (state, action) => {
        setAccessToken(action.payload.accessToken)
        setRefreshToken(action.payload.refreshToken)
        state.accesToken = action.payload.accesToken;
        state.refreshToken = action.payload.refreshToken;
      },
    },
  });

  export const { setToken } = authSlice.actions;

  export default authSlice.reducer;