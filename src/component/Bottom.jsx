import React from 'react'
import BottomCard from './BottomCard'
import BottomCardSec from './BottomCardSec'

const Bottom = () => {
  return (
    <div className=' flex flex-col sm:flex-row sm:p-0 p-4 justify-between align-bottom h-[13rem]   w-full '>
      <BottomCard name={'Top Products'}/>
      <BottomCardSec name={"Today’s schedule"}/>
    </div>
  )
}

export default Bottom
