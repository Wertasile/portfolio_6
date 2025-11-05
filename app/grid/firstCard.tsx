"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import svgPaths from "../imports/svg-pztb8xcdkj";

function Frame() {
  return <div className="absolute backdrop-blur-[80px] backdrop-filter bg-[rgba(0,0,0,0.3)] h-[347px] left-0 rounded-[24px] top-0 w-[100%]" data-name="FRAME" />;
}

function Typescript() {
  return (
    <div className="absolute left-1/2 size-[51.073px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="typescript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="typescript">
          <path d="M0 0H51.0727V51.0727H0V0Z" fill="var(--fill-0, #ECE2D0)" id="Vector" />
          <path d={svgPaths.p11618500} fill="var(--fill-0, #2F3241)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Typescript1() {
  return (
    <div className="absolute left-[11.07px] size-[51.073px] top-[11.07px]" data-name="typescript">
      <Typescript />
    </div>
  );
}

function Figma() {
  return (
    <div className="absolute left-1/2 size-[46.817px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
        <g id="figma">
          <path d={svgPaths.pc257800} fill="var(--fill-0, #ECE2D0)" id="Vector" />
          <path d={svgPaths.p24142c80} fill="var(--fill-0, #ECE2D0)" id="Vector_2" />
          <path d={svgPaths.p2c936800} fill="var(--fill-0, #ECE2D0)" id="Vector_3" />
          <path d={svgPaths.p8d2300} fill="var(--fill-0, #ECE2D0)" id="Vector_4" />
          <path d={svgPaths.p8366400} fill="var(--fill-0, #ECE2D0)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Figma1() {
  return (
    <div className="absolute left-[12.77px] size-[46.817px] top-[12.77px]" data-name="figma">
      <Figma />
    </div>
  );
}

function Gsap() {
  return (
    <div className="absolute left-[2.55px] size-[68.097px] top-[2.55px]" data-name="gsap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
        <g id="gsap">
          <g id="Union">
            <path d={svgPaths.p31fb6200} fill="var(--fill-0, #ECE2D0)" />
            <path d={svgPaths.p3352ec80} fill="var(--fill-0, #ECE2D0)" />
            <path clipRule="evenodd" d={svgPaths.p67fa680} fill="var(--fill-0, #ECE2D0)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p8a34500} fill="var(--fill-0, #ECE2D0)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Mongodb() {
  return (
    <div className="absolute h-[59.585px] left-[calc(50%+0.273px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[26.764px]" data-name="mongodb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 60">
        <g id="mongodb">
          <path d={svgPaths.p16a6b500} fill="var(--fill-0, #ECE2D0)" id="Vector" />
          <path d={svgPaths.p2f643d00} fill="var(--fill-0, #ECE2D0)" fillOpacity="0.66" id="Vector_2" />
          <path d={svgPaths.p2366de00} fill="var(--fill-0, #ECE2D0)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Mongodb1() {
  return (
    <div className="absolute left-[5.11px] size-[59.585px] top-[6.81px]" data-name="mongodb">
      <Mongodb />
    </div>
  );
}

function Aws() {
  return (
    <div className="absolute h-[30.473px] left-[11.07px] top-[21.28px] w-[50.959px]" data-name="aws">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 31">
        <g id="aws">
          <path d={svgPaths.p3a29480} fill="var(--fill-0, #ECE2D0)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p368c8680} fill="var(--fill-0, #ECE2D0)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p374c7e00} fill="var(--fill-0, #ECE2D0)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Python() {
  return (
    <div className="absolute h-[46.573px] left-[12.77px] top-[13.62px] w-[46.817px]" data-name="python">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
        <g id="python">
          <path d={svgPaths.p3be85500} fill="var(--fill-0, #ECE2D0)" id="Vector" />
          <path d={svgPaths.p3f503600} fill="var(--fill-0, #ECE2D0)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Net() {
  return (
    <div className="absolute left-[5.11px] size-[59.585px] top-[6.81px]" data-name="net">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g clipPath="url(#clip0_1_1116)" id="net">
          <g id="Vector"></g>
          <path d={svgPaths.p2775a700} fill="var(--fill-0, #ECE2D0)" id="Vector_2" />
          <path d={svgPaths.pfa123f0} fill="var(--fill-0, #ECE2D0)" id="Vector_3" />
          <path d={svgPaths.p8b405f0} fill="var(--fill-0, #ECE2D0)" id="Vector_4" />
          <path d={svgPaths.p1104c880} fill="var(--fill-0, #ECE2D0)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1116">
            <rect fill="white" height="59.5848" width="59.5848" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Nextjs() {
  return (
    <div className="absolute h-[12.617px] left-1/2 top-[calc(50%+0.095px)] translate-x-[-50%] translate-y-[-50%] w-[62.138px]" data-name="nextjs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 13">
        <g clipPath="url(#clip0_1_1038)" id="nextjs">
          <path d={svgPaths.p33b76600} fill="var(--fill-0, #ECE2D0)" id="Vector" />
          <path d={svgPaths.p3e4b4780} fill="var(--fill-0, #ECE2D0)" id="Vector_2" />
          <path d={svgPaths.p8bbea80} fill="var(--fill-0, #ECE2D0)" id="Vector_3" />
          <path d={svgPaths.pe452c0} fill="var(--fill-0, #ECE2D0)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p284b45f0} fill="var(--fill-0, #ECE2D0)" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.p3a565280} fill="var(--fill-0, #ECE2D0)" id="Vector_6" />
          <path d={svgPaths.p15288ef0} fill="var(--fill-0, #ECE2D0)" id="Vector_7" />
          <path d={svgPaths.p1b9be700} fill="var(--fill-0, #ECE2D0)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_1_1038">
            <rect fill="white" height="12.6169" width="62.1384" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Nextjs1() {
  return (
    <div className="absolute left-[5.11px] size-[62.138px] top-[6.81px]" data-name="nextjs">
      <Nextjs />
    </div>
  );
}

function Nodejs() {
  return (
    <div className="absolute h-[55.329px] left-[calc(50%+0.206px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[50.208px]" data-name="nodejs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 56">
        <g id="nodejs">
          <path d={svgPaths.p1fa3af80} fill="var(--fill-0, #ECE2D0)" id="Vector" />
          <path d={svgPaths.p1c8ce780} fill="var(--fill-0, #ECE2D0)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Nodejs1() {
  return (
    <div className="absolute left-[8.51px] size-[55.329px] top-[8.51px]" data-name="nodejs">
      <Nodejs />
    </div>
  );
}

function IconFramEs() {
  return (
    <div className="gap-[8.512px] hidden sm:grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[246px] relative shrink-0 w-[256.215px]" data-name="ICON FRAMEs">
      <div className="[grid-area:1_/_2] relative shrink-0 size-[62.312px]" data-name="typescript - active">
        <div className="absolute left-0 size-[73.204px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
            <circle cx="36.6021" cy="36.6021" fill="var(--fill-0, #2F3241)" id="Ellipse 3" r="36.6021" />
          </svg>
        </div>
        <Typescript1 />
      </div>
      <div className="[grid-area:1_/_3] relative shrink-0 size-[62.312px]" data-name="figma - active">
        <div className="absolute left-0 size-[73.204px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
            <circle cx="36.6021" cy="36.6021" fill="var(--fill-0, #2F3241)" id="Ellipse 3" r="36.6021" />
          </svg>
        </div>
        <Figma1 />
      </div>
      <div className="[grid-area:2_/_1] relative shrink-0 size-[62.312px]" data-name="gsap - active">
        <div className="absolute left-0 size-[73.204px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
            <circle cx="36.6021" cy="36.6021" fill="var(--fill-0, #2F3241)" id="Ellipse 3" r="36.6021" />
          </svg>
        </div>
        <Gsap />
      </div>
      <div className="[grid-area:2_/_2] relative shrink-0 size-[62.312px]" data-name="mongodb - active">
        <div className="absolute left-0 size-[73.204px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
            <circle cx="36.6021" cy="36.6021" fill="var(--fill-0, #2F3241)" id="Ellipse 3" r="36.6021" />
          </svg>
        </div>
        <Mongodb1 />
      </div>
      <div className="[grid-area:2_/_3] relative shrink-0 size-[62.312px]" data-name="aws - active">
        <div className="absolute left-0 size-[73.204px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
            <circle cx="36.6021" cy="36.6021" fill="var(--fill-0, #2F3241)" id="Ellipse 3" r="36.6021" />
          </svg>
        </div>
        <Aws />
      </div>
      <div className="[grid-area:3_/_1] relative shrink-0 size-[62.312px]" data-name="python - active">
        <div className="absolute left-0 size-[73.204px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
            <circle cx="36.6021" cy="36.6021" fill="var(--fill-0, #2F3241)" id="Ellipse 3" r="36.6021" />
          </svg>
        </div>
        <Python />
      </div>
      <div className="[grid-area:3_/_2] relative shrink-0 size-[62.312px]" data-name=".net - active">
        <div className="absolute left-0 size-[73.204px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
            <circle cx="36.6021" cy="36.6021" fill="var(--fill-0, #2F3241)" id="Ellipse 3" r="36.6021" />
          </svg>
        </div>
        <Net />
      </div>
      <div className="[grid-area:3_/_3] relative shrink-0 size-[62.312px]" data-name="next.js - active">
        <div className="absolute left-0 size-[73.204px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
            <circle cx="36.6021" cy="36.6021" fill="var(--fill-0, #2F3241)" id="Ellipse 3" r="36.6021" />
          </svg>
        </div>
        <Nextjs1 />
      </div>
      <div className="[grid-area:1_/_1] relative shrink-0 size-[62.312px]" data-name="mongodb - active">
        <div className="absolute left-0 size-[73.204px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
            <circle cx="36.6021" cy="36.6021" fill="var(--fill-0, #2F3241)" id="Ellipse 3" r="36.6021" />
          </svg>
        </div>
        <Nodejs1 />
      </div>
    </div>
  );
}

export default function Card() {
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
    <div className="relative h-[347px] rounded-3xl border-[#353535] border-[0.5px] max-w-[924px] col-span-3" data-name="CARD 1">
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
