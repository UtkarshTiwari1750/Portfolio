import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currSection: 'Home',
}

const navSlice = createSlice({
    name: 'nav',
    initialState: initialState,
    reducers: {
        setCurrSection(state, value) {
            state.currSection = value.payload;
        }
    }
})

export const {setCurrSection} = navSlice.actions;
export default navSlice.reducer;