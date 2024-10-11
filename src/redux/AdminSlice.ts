import { createSlice } from "@reduxjs/toolkit";

export interface stateT{
    noDepartement : boolean;
}
const initialState:stateT = {
    noDepartement : true
} 

const adminSlice = createSlice({
    name: 'conger',
    initialState,
    reducers: {
        setDepartement(state){
            state.noDepartement = false;
        },
       
    }
})

export const {setDepartement} = adminSlice.actions
export default adminSlice.reducer