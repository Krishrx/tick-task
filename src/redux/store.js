import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './taskSlice'
import toastReducer from './toastSlice'
export default configureStore({
    reducer: {
        task: taskReducer,
        toast: toastReducer,
    }
})