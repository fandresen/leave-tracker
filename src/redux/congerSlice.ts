import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface stateT{
    soldeConger : number;
}
const initialState:stateT = {
    soldeConger : 0
} 

const congerSlice = createSlice({
    name: 'conger',
    initialState,
    reducers: {
        setSoldeConger(state,action:PayloadAction<number>){
            state.soldeConger = action.payload;
        },
       
    }
})

export const {setSoldeConger} = congerSlice.actions
export default congerSlice.reducer