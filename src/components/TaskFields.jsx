import { Button, Radio, Typography,Tooltip } from '@material-tailwind/react';
import React,{ useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { taskAdd,editTask,getBack } from '../redux/taskSlice';
import { handleToast, clearToast } from '../redux/toastSlice';
import { nanoid } from '@reduxjs/toolkit';
import InfoAlert from './InfoAlert';

function TaskFields() {
    const [taskFields, setTaskFields] = useState({
        taskField: '',
        priority:''
    });
  
    const dispatch = useDispatch();

    const isDark = useSelector((state) => state.toast.isDark);
    const onEdit = useSelector((state)=>state.task.onEdit);
    const editFields = useSelector((state)=>state.task.editTaskFields);
    useEffect(() => {
      if (onEdit) {
        const { taskField, priority } = editFields;
        setTaskFields({ taskField, priority });
      }
    }, [onEdit, editFields]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskFields({...taskFields,[name]: value });
    }
    
    const handleTaskAdd = () => {
      const { taskField, priority } = taskFields;
      if (!(validateTaskField(taskField))) {
          showAndHideToast('invalid',"Oops!! task can't be empty!");
          return;
      }
      const data = {
          id:nanoid(),
          taskField,
          priority:priority===''?'High':priority,
          completed:false
        }
        dispatch(taskAdd(data));
        
        setTaskFields({...taskFields,
          taskField: '',
          priority: '',
        });
        
      showAndHideToast('success',"Task added Successfully!")
    }
    
    const handleTaskEdit = ()=>{
      const { taskField, priority } = taskFields;
      if (!(validateTaskField(taskField))) {
          showAndHideToast('invalid',"Oops!! task can't be empty!");
          return;
      }
      const data = {
          taskField,
          priority,
        }
        dispatch(editTask(data));
        
        setTaskFields({...taskFields,
          taskField: '',
          priority: '',
        });
        
      showAndHideToast('success',"Task updated Successfully!")
    }
    
    const handleCancel = ()=>{
      dispatch(getBack());
      setTaskFields({...taskFields,
          taskField: '',
          priority: '',
      });
    }
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      if (onEdit) {
        handleTaskEdit();
      }
      else {
         handleTaskAdd();
      }
    }
    
    const validateTaskField = (field) => {
        if(field.trim().length===0) return false;
        return true;
    }
    
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
    //console.log('from task fields');
  return (
    <section className="px-2 py-4 w-full space-y-4">
          <form className='flex flex-col justify-center items-center ' onSubmit={handleSubmit}>
          {/* Task Field */}
          <input type="text" name='taskField' id='taskField' value={taskFields.taskField} className={`w-8/12 rounded-md border-2 px-4 py-2 md:w-4/12 shadow-sm ${isDark?'border-darkSecondary focus:outline-darkPrimary bg-darkPrimary':'bg-purple-50  border-secondary focus:outline-primary '}`} onChange={handleChange} placeholder='Learn Coding @ 7pm' autoComplete="off"/>
          
          {/* Priority section */}
          <div className='w-8/12 flex justify-evenly items-center md:w-4/12  pt-10'>
              <h1 className='font-semibold'>Priority</h1>
              
            <div className='flex flex-col md:flex-row'>           
              <Radio name="priority" value="High" id="High" checked={taskFields.priority === "High"} onChange={handleChange} ripple={true} color='red' className={`p-0 transition-all hover:before:opacity-0 ${isDark?'border-gray-500 bg-gray-50':'border-gray-900/10 bg-gray-900/5'}`} label={<Typography
               className="font-normal">High</Typography>}/>
              
              <Radio name="priority" value="Moderate" id="Moderate" checked={taskFields.priority === "Moderate"} onChange={handleChange} ripple={true} color='amber'  className={`p-0 transition-all hover:before:opacity-0 ${isDark?'border-gray-500 bg-gray-50':'border-gray-900/10 bg-gray-900/5'}`} label={<Typography
              className="font-normal">Moderate</Typography>}/>
              
              <Radio name="priority" value="Low" id="Low" checked={taskFields.priority === "Low"} onChange={handleChange} ripple={true} color='green'  className={`p-0 transition-all hover:before:opacity-0 ${isDark?'border-gray-500 bg-gray-50':'border-gray-900/10 bg-gray-900/5'}`} label={<Typography
               className="font-normal ">Low</Typography>}/>

            </div>
          </div>
          
          <div className='w-8/12 px-2 py-2 md:w-4/12 md:pt-5 '>
            <Tooltip className={`font-poppins ${isDark?'bg-white text-text':''}`} content="Tip" placement="top" animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }} >
              <div className='w-fit'><InfoAlert/></div>
            </Tooltip>
          </div>
          
          <div className='px-2 py-4'>
            {onEdit?(<div className='flex gap-4'>
              <Button type='submit' ripple={true} color="deep-purple" variant="filled">&nbsp;Save&nbsp;</Button>
              <Button onClick={handleCancel} type='button' ripple={true} color="blue-gray" variant="filled">Cancel</Button>
            </div>):(<Button type='submit' ripple={true} color="deep-purple" variant="filled">Add</Button>)}
          </div>
          </form>
    </section>
  )
}

export default React.memo(TaskFields)