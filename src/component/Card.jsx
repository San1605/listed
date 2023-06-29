import React from 'react'
import CardItem from './CardItem'

const Card = () => {

  return (
    <div className='flex flex-col sm:flex-row  justify-between h-[35rem] items-center sm:h-[8rem]  w-full '>
      <CardItem name={"Total Revenue"} price={"$2,129,430"} image={"camera"} color={"bg-[#ddefe3]"}/>
      <CardItem name={"Total Transaction"} price={"$1520"} image={"transaction"} color={"bg-[#f4ecdd]"}/>
      <CardItem name={"Total Likes"} price={"$9721"} image={"likes"}  color={"bg-[#efdada]"}/>
      <CardItem name={"Total Users"} price={"$892"} image={"Vector"} color={"bg-[#dee0ef]"}/>
    </div>
  )
}

export default Card