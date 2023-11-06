import {useState} from 'react'

function TaskFields() {
    const [taskFields, setTaskFields] = useState({
        taskField: '',
        priority:''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskFields({...taskFields,[name]: value });
    }

  return (
    <section className="flex flex-col justify-center items-center px-2 py-4 w-full space-y-4">
          <input type="text" name='taskField' id='taskField'
          className='bg-purple-100 w-8/12 rounded-md border-2 border-primary focus:outline-none focus:border-4 px-4 py-2 md:w-4/12' onChange={handleChange} placeholder='Learn Coding @ 7pm'/>
          <div className='w-8/12 flex justify-evenly items-center   md:w-4/12'>
              <h1>Priority</h1>
              
            <div className='flex flex-col md:flex-row md:space-x-2'>
              <div className='flex space-x-1'>
                <input
                type="radio"
                name="priority"
                value="High"
                id="High"
                checked={taskFields.priority === "High"}
                onChange={handleChange}
                />
                <label htmlFor="High">High</label>   
              </div>

              <div className='flex space-x-1'>
                <input
                type="radio"
                name="priority"
                value="Moderate"
                id="Moderate"
                checked={taskFields.priority === "Moderate"}
                onChange={handleChange}
                />
                <label htmlFor="Moderate">Moderate</label>   
              </div>

               <div className='flex space-x-1'>
                <input
                type="radio"
                name="priority"
                value="Low"
                id="Low"
                checked={taskFields.priority === "Low"}
                onChange={handleChange}
                />
                <label htmlFor="Low">Low</label>    
              </div>
            </div>
          </div>
          
    </section>
  )
}

export default TaskFields