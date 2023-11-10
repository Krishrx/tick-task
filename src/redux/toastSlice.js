import { createSlice } from "@reduxjs/toolkit";
import { getThemeState } from '../utils/getThemeState';

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        showToast: false,
        typeOfToast: '',
        messageOnToast: '',
        isDark: getThemeState(),
    },
    reducers: {
        handleToast: (state,action) => {
            const { typeOfToast, messageOnToast } = action.payload;
            state.showToast = true;
            state.typeOfToast = typeOfToast;
            state.messageOnToast = messageOnToast;
        },
        clearToast: (state) => {
            state.showToast = false;
            state.typeOfToast = '';
            state.messageOnToast = '';
        },
        toggleTheme: (state) => {
            state.isDark = !state.isDark;
            localStorage.setItem('tickTaskDark', state.isDark+"");
        }
    }
})

export const { handleToast, clearToast, toggleTheme } = toastSlice.actions;
export default toastSlice.reducer;