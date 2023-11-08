import React from 'react'
function Header() {
  console.log('from header');
  return (
    <header className="flex justify-center items-center px-2 py-4">
          <h1 className="font-bold text-4xl">Tick <span className="text-primary">Task</span></h1>
    </header>
  )
}

export default React.memo(Header);