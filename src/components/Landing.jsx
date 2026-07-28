import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const leftEyeBoxRef = useRef(null);
  const rightEyeBoxRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;

    let currLeftX = 0, currLeftY = 0;
    let currRightX = 0, currRightY = 0;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      // Left mini pupil
      if (leftEyeBoxRef.current) {
        const rect = leftEyeBoxRef.current.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.hypot(dx, dy);
        const maxOffset = rect.width * 0.28;
        const rad = Math.atan2(dy, dx);
        const targetX = Math.cos(rad) * Math.min(dist * 0.05, maxOffset);
        const targetY = Math.sin(rad) * Math.min(dist * 0.05, maxOffset);

        currLeftX = lerp(currLeftX, targetX, 0.1);
        currLeftY = lerp(currLeftY, targetY, 0.1);

        if (leftPupilRef.current) {
          leftPupilRef.current.style.transform = `translate(${currLeftX}px, ${currLeftY}px)`;
        }
      }

      // Right mini pupil
      if (rightEyeBoxRef.current) {
        const rect = rightEyeBoxRef.current.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.hypot(dx, dy);
        const maxOffset = rect.width * 0.28;
        const rad = Math.atan2(dy, dx);
        const targetX = Math.cos(rad) * Math.min(dist * 0.05, maxOffset);
        const targetY = Math.sin(rad) * Math.min(dist * 0.05, maxOffset);

        currRightX = lerp(currRightX, targetX, 0.1);
        currRightY = lerp(currRightY, targetY, 0.1);

        if (rightPupilRef.current) {
          rightPupilRef.current.style.transform = `translate(${currRightX}px, ${currRightY}px)`;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
                    className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-[#a3ce38] flex flex-col justify-end items-center overflow-hidden border border-[#92bb2d] shadow-lg'>
                      {/* Interactive Mini Eyeballs Card */}
                      <div className='flex gap-[0.35vw] mb-[-0.1vw] items-end justify-center z-10'>
                        {/* Left Mini Eye */}
                        <div ref={leftEyeBoxRef} className='w-[2.1vw] h-[2.1vw] bg-white rounded-t-full relative flex items-center justify-center shadow-md overflow-hidden'>
                          <div 
                            ref={leftPupilRef} 
                            className='w-[1.05vw] h-[1.05vw] bg-zinc-900 rounded-full relative flex items-center justify-center'
                          >
                            <div className='w-[0.35vw] h-[0.35vw] bg-white rounded-full absolute top-[0.1vw] left-[0.1vw]' />
                          </div>
                        </div>
                        {/* Right Mini Eye */}
                        <div ref={rightEyeBoxRef} className='w-[2.1vw] h-[2.1vw] bg-white rounded-t-full relative flex items-center justify-center shadow-md overflow-hidden'>
                          <div 
                            ref={rightPupilRef} 
                            className='w-[1.05vw] h-[1.05vw] bg-zinc-900 rounded-full relative flex items-center justify-center'
                          >
                            <div className='w-[0.35vw] h-[0.35vw] bg-white rounded-full absolute top-[0.1vw] left-[0.1vw]' />
                          </div>
                        </div>
                      </div>
                      {/* Step layers */}
                      <div className='w-full h-[0.85vw] bg-[#89b329]' />
                      <div className='w-full h-[0.65vw] bg-[#7a9e22]' />
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

