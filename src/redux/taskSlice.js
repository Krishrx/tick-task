import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        id: '',
        taskField: '',
        priority: '',
        completed:false
    },
    reducers: {
        taskAdd: (state, action) => {
            const { taskField, priority } = action.payload;
            state.id = nanoid();
            state.taskField = taskField;
            state.priority = priority;
            state.completed = false;
            alert(`Task: ${state.taskField}, Priority: ${state.priority} ${state.id} completed: ${state.completed}`);
        }
    }
})

export const { taskAdd } = taskSlice.actions;

export default taskSlice.reducer