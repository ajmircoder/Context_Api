import React, { useState } from 'react'

export default function Shoe({name, price, rating, img, cssClass}) {
  return (
    <div className={`${cssClass} shoe-div-white m-3 rounded-md p-1`}>
      <img className=' h-60 w-60' src={img} alt="shoe" />
        <p className=' text-center shoe-name'>{name}</p>
        <p className=' text-center shoe-price'>Price: {price}</p>
        <p className=' text-center shoe-rating'>Rating: {rating}</p>
        <div className=' flex justify-around p-2  text-center shoe-size'>
          <button className='size-btn px-2 py-1 rounded-full bg-red-500'>6</button>
          <button className='size-btn px-2 py-1 rounded-full bg-red-500'>7</button>
          <button className='size-btn px-2 py-1 rounded-full bg-red-500'>8</button>
          <button className='size-btn px-2 py-1 rounded-full bg-red-500'>9</button>
        </div>
    </div>
  )
}
