import { createSlice } from "@reduxjs/toolkit";

export interface themeState{
    dark:boolean
}
const initialState:themeState = {
    dark : false 
} 

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkMode(state){
            state.dark =!state.dark
        }
    }
})

export const { toggleDarkMode } = themeSlice.actions
export default themeSlice.reducer