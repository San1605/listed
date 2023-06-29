import React from 'react'
import Card from './Card'
import ChartBox from './ChartBox'
import Bottom from './Bottom'

const Body = () => {
  return (
    <div className='flex flex-col sm:h-[43rem] h-[115rem] sm:w-[66.5rem] w-[20rem] items-center '>
      <Card/>
      <ChartBox/>
      <Bottom/>
    </div>
  )
}

export default Body
