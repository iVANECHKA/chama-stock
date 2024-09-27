import React from 'react'
import Quantity from './Quantity'
import {BsTrash} from 'react-icons/bs'

function TodoItem({product, removeProducts, quantity}) {
  return (
    <div className='flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full justify-between cursor-pointer'>
      <div className='flex items-center'>
        <Quantity quantity={quantity}/>
        <span>{product.name}</span>
      </div>
      <button onClick={e => {e.stopPropagation(); removeProducts(product.id)}}>
        <BsTrash size={22} className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-200'/>
      </button>
    </div>
  )
}

export default TodoItem