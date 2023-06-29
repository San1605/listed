import React from 'react'
import SmallCard from './SmallCard'
import PieCharts from './PieChart'

const BottomCard = ({name}) => {
  return (
    <div className='flex flex-col justify-between  sm:h-[13rem]  sm:w-[32rem]  h-[23rem]  w-[20rem] p-8 rounded-2xl shrink  bg-white'>
      <div className='flex flex-row justify-between'>
      <h1 className='font-bold'>{name}</h1>
      <span className='text-xs'> May - June 2021</span>
      </div>
      <div className='flex  flex-col sm:flex-row  justify-between  overflow-visible'>
      <PieCharts/>
      <SmallCard/>
      </div>
    </div>
  )
}

export default BottomCard
