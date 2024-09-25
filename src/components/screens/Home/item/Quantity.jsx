import React from 'react'

const Quantity = ({quantity}) => {
  return (
    <div className='bg-pink-500 rounded-3xl w-20 h-10 mr-4 flex justify-center'>
      <input type="text" defaultValue={quantity} maxLength={5} className='text-white bg-transparent border-none outline-none w-4/6 text-center' />
    </div>
  )
}

export default Quantity