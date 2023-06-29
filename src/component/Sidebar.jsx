import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isopen=useSelector((store)=>store.side.isopen)
  if(!isopen)return null;
  return (
    <div className='flex flex-col hidden  sm:block  justify-between  h-[46rem] w-[16.5rem] bg-black  my-2 mx-3 p-2 flex-shrink-0  rounded-2xl '>
      

      <div className=' flex flex-col justify-around items-center h-[23rem] w-[11rem] '>
      <h2 className=' font-bold text-[2.25rem] text-white'>Board.</h2>
        <ul className=''>
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
      
      <div  className="flex flex-col items-center  mt-[13rem] h-[7rem] w-[11rem]">
        <ul className=''>
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

export default Sidebar
