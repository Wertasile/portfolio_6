"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import svgPaths from "../imports/svg-pztb8xcdkj";

function Frame() {
  return <div className="absolute backdrop-blur-[80px] backdrop-filter bg-[rgba(0,0,0,0.3)] h-[347px] left-0 rounded-[24px] top-0 w-[100%]" data-name="FRAME" />;
}

type CardProps = {
  className: string
}

export default function Card({className = '',}: CardProps) {
  const vector2Ref = useRef<HTMLDivElement>(null);
  const vector4Ref = useRef<HTMLDivElement>(null);
  const vector3Ref = useRef<HTMLDivElement>(null);
  const vector5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Each vector rotates 45 degrees every 2 seconds
    // After 8 rotations (8 × 45 = 360 degrees), it completes a full rotation
    // Total duration: 8 × 2 seconds = 16 seconds for a full 360-degree rotation

    // Animate Vector 2 (Cyan) - clockwise rotation
    if (vector2Ref.current) {
      gsap.to(vector2Ref.current, {
        rotation: 360,
        duration: 16,
        repeat: -1,
        ease: "none", // Linear animation
      });
    }

    // Animate Vector 4 (Yellow) - counter-clockwise rotation
    if (vector4Ref.current) {
      gsap.to(vector4Ref.current, {
        rotation: -360,
        duration: 16,
        repeat: -1,
        ease: "none",
      });
    }

    // Animate Vector 3 (Green) - clockwise rotation with offset
    if (vector3Ref.current) {
      gsap.to(vector3Ref.current, {
        rotation: 360,
        duration: 16,
        repeat: -1,
        ease: "none",
      });
    }

    // Animate Vector 5 (Red) - counter-clockwise rotation with offset
    if (vector5Ref.current) {
      gsap.to(vector5Ref.current, {
        rotation: -360,
        duration: 16,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className={`relative h-[347px] rounded-3xl border-[#353535] border-[0.5px] max-w-[924px] col-span-3 ${className}`} data-name="CARD 1">
      <div className="absolute bg-[#2f3241] h-[347px] left-0 overflow-clip rounded-[24px] top-0 w-[100%]" data-name="Animated Background">
        {/* Vector 2 - Cyan */}
        <div ref={vector2Ref} className="absolute h-[250.745px] left-[223px] top-0 w-[550px]">
          <div className="absolute inset-[-0.16%_-0.08%_-0.19%_-0.07%]" style={{ "--fill-0": "rgba(95, 255, 255, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 551 252">
              <path d={svgPaths.p3ee9e800} fill="var(--fill-0, #5FFFFF)" id="Vector 2" stroke="var(--stroke-0, black)" strokeWidth="0.767978" />
            </svg>
          </div>
        </div>

        {/* Vector 4 - Yellow */}
        <div ref={vector4Ref} className="absolute h-[646.068px] left-[84.52px] top-[-156.34px] w-[306px]">
          <div className="absolute inset-[-0.06%_-0.12%]" style={{ "--fill-0": "rgba(255, 234, 0, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 307 647">
              <path d={svgPaths.p3aa19600} fill="var(--fill-0, #FFEA00)" id="Vector 4" stroke="var(--stroke-0, black)" strokeWidth="0.764045" />
            </svg>
          </div>
        </div>

        {/* Vector 3 - Green */}
        <div ref={vector3Ref} className="absolute h-[425.597px] left-[559.68px] top-[45.31px] w-[382.773px]">
          <div className="absolute inset-[-0.09%_-0.18%_-0.1%_-0.11%]" style={{ "--fill-0": "rgba(5, 255, 116, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 427">
              <path d={svgPaths.p36b05c00} fill="var(--fill-0, #05FF74)" id="Vector 3" stroke="var(--stroke-0, black)" strokeWidth="0.78437" />
            </svg>
          </div>
        </div>

        {/* Vector 5 - Red */}
        <div ref={vector5Ref} className="absolute h-[425.66px] left-[206px] top-[42px] w-[511.999px]">
          <div className="absolute inset-[-0.08%_-0.07%]" style={{ "--fill-0": "rgba(255, 0, 0, 1)", "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 513 427">
              <path d={svgPaths.p12789500} fill="var(--fill-0, #FF0000)" id="Vector 5" stroke="var(--stroke-0, black)" strokeWidth="0.684715" />
            </svg>
          </div>
        </div>

        <Frame />
        
      </div>

      <div className="absolute top-0 left-0 w-[100%] h-[100%] p-[8px]">
        <div className="flex h-full flex-col gap-2 justify-between w-[100%]" data-name="AL - TEXT + ICON">
          <div>
            <h1 className="z-2">CREATIVE DEVELOPER AND DESIGNER</h1>
            <div className="text-[16px]">*SITE STILL UNDER CONSTRUCTION</div>
          </div>
          
          {/* <IconFramEs /> */}
          <div className="hidden sm:flex flex-row flex-wrap gap-2">
            <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center border-[#353535] border-[0.5px]'>FIGMA</div>
            <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center border-[#353535] border-[0.5px]'>WEBFLOW</div>
            <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center border-[#353535] border-[0.5px]'>REACT</div>
            <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center border-[#353535] border-[0.5px]'>NEXT.JS</div>
            <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center border-[#353535] border-[0.5px]'>MONGODB</div>
            <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center border-[#353535] border-[0.5px]'>NODE.JS</div>
            <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center border-[#353535] border-[0.5px]'>.NET</div>
            <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center border-[#353535] border-[0.5px]'>AWS</div>
            <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center border-[#353535] border-[0.5px]'>GSAP</div>
          </div>
        </div>
      </div>

    </div>
  );
}
