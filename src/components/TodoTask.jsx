import {Pencil, Trash2} from 'lucide-react'
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Collapse, Typography } from "@material-tailwind/react";
import { toggleTask, setEditMode, deleteTask } from '../redux/taskSlice';
import { handleToast, clearToast } from '../redux/toastSlice';
import {ChevronDown, ChevronUp} from 'lucide-react'
function TodoTask() {
    //const [toDoArray, setToDoArray] = useState([]);
    //const taskCount = useSelector((state) => state.task.tasksCount);
    const toDoArray = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
 
    const toggleOpen = () => setOpen((cur) => !cur);

    const showAndHideToast = (typeOfToast,messageOnToast)=>{
        const toastData = {
          typeOfToast,
          messageOnToast
        }
          dispatch(handleToast(toastData))
          setTimeout(() => {
            dispatch(clearToast());
          }, 3000);
    }

    if (!toDoArray) return;
    //console.log('toDoArray');
    const modifiedArr = toDoArray.reduce((acc, { id, taskField, priority, completed }) => {
    const color = priority === 'High' ? 'bg-red-100' : priority === 'Low' ? 'bg-green-100' : 'bg-amber-100';
    const checkColor = priority === 'High' ? 'red' : priority === 'Low' ? 'green' : 'amber';
    const handleCheckedTask = () => {
        dispatch(toggleTask({ id }));
    }
    
    const handleTaskDelete = ()=>{
        dispatch(deleteTask({ id }));
        showAndHideToast('delete', 'Task removed!');
    }

    const taskComponent = (
        <div key={id} className={`w-full h-fit ${color} px-4 py-4 rounded-lg shadow-md flex justify-between items-center flex-col`}>
            <div className='self-start flex justify-start items-center w-full'>
                <p className="hidden">{id}</p>
                <Checkbox label={
                    <div>
                        <Typography className={`font-medium text-text ${completed ? 'line-through' : ''}`}>
                            {taskField}
                        </Typography>
                    </div>
                } color={checkColor} onChange={handleCheckedTask} checked={completed} className='cursor-pointer' />
            </div>
            <div className="self-end justify-self-end flex justify-between items-center gap-3 cursor-pointer">
                <Pencil onClick={()=>dispatch(setEditMode({ id, taskField, priority, completed}))} size={18} />
                <Trash2 onClick={handleTaskDelete} size={18} />
            </div>
        </div>
    );

    completed ? acc.complete.push(taskComponent) : acc.incomplete.push(taskComponent);

    return acc;
}, { complete: [], incomplete: [] });


  return (
    <>
    <section className="px-2 py-4 w-full space-y-4 flex flex-col justify-center items-center">
        <div className="w-8/12 md:w-4/12 space-y-6">
            {modifiedArr.incomplete}
        </div>
    </section>
   { modifiedArr.complete.length>0? (<section className="px-2 py-4 w-full space-y-4 flex flex-col justify-center items-center">
            <div onClick={toggleOpen} className='flex items-center gap-2 cursor-pointer'>
                <h1 className='font-medium'>Completed Task(s) {modifiedArr.complete.length}</h1>
                {open?<ChevronUp size={20} />:<ChevronDown size={20} />}
            </div>
            <div className="w-8/12 md:w-4/12">
                <Collapse open={open} className='space-y-6'>
                    {modifiedArr.complete}
                </Collapse>
            </div>
    </section>):''}
    </>
  )
}

export default React.memo(TodoTask)

// +"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolores suscipit possimus recusandae qui hic doloremque dolor ut aliquid molestiae."