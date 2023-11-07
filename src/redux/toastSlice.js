import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        showToast: false,
        typeOfToast: '',
        messageOnToast:''
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
        }
    }
})

export const { handleToast,clearToast } = toastSlice.actions;
export default toastSlice.reducer;