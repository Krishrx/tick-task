import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sortTasks } from "../utils/sortTasks";
export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        id: '',
        taskField: '',
        priority: '',
        completed: false,
        tasksCount: JSON.parse(localStorage.getItem("tickTask")) === null ? 0 : JSON.parse(localStorage.getItem("tickTask")).length,
    },
    reducers: {
        taskAdd: (state, action) => {
            const { taskField, priority } = action.payload;
            state.id = nanoid();
            state.taskField = taskField;
            state.priority = priority;
            state.completed = false;
            if (localStorage.getItem("tickTask") !== null) {
                const taskArray = JSON.parse(localStorage.getItem("tickTask"));
                taskArray.push(state);
                sortTasks(taskArray);
                localStorage.setItem("tickTask", JSON.stringify(taskArray));
                state.tasksCount = taskArray.length;
            }
            else {
                const taskArray = [];
                taskArray.push(state);
                localStorage.setItem("tickTask", JSON.stringify(taskArray));
                state.tasksCount = 1;
            }
        }
    }
})

export const { taskAdd } = taskSlice.actions;

export default taskSlice.reducer