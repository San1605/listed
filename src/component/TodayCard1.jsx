import React from 'react'

const TodayCard1 = ({name,time,address,color}) => {



  return (
    <div className='flex flex-row p-1 min-w-0 shrink-0 sm:shrink-0'>
      <div className={`${color} h-[4rem] w-[0.32rem] mr-2`}>
          
      </div>
      <div className='text-sm'>
        <h1 className='font-bold'>{name}</h1>
        <h2>{time}</h2>
        <h3>{address}</h3>
      </div>
    </div>
  )
}

export default TodayCard1
