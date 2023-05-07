import React from 'react'

const Meme = () => {
  return (
    <main className='p-10'>
        <form className='grid grid-cols-2 grid-rows-2 md:grid-cols-1 md:grid-rows-2 gap-4'>
            <input 
                type="text"
                placeholder='Top Text' 
                className='rounded indent-1.5 border border-gray-300 p-2'/>
            <input 
                type="text"
                placeholder='Bottom Text' 
                className='rounded indent-1.5 border border-gray-300 p-2'/>
            <button className='col-span-full cursor-pointer rounded bg-gradient-to-r from-purple-700 to-purple-900 text-white border-0'>Get a new meme image 🖼</button>
        </form>    
    </main>
  )
}

export default Meme
