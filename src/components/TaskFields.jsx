import { Button, Radio, Typography } from '@material-tailwind/react';
import { useState } from 'react'

function TaskFields() {
    const [taskFields, setTaskFields] = useState({
        taskField: '',
        priority:''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskFields({...taskFields,[name]: value });
        
    }
    
    const handleTaskAdd = (e) => {
        e.preventDefault();
        if(!(validateTaskField(taskFields.taskField))){
          alert('Enter a task')
          return;
        }
        alert(`Task: ${taskFields.taskField}, Priority: ${taskFields.priority}`);
        setTaskFields({...taskFields,
          taskField: '',
          priority: '',
        });
    }
    const validateTaskField = (field) => {
        if(field.trim().length===0) return false;
        return true;
    }

  return (
    <section className="px-2 py-4 w-full space-y-4">
          <form className='flex flex-col justify-center items-center ' onSubmit={handleTaskAdd}>
          {/* Task Field */}
          <input type="text" name='taskField' id='taskField' value={taskFields.taskField} className='bg-purple-50 w-8/12 rounded-md border-2 border-primary focus:outline-none focus:border-4 px-4 py-2 md:w-4/12' onChange={handleChange} placeholder='Learn Coding @ 7pm' autoComplete="off"/>
          
          {/* Priority section */}
          <div className='w-8/12 flex justify-evenly items-center md:w-4/12'>
              <h1 className='font-semibold'>Priority</h1>
              
            <div className='flex flex-col md:flex-row'>           
              <Radio name="priority" value="High" id="High" checked={taskFields.priority === "High"} onChange={handleChange} ripple={true} color='red' className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0" label={<Typography
               className="font-normal text-text">High</Typography>}/>
              
              <Radio name="priority" value="Moderate" id="Moderate" checked={taskFields.priority === "Moderate"} onChange={handleChange} ripple={true} color='amber'  className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0" label={<Typography
              className="font-normal text-text">Moderate</Typography>}/>
              
              <Radio name="priority" value="Low" id="Low" checked={taskFields.priority === "Low"} onChange={handleChange} ripple={true} color='green'  className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0" label={<Typography
               className="font-normal text-text">Low</Typography>}/>

            </div>
          </div>
          
          <div className='px-2 py-4'>
            <Button type='submit' ripple={true} color="deep-purple" variant="filled">Add</Button>
          </div>
          </form>
    </section>
  )
}

export default TaskFields