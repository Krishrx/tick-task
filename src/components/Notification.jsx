
// eslint-disable-next-line react/prop-types
function Notification({showToast,typeOfToast,messageOnToast}) {
  return (
    <section className="flex justify-center items-center px-2 py-4">
      {showToast ? <Toast type={typeOfToast} message={messageOnToast} />:notVisible}
    </section>
  )
}

const Toast = ({type,message}) => {
  if (type === 'success') return successToast(message);
  else if (type === 'invalid') return invalidToast(message);
  else if (type === 'delete') return deleteToast(message);
}

const notVisible = (<div className='hidden'></div>)

const successToast = (message) => {
  return (
    <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">

    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-50 rounded-lg dark:bg-green-800 dark:text-green-200">
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="sr-only">Check icon</span>
</div>
      <div className="ml-3 text-sm font-normal lg:text-lg">{message}</div>

</div>
  )
}

const invalidToast = (message) => {
  // Oops!! task can't be empty!
  return (
    <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
    </svg>
    <span className="sr-only">Warning icon</span>
</div>
      <div className="ml-3 text-sm font-normal lg:text-lg">{message}</div>
</div>
  )
}

const deleteToast = (message) => {
  //Task removed!
  return (
    <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
    </svg>
    <span className="sr-only">Error icon</span>
</div>
      <div className="ml-3 text-sm font-normal lg:text-lg">{message}</div>
</div>
  )
}

export default Notification