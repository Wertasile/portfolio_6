'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LeftStripes() {
  const blueStripeRef = useRef<HTMLDivElement>(null);
  const greenStripeRef = useRef<HTMLDivElement>(null);
  const yellowStripeRef = useRef<HTMLDivElement>(null);
  const redStripeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Animate each stripe with staggered delays
    tl.fromTo(
      blueStripeRef.current,
      { y: '-100%' },
      { y: '0%', duration: 1, ease: 'none' },
      0 // Start at 0ms
    )
      .fromTo(
        greenStripeRef.current,
        { y: '-100%' },
        { y: '0%', duration: 1, ease: 'none' },
        0.1 // Start at 100ms
      )
      .fromTo(
        yellowStripeRef.current,
        { y: '-100%' },
        { y: '0%', duration: 1, ease: 'none' },
        0.2 // Start at 200ms
      )
      .fromTo(
        redStripeRef.current,
        { y: '-100%' },
        { y: '0%', duration: 1, ease: 'none' },
        0.3 // Start at 300ms
      );
  }, []);

  return (
    <div className="hidden sm:block fixed left-0 top-0 h-screen w-[191px] pointer-events-none z-[0]" data-name="LEFT - STRIPES">
      <div
        ref={blueStripeRef}
        className="absolute h-full left-0 top-0 w-[41px]"
        data-name="BLUE STRIPE"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
          <path d="M0 0H41V41H0V0Z" fill="#5FFFFF" id="BLUE STRIPE" />
        </svg>
      </div>
      <div
        ref={greenStripeRef}
        className="absolute h-full left-[50px] top-0 w-[41px]"
        data-name="GREEN STRIPE"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
          <path d="M0 0H41V41H0V0Z" fill="#05FF74" id="GREEN STRIPE" />
        </svg>
      </div>
      <div
        ref={yellowStripeRef}
        className="absolute h-full left-[100px] top-0 w-[41px]"
        data-name="YELLOW STRIPE"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
          <path d="M0 0H41V41H0V0Z" fill="#FFEA00" id="YELLOW STRIPE" />
        </svg>
      </div>
      <div
        ref={redStripeRef}
        className="absolute h-full left-[150px] top-0 w-[41px]"
        data-name="RED STRIPE"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
          <path d="M0 0H41V41H0V0Z" fill="#FF0000" id="RED STRIPE" />
        </svg>
      </div>
    </div>
  );
}
