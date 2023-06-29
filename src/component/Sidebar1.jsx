import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar1 = () => {
  const isopen=useSelector((store)=>store.side.isopen)
  if(isopen)return null;
  return (
    <div className='flex flex-col block sm:hidden  items-center sm:h-[15rem] sm:w-[62.5rem] h-[22rem] w-[20rem] bg-black border border-black  my-2 mx-3 p-2 flex-shrink-0  rounded-2xl '>
      

      <div className=' flex flex-col  items-center h-[23rem] w-[55rem]'>

      <h2 className=' font-bold text-[2rem] text-white'>Board.</h2>

        <ul className='flex flex-col sm:flex-row'>
            <li  className='text-[2.125 rem ] text-white m-1 p-1' >
              <div className='flex flex-row '>
               <img src="../assets/dashboard_icon.png" alt="" /> 
               <span className='text-[1.125 rem ] text-white ml-4'>Dashboard</span> 
              </div>
               </li>

              
               <li  className='text-[1.125 rem ] text-white m-1 p-1' >
              <div className='flex flex-row '>
               <img src="../assets/transaction_icon.png" alt="" /> 
               <span className='text-[1.125 rem ] text-white ml-4'>Transactions</span> 
              </div>
               </li>
               <li  className='text-[1.125 rem ] text-white m-1 p-1' >
              <div className='flex flex-row '>
               <img src="../assets/schedule_icon.png" alt="" /> 
               <span className='text-[1.125 rem ] text-white ml-4'>Schedules</span> 
              </div>
               </li>
               <li  className='text-[1.125 rem ] text-white m-1 p-1' >
              <div className='flex flex-row '>
               <img src="../assets/user_icon.png" alt="" /> 
               <span className='text-[1.125 rem ] text-white ml-4'>Users</span> 
              </div>
               </li>
               <li  className='text-[1.125 rem ] text-white m-1 p-1' >
              <div className='flex flex-row '>
               <img src="../assets/setting_icon.png" alt="" /> 
               <span className='text-[1.125 rem ] text-white ml-4'>Settings</span> 
              </div>
               </li>

        </ul>
      </div>
      
      <div  className="flex flex-row items-center">
        <ul>
          <li  className='text-[1.125 rem ] text-white m-2 p-1' >
            Help
          </li>
          <li  className='text-[1.125 rem ] text-white m-2 p-1' >
            Contact us
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar1
