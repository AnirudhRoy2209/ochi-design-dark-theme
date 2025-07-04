import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='w-full border-t-[1px] pt-10 mt-20 flex gap-5 border-[#a1b562]'>
        <div className='w-1/2'>
        <h1 className='text-7xl'>Our approach:</h1>
        <button className='uppercase px-10 py-6 rounded-full bg-zinc-900 flex items-center gap-10 text-white mt-10 font-semibold'>read more
          <div className='w-2 h-2 rounded-full bg-zinc-100 '></div>
        </button>
        </div>
        <div className='w-1/2 h-[68vh] overflow-hidden rounded-3xl bg-[#a1b562]'>
        <img className='h-full w-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  )
}

export default About
