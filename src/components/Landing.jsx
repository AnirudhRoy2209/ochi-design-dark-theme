import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstruture mt-52 px-20'>
          {["we create", "eye opening", "presentations"].map((item, index)=>{
            return  (<div key={index} className='masker'>
              <div className='w-fit flex items-end overflow-hidden'>
                {index===1 && (
                   <motion.div initial={{width:0}}
                   animate={{width:"8vw"}}
                   transition={{ease:[0.76, 0, 0.24, 1], duration:1}}
                    className='mr-[1vw] w-[8vw] overflow-hidden rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500'>
                      <img className='w-full h-full bg-cover bg-center' src="https://imgs.search.brave.com/sd8ePo68YJip_2VMWfxG8w9ppjXyiIEZxJEM1gT_zkQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYXd3d2FyZHMu/Y29tL2F3YXJkcy9p/bWFnZXMvMjAyMi8w/OS9vY2hpLWNvdmVy/LmpwZw" alt="" />
                    </motion.div>
                )}
                 <h1 className="font-founder pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-bold">{item}</h1>
              </div>
            </div>
            );
          })}
        </div> 
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
          {["For public and private companies", "From the first pitch to IPO"].map((items, index)=>(
            <p key={index} className='text-md leading-none font-light tracking tight'>{items}</p>
          ))}
          <div className='start flex items-center gap-2'>
            <div className='px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md uppercase'>start the project</div>
            <div className='w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center'>
              <span className='rotate-[45deg]'>
                <FaArrowUpLong/>
              </span>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Landing  
