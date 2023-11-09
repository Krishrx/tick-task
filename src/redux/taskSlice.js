import { createSlice } from "@reduxjs/toolkit";
import { sortTasks } from "../utils/sortTasks";
export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: JSON.parse(localStorage.getItem("tickTask")) === null ? [] : JSON.parse(localStorage.getItem("tickTask")),
        tasksCount: JSON.parse(localStorage.getItem("tickTask")) === null ? 0 : JSON.parse(localStorage.getItem("tickTask")).length,
    },
    reducers: {
        taskAdd: (state, action) => {
           // const { id, taskField, priority, completed } = action.payload;
            if (state.tasksCount!==0) {
                state.tasks.push(action.payload);
                sortTasks(state.tasks);
                localStorage.setItem("tickTask", JSON.stringify(state.tasks));
                state.tasksCount = state.tasks.length;
            }
            else {
                state.tasks.push(action.payload);
                localStorage.setItem("tickTask", JSON.stringify(state.tasks));
                state.tasksCount = 1;
            }
        },
        toggleTask: (state, action) => {
            const id = action.payload.id;
            //console.log(id);
            state.tasks = state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            });
            localStorage.setItem("tickTask", JSON.stringify(state.tasks));
        }
    }
})

export const { taskAdd,toggleTask } = taskSlice.actions;

export default taskSlice.reducer