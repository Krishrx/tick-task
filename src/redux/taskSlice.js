import { createSlice } from "@reduxjs/toolkit";
import { sortTasks } from "../utils/sortTasks";
export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: JSON.parse(localStorage.getItem("tickTask")) === null ? [] : JSON.parse(localStorage.getItem("tickTask")),
        tasksCount: JSON.parse(localStorage.getItem("tickTask")) === null ? 0 : JSON.parse(localStorage.getItem("tickTask")).length,
        editTaskFields: {
            id: '',
            completed: false,
            taskField: '',
            priority:''
        },
        onEdit:false
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
        },
        setEditMode: (state, action) => {
            const { id, taskField, priority, completed } = action.payload;
            state.onEdit = true;
            state.editTaskFields.id = id;
            state.editTaskFields.taskField = taskField;
            state.editTaskFields.priority = priority;
            state.editTaskFields.completed = completed;
        },
        editTask: (state, action) => {
            const { taskField, priority } = action.payload;
            const id = state.editTaskFields.id;
            const completed = state.editTaskFields.completed;
            state.tasks = state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        id,
                        taskField,
                        priority,
                        completed
                    };
                }
                return task;
            });
            sortTasks(state.tasks);
            localStorage.setItem("tickTask", JSON.stringify(state.tasks));
            state.onEdit = false;
        },
        getBack: (state) => {
            state.editTaskFields.id = '';
            state.editTaskFields.taskField = '';
            state.editTaskFields.priority = '';
            state.editTaskFields.completed = false;
            state.onEdit = false;
        }
    }
})

export const { taskAdd,toggleTask,setEditMode,editTask,getBack } = taskSlice.actions;

export default taskSlice.reducer