import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Moon,Sun} from 'lucide-react'
import { toggleTheme } from '../redux/toastSlice'
import {Tooltip} from '@material-tailwind/react'

function Header() {
  //console.log('from header');
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.toast.isDark);
  return (
    <header className="flex flex-col justify-center items-center px-2 py-4">
          <h1></h1>
          <h1 className="font-bold text-4xl">Tick <span className={`${isDark?'text-darkPrimary':'text-primary'}`}>Task</span></h1>
          <Tooltip
            content="Dark/Light Theme"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }} placement="left" className={`font-poppins ${isDark?'bg-white text-text':''}`}
          >
            <div className={`self-end cursor-pointer p-3 rounded-full ${isDark?'bg-gray-300 hover:bg-gray-200':'bg-gray-200 hover:bg-gray-300'}`} onClick={()=>dispatch(toggleTheme())}>
                  {isDark?<Sun color="#eab308"/>:<Moon />}
                </div>
          </Tooltip>
    </header>
  )
}

export default React.memo(Header);