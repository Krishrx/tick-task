import {Pencil, Trash2} from 'lucide-react'
import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Checkbox, Typography } from "@material-tailwind/react";
function TodoTask() {
    const [toDoArray, setToDoArray] = useState([]);
    const taskCount = useSelector((state)=>state.task.tasksCount);
    useEffect(() => {
        setToDoArray(JSON.parse(localStorage.getItem("tickTask")))
    },[taskCount])

    if (!toDoArray) return;
    console.log('toDoArray');
        const modifiedArr = toDoArray.map(({ id, taskField, priority , completed}) => {
            const color = priority === 'High' ? 'bg-red-100' : priority === 'Low' ? 'bg-green-100' : 'bg-amber-100';
            const checkColor = priority === 'High' ? 'red' : priority === 'Low' ? 'green' : 'amber';
            return (
                <div key={id} className={`w-full h-fit ${color} px-4 py-4 rounded-lg shadow-md flex justify-between items-center   cursor-pointer`}>
                    <div className='flex justify-center items-center'>
                        <p className="hidden">{id}</p>
                        <Checkbox label={
                            <div>
                            <Typography className='font-medium text-text'>
                                {taskField}
                            </Typography>
                            </div>
                        } color={checkColor}  />
                    </div>
                    <div className="self-end justify-self-end flex justify-between items-center gap-2">
                        <Pencil size={18} />
                        <Trash2 size={18} />
                    </div>
                </div>
            )
        })

  return (
    <section className="px-2 py-4 w-full space-y-4 flex flex-col justify-center items-center">
        <div className="w-8/12 md:w-4/12 space-y-6">
            {modifiedArr}
        </div>
    </section>
  )
}

export default React.memo(TodoTask)