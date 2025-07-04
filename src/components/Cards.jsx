import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className='cardcontainer w-1/2 h-[50vh] '>
        <div className='card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 border-[#CDEA68] text-[#CDEA68]'>&copy;2024-2025</button>
        </div>
      </div>
       <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
        <div className='card relative flex items-center justify-center w-1/2 h-full bg-zinc-700 rounded-xl'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 border-zinc-300 text-zinc-300'>RATING 5.0 ON CLUTCH</button>
            </div>
         <div className='card relative flex items-center justify-center w-1/2 h-full bg-zinc-800 rounded-xl'>
         <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 border-zinc-300 text-zinc-300'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
      </div>
    </div>
  )
}

export default Cards
