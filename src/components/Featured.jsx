import { motion, useAnimation } from 'framer-motion'
import { span } from 'motion/react-client'
import React from 'react'
import { RxDividerVertical } from 'react-icons/rx'

function Featured() {
  const cards= [useAnimation(),useAnimation()];

  const handlehover=(index)=>{
    cards[index].start({y:"0"});
  };

  const handlehoverEnd=(index)=>{
    cards[index].start({y:"100%"});
  };
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
            <h1 className='text-7xl font-neue tracking-tight'>Featured projects</h1>
        </div>
        <div className='px-20'>
            <div className='cards w-full gap-10 flex mt-10'>
              <motion.div onHoverStart={()=>handlehover(0)}
              onHoverEnd={()=>handlehoverEnd(0)} className='cardcontainer w-1/2 relative h-[75vh]'>
              <h1 className='absolute flex text-9xl tracking-tighter leading-none z-[9] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]'>
              {"FYDE".split("").map((items, index)=>(
                <motion.span initial={{y:"100%"}}
                animate={cards[0]}
                transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}} className='inline-block font-bold'>{items}</motion.span>
              ))}
              </h1>
                 <div className='card w-full h-full rounded-xl overflow-hidden'>
                   <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png" alt="" />
                 </div>
              </motion.div>
              <motion.div onHoverStart={()=>handlehover(1)}
              onHoverEnd={()=>handlehoverEnd(1)} className='cardcontainer relative w-1/2 h-[75vh]'>
               <h1 className='absolute flex overflow-hidden text-9xl tracking-tighter leading-none z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]'>
               {"VISTERO".split("").map((items, index)=>(
              <motion.span initial={{y:"100%"}}
                animate={cards[1]}
                transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}} className='inline-block font-bold'>{items}</motion.span>
              ))}
              </h1>
                 <div className='card w-full bg-green-600 h-full rounded-xl overflow-hidden'>
                  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                 </div>
              </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Featured
