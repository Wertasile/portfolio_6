import { RectangleIcon } from '@phosphor-icons/react';
import React, { useState, useEffect, useRef } from 'react';

type ShowReelProps = {
  video: string;
  title: string;
};

export const ShowReel = ({ video, title }: ShowReelProps) => {
  return (
    <div className="flex-col w-full shrink-0">
      <video
        src={video}
        autoPlay
        muted
        
        playsInline
        className="w-full h-auto rounded-[24px]"
      />
      <h2 className="text-center mt-2 text-white font-semibold text-sm sm:text-base md:text-lg">
        {title}
      </h2>
    </div>
  );
};

const FourthCard = () => {
  const [highlights, setHighlights] = useState<'devrim' | 'fadah' | 'easynote'>('devrim');
  const [isPaused, setIsPaused] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const highlightList = ['devrim', 'fadah', 'easynote'] as const;

  const highlightToIndex = {
    devrim: 0,
    fadah: 1,
    easynote: 2,
  };

  // 🕒 Auto-slide every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setHighlights((prev) => {
        const currentIndex = highlightToIndex[prev];
        const nextIndex = (currentIndex + 1) % highlightList.length;
        return highlightList[nextIndex];
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // 🎞 Update slide position
  useEffect(() => {
    if (carouselRef.current) {
      const index = highlightToIndex[highlights];
      carouselRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  }, [highlights, slideWidth]);

  // 📏 Handle responsiveness — track container width
  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      const width = containerRef.current?.offsetWidth || 0;
      setSlideWidth(width);
    };

    // Initial width
    updateWidth();

    // ResizeObserver for dynamic resizing
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="col-span-3 rounded-[24px] flex flex-col items-center bg-[#FF0000] p-4">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={carouselRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ width: `${highlightList.length * slideWidth}px` }}
        >
          <div style={{ width: `${slideWidth}px` }}>
            <ShowReel video="/videos/DevRim-Showreel.mp4" title="DEVRIM" />
          </div>
          <div style={{ width: `${slideWidth}px` }}>
            <ShowReel video="/videos/Fadah-Al-Doha-Showreel.mp4" title="FADAH-AL-DOHA" />
          </div>
          <div style={{ width: `${slideWidth}px` }}>
            <ShowReel video="/videos/EasyNote-Showreel.mp4" title="EASYNOTE" />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-3 mt-4">
        {highlightList.map((item) => (
          <RectangleIcon
            key={item}
            size={'30px'}
            onClick={() => setHighlights(item)}
            weight={highlights === item ? 'fill' : 'regular'}
            className="cursor-pointer text-white"
          />
        ))}
      </div>
    </div>
  );
};

export default FourthCard;
