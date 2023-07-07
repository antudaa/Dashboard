import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        isVisible: true,
    },
    reducers: {
        showNavbar: (state) => {
            state.isVisible = true;
        },
        hideNavbar: (state) => {
            state.isVisible = false;
        },
    },
});


export const { showNavbar, hideNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;