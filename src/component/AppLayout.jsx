import React from 'react'
import Body from './Body';
import Header from './Header';
import Sidebar from './Sidebar';

const AppLayout = () => {
  return (
    <div className="flex flex-row sm:h-fit h-[115rem] w-[15em] sm:w-fit flex-shrink-0">
       <div>
       <Sidebar/>
       </div>
       <div className=' flex flex-col w-full mx-8'>
       <Header/>
       <Body/>
       </div>
   
    </div>
  )
}

export default AppLayout
