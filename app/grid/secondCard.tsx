'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import WatchfaceComponent from '../imports/WatchfaceComponent';

interface SlideContent {
  number: string;
  text: string;
}

const slideData: SlideContent[] = [
  { number: '1', text: 'PROJECT SUCCESSFULLY DELIVERED TO CLIENT' },
  { number: '4', text: 'PROJECTS COMPLETED THIS YEAR' },
  { number: '2', text: 'MERIT AWARDS FROM IET' },
  { number: '1', text: 'ONGOING PROJECTS - DEVRIM' },
];

export default function SecondCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const startTimeRef = useRef<number>(0);
  const elapsedRef = useRef<number>(0);
  
  const currentSlideRef = useRef<HTMLDivElement>(null);
  const nextSlideRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const pendingIndexRef = useRef<number | null>(null);
  const pendingDirectionRef = useRef<number>(1);
  
  // Touch/Drag interaction state
  const dragStartXRef = useRef<number>(0);
  const dragStartYRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const swipeThreshold = 50; // Minimum swipe distance to trigger navigation

  // Auto-advance functionality
  useEffect(() => {
    // Reset progress and timing when slide changes
    //setProgress(0);
    startTimeRef.current = Date.now();
    elapsedRef.current = 0;
  }, [activeIndex]);

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);
  
  // Handle slide transitions with GSAP
  useEffect(() => {
    if (nextIndex === activeIndex) {
      return;
    }

    if (isAnimatingRef.current) {
      return;
    }

    const newIndex = nextIndex;
    const dir = pendingDirectionRef.current;
    pendingIndexRef.current = null;

    isAnimatingRef.current = true;

    const exitX = dir > 0 ? -300 : 300;
    const enterX = dir > 0 ? 300 : -300;

    // Set initial position for next slide
    if (nextSlideRef.current) {
      gsap.set(nextSlideRef.current, { x: enterX, opacity: 0 });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
        setActiveIndex(newIndex);
      }
    });

    // Exit current slide
    if (currentSlideRef.current) {
      tl.to(currentSlideRef.current, {
        x: exitX,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      }, 0);
    }

    // Enter new slide
    if (nextSlideRef.current) {
      tl.to(nextSlideRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut'
      }, 0);
    }
  }, [nextIndex, activeIndex]);

  const handleNext = () => {
    const next = (activeIndex + 1) % 4;
    pendingIndexRef.current = next;
    pendingDirectionRef.current = 1;
    setDirection(1);
    // Trigger re-render
    setNextIndex(next);
  };

  const handleEllipseClick = (index: number) => {
    if (index === activeIndex || isAnimatingRef.current) return;
    
    // Calculate shortest path in circular array
    const totalSlides = 4;
    const forwardDistance = (index - activeIndex + totalSlides) % totalSlides;
    const backwardDistance = (activeIndex - index + totalSlides) % totalSlides;
    
    // Choose direction based on shortest path
    const dir = forwardDistance <= backwardDistance ? 1 : -1;
    
    pendingIndexRef.current = index;
    pendingDirectionRef.current = dir;
    setDirection(dir);
    // Trigger re-render
    setNextIndex(index);
  };

  const handlePrevious = () => {
    const prev = (activeIndex - 1 + 4) % 4;
    pendingIndexRef.current = prev;
    pendingDirectionRef.current = -1;
    setDirection(-1);
    // Trigger re-render
    setNextIndex(prev);
  };

  // Mouse drag event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimatingRef.current) return;
    
    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;
    isDraggingRef.current = true;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || isAnimatingRef.current) return;
    
    const deltaX = Math.abs(e.clientX - dragStartXRef.current);
    const deltaY = Math.abs(e.clientY - dragStartYRef.current);
    
    // Prevent text selection during drag
    if (deltaX > 5 || deltaY > 5) {
      e.preventDefault();
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || isAnimatingRef.current) return;
    
    const deltaX = e.clientX - dragStartXRef.current;
    
    isDraggingRef.current = false;
    setIsPaused(false);
    
    // Check if swipe exceeds threshold
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        // Swipe right - go to previous
        handlePrevious();
      } else {
        // Swipe left - go to next
        handleNext();
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      // If dragging and mouse leaves, treat as mouseup
      handleMouseUp(e);
    }
    setIsPaused(false);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimatingRef.current) return;
    
    dragStartXRef.current = e.touches[0].clientX;
    dragStartYRef.current = e.touches[0].clientY;
    isDraggingRef.current = true;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || isAnimatingRef.current) return;
    
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    const deltaX = touchX - dragStartXRef.current;
    const deltaY = touchY - dragStartYRef.current;
    
    // Only handle horizontal swipes (ignore vertical scrolling)
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || isAnimatingRef.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - dragStartXRef.current;
    
    isDraggingRef.current = false;
    setIsPaused(false);
    
    // Check if swipe exceeds threshold
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        // Swipe right - go to previous
        handlePrevious();
      } else {
        // Swipe left - go to next
        handleNext();
      }
    }

    
  };

  useEffect(() => {
    if (isPaused) {
      // Save elapsed time when pausing
      elapsedRef.current += Date.now() - startTimeRef.current;
      return;
    }

    // Resume from where we left off
    startTimeRef.current = Date.now();
    const totalDuration = 3000;
    const remainingTime = totalDuration - elapsedRef.current;

    const progressInterval = setInterval(() => {
      const elapsed = elapsedRef.current + (Date.now() - startTimeRef.current);
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);
    }, 100); // Update every 100ms

    const timer = setTimeout(() => {
      handleNext();
    }, remainingTime);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [isPaused, activeIndex]);

  return (
      <div 
        className="relative w-[306px] h-[306px] touch-none select-none cursor-grab active:cursor-grabbing col-span-2 mx-[24] my-[20]"
        onMouseEnter={() => !isDraggingRef.current && setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <WatchfaceComponent 
          activeIndex={activeIndex}
          onEllipseClick={handleEllipseClick}
          progress={progress}
        />
        
        {/* Animated content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          {/* Current slide */}
          <div
            ref={currentSlideRef}
            className="absolute flex flex-col items-center justify-center"
          >
            <p className="font-['Oxanium:Medium',sans-serif] font-medium text-[64px] text-white mb-2">
              {slideData[activeIndex].number}
            </p>
            <p className="font-['Oxanium:Medium',sans-serif] font-medium text-[20px] text-center text-white w-[176px]">
              {slideData[activeIndex].text}
            </p>
          </div>
          
          {/* Next slide (for transition) */}
          <div
            ref={nextSlideRef}
            className="absolute flex flex-col items-center justify-center"
            style={{ opacity: 0 }}
          >
            <p className="font-['Oxanium:Medium',sans-serif] font-medium text-[64px] text-white mb-2">
              {slideData[nextIndex].number}
            </p>
            <p className="font-['Oxanium:Medium',sans-serif] font-medium text-[20px] text-center text-white w-[176px]">
              {slideData[nextIndex].text}
            </p>
          </div>
        </div>
      </div>
  );
}