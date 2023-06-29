import React from 'react'
import TodayCard1 from './TodayCard1'


const BottomCardSec = ({name}) => {
  return (
    <div className=' flex flex-col justify-between  sm:h-[13rem] h-[23rem] sm:w-[32rem] w-[20rem] rounded-2xl sm:mt-0 mt-6 bg-white sm:shrink-0 min-w-[0%] shrink sm:p-8 p-8'>
    
    <div className='flex flex-row justify-between'>
      <h1 className='font-bold'>{name}</h1>
      <span className='text-xs'> See All</span>
      </div>
        <TodayCard1 name={"Meeting with suppliers from Kuta Bali"} address={"at Sunset Road, Kuta, Bali "} time={"14.00-15.00"} color = {"bg-[#9BDD7C]"} />
        <TodayCard1 name={"Check operation at Giga Factory 1"} address={"at Central Jakarta "} time={"18.00-20.00"} color={"bg-[#6972C3]"}/>

    </div>
  )
}

export default BottomCardSec
