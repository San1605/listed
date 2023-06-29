import React from 'react'
import { signOut } from "firebase/auth";
import  {auth} from "../utils/fireabase"
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/sideBarSlice';
import { useSelector } from 'react-redux'
import Sidebar1 from './Sidebar1.jsx';

const Header = () => {
    const navigate=useNavigate();
const dispatch=useDispatch()

   const handleClick=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        
        navigate("/")
      }).catch((error) => {
        // An error happened.
      });
   }
     const isopen=useSelector((store)=>store.side.isopen)

    //  if(!isopen)return <Sidebar1/>;



      return (
        <div>
        <div>
          {!isopen?(<Sidebar1/>):(<h1></h1>)}
        </div>
    
    <div className='flex flex-row justify-between h-[2.5rem] sm:w-[65.5rem] w-[18rem] m-2  p-2 items-center'>
      
        <div className='flex flex-row justify-center items-center'>
        <img
          onClick={() => dispatch(toggleMenu())}
          className='h-8 cursor-pointer block sm:hidden ' src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg" alt="" />
          <h1>Dashboard</h1>
        </div>
        
        <div className=' flex-row hidden sm:flex '>
           <div>
             <input className='h-[1.875rem] w-[11.25rem] rounded-lg bg-[#ffffff] p-2 m-2 ' type="search" name="" placeholder='search...' id="" />
           </div>
           <div>
            <img className='m-3' src="../assets/bell.png" alt="" />
           </div>
           <div>
            <img className='m-2' src="../assets/profile.png" alt="" />
           </div>
           <div>
           <button className='border m-2 border-black rounded-lg bg-color-gray text-xs w-16 h-6' onClick={handleClick}>signout</button>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Header
