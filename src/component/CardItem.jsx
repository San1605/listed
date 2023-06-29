import React from 'react'

const CardItem = ({name,price,image,color}) => {
  
  return (
    <div className={` flex flex-col justify-between border m-4 sm:m-0  border-black h-[6.5rem] w-[11.85rem] p-2  rounded-2xl ${color}`}>

<div>

      <img className='float-right' src={`../assets/${image}.png`} alt="" />
</div>
<div>

      <h1>{name}</h1>
      <h2>{price}</h2>
</div>
 
      
    </div>
  )
}

export default CardItem
