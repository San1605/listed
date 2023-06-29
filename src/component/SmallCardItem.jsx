import React from 'react'

const SmallCardItem = ({name,percent,color}) => {
  return (
    <div className='flex flex-row shrink sm:shrink-0 min-w-0'>
      <div>
        <img className='mt-1 mr-1' src={`../assets/Ellipse${color}.png`} alt="" />
      </div>
      <div className='text-sm'>
        <h2 className='font-bold'>{name}</h2>
        <h3>{percent}</h3>
      </div>
      
    </div>
  )
}

export default SmallCardItem
