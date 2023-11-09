import { createSlice } from "@reduxjs/toolkit";
import { sortTasks } from "../utils/sortTasks";
export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasksCount: JSON.parse(localStorage.getItem("tickTask")) === null ? 0 : JSON.parse(localStorage.getItem("tickTask")).length,
    },
    reducers: {
        taskAdd: (state, action) => {
           // const { id, taskField, priority, completed } = action.payload;
            if (localStorage.getItem("tickTask") !== null) {
                const taskArray = JSON.parse(localStorage.getItem("tickTask"));
                taskArray.push(action.payload);
                sortTasks(taskArray);
                localStorage.setItem("tickTask", JSON.stringify(taskArray));
                state.tasksCount +=1;
            }
            else {
                const taskArray = [];
                taskArray.push(action.payload);
                localStorage.setItem("tickTask", JSON.stringify(taskArray));
                state.tasksCount = 1;
            }
        }
    }
})

export const { taskAdd } = taskSlice.actions;

export default taskSlice.reducer