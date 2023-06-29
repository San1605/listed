import React from 'react'
import SmallCardItem from './SmallCardItem'

const SmallCard = () => {
  return (
    <div  className='flex flex-col p-4 min-w-0  shrink sm:shrink-0'>
      <SmallCardItem color={"3"} name={'Basic Tees'} percent={"55%"}   />
      <SmallCardItem color={"1"} name={'Custom Short Pants'} percent={"31%"}   />
      <SmallCardItem color={"2"} name={'Super Hoodies'} percent={"14%"}   />

    </div>
  )
}

export default SmallCard
