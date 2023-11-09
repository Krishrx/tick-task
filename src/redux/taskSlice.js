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
                state.tasksCount = JSON.parse(localStorage.getItem("tickTask")).length;
            }
            else {
                const taskArray = [];
                taskArray.push(action.payload);
                localStorage.setItem("tickTask", JSON.stringify(taskArray));
                state.tasksCount = 1;
            }
        },
        toggleTask: (state, action) => {
            const id = action.payload.id;
            //console.log(id);
            const taskArray = JSON.parse(localStorage.getItem("tickTask"));
            const updatedTasks = taskArray.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            });
            localStorage.setItem("tickTask", JSON.stringify(updatedTasks));
        }
    }
})

export const { taskAdd,toggleTask } = taskSlice.actions;

export default taskSlice.reducer