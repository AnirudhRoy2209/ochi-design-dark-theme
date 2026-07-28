import React, { useEffect, useRef } from 'react';

function Eyes() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftIrisRef = useRef(null);
  const rightIrisRef = useRef(null);
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    let currLeftAngle = 0;
    let currRightAngle = 0;
    let currLeftPupilX = 0, currLeftPupilY = 0;
    let currRightPupilX = 0, currRightPupilY = 0;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      // Process Left Eye
      if (leftEyeRef.current) {
        const rect = leftEyeRef.current.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const deltaX = mouseX - eyeX;
        const deltaY = mouseY - eyeY;

        let targetAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) - 180;
        
        let diff = targetAngle - currLeftAngle;
        while (diff < -180) diff += 360;
        while (diff > 180) diff -= 360;
        currLeftAngle += diff * 0.08;

        const dist = Math.hypot(deltaX, deltaY);
        const maxOffset = 25;
        const targetPx = Math.cos(targetAngle * Math.PI / 180 + Math.PI) * Math.min(dist * 0.06, maxOffset);
        const targetPy = Math.sin(targetAngle * Math.PI / 180 + Math.PI) * Math.min(dist * 0.06, maxOffset);

        currLeftPupilX = lerp(currLeftPupilX, targetPx, 0.08);
        currLeftPupilY = lerp(currLeftPupilY, targetPy, 0.08);

        if (leftIrisRef.current) {
          leftIrisRef.current.style.transform = `translate(${currLeftPupilX}px, ${currLeftPupilY}px)`;
        }
        if (leftLineRef.current) {
          leftLineRef.current.style.transform = `translate(-50%, -50%) rotate(${currLeftAngle}deg)`;
        }
      }

      // Process Right Eye
      if (rightEyeRef.current) {
        const rect = rightEyeRef.current.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const deltaX = mouseX - eyeX;
        const deltaY = mouseY - eyeY;

        let targetAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) - 180;
        
        let diff = targetAngle - currRightAngle;
        while (diff < -180) diff += 360;
        while (diff > 180) diff -= 360;
        currRightAngle += diff * 0.08;

        const dist = Math.hypot(deltaX, deltaY);
        const maxOffset = 25;
        const targetPx = Math.cos(targetAngle * Math.PI / 180 + Math.PI) * Math.min(dist * 0.06, maxOffset);
        const targetPy = Math.sin(targetAngle * Math.PI / 180 + Math.PI) * Math.min(dist * 0.06, maxOffset);

        currRightPupilX = lerp(currRightPupilX, targetPx, 0.08);
        currRightPupilY = lerp(currRightPupilY, targetPy, 0.08);

        if (rightIrisRef.current) {
          rightIrisRef.current.style.transform = `translate(${currRightPupilX}px, ${currRightPupilY}px)`;
        }
        if (rightLineRef.current) {
          rightLineRef.current.style.transform = `translate(-50%, -50%) rotate(${currRightAngle}deg)`;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.6" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          {/* Left Eye */}
          <div ref={leftEyeRef} className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 shadow-2xl'>
            <div ref={leftIrisRef} className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center'>
              <div ref={leftLineRef} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center font-semibold text-[10px] text-zinc-900 tracking-wider'>PLAY</div>
              </div>
            </div>
          </div>
          {/* Right Eye */}
          <div ref={rightEyeRef} className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 shadow-2xl'>
            <div ref={rightIrisRef} className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center'>
              <div ref={rightLineRef} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center font-semibold text-[10px] text-zinc-900 tracking-wider'>PLAY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;

