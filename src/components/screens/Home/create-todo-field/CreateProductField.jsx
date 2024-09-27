import React, { useState } from 'react'
import Quantity from '../item/Quantity'

const CreateProductField = ({setProducts}) => {

    const [title, setTitle] = useState('')

    const addTodo = (title) => {
      setProducts(prev => [{ _id: Date.now().toString(), title }, ...prev,])
      setTitle('')   
    }


  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 p-5 w-full'>
        <input 
         type="text"
         onChange={e => setTitle(e.target.value)} 
         value={title} 
         onKeyDown={e => e.key === 'Enter' && addTodo(title)}
         className='bg-transparent border-none w-full outline-none'
         placeholder='Название товара'
         />
         <button onClick={e => {e.stopPropagation(); addTodo(title)}} className='text-white bg-pink-500 hover:bg-pink-400 rounded-full py-2 px-4'>Добавить</button>
    </div>
  )
}

export default CreateProductField