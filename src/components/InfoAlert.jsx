import { Info } from 'lucide-react'
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../shared/InfoDialogShadcn"


function InfoAlert() {
  return (
      <>
        <AlertDialog>
            <AlertDialogTrigger><Info className='text-accent cursor-pointer' /></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle><span className='font-poppins text-xl text-text'>Welcome to Tick <span className='text-primary'>Task</span>!</span></AlertDialogTitle>
                <AlertDialogDescription>
                    <ul className='font-poppins flex flex-col px-3 list-disc justify-start items-start text-text '>
                        <li className='list-none text-lg font-semibold'>Quick Tips</li>
                        <li>Priority field is optional.</li>
                        <li>By default all task priorities are set to High.</li>
                        <li>You can also press <q>Enter</q> key to add/edit task.</li>

                    </ul>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogAction><span className='font-poppins'>Letzz Go!</span></AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

      </>
  )
}

export default React.memo(InfoAlert);
