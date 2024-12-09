import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface stateT{
    isOpen:boolean;
    startDate:Date;
}
const initialState:stateT = {
    isOpen:false,
    startDate: new Date()
} 

const demandeAbsenceSlice = createSlice({
    name: 'demande_Absence',
    initialState,
    reducers: {
        toggleModal(state,action:PayloadAction<boolean>){
            state.isOpen = action.payload;
        },
        setStartDate(state,action:PayloadAction<string>){
            const newdate = new Date(action.payload)
            console.log(newdate);
            state.startDate = newdate;
        }
    }
})

export const { toggleModal,setStartDate } = demandeAbsenceSlice.actions
export default demandeAbsenceSlice.reducer