'use client';

import svgPaths from "../imports/svg-4hqu2btjbp";

interface WatchfaceBottomComponentSetProps {
  progress: number;
}

function WatchfaceBottomComponentSet({ progress }: WatchfaceBottomComponentSetProps) {
  // Arc parameters - positioned at the bottom of the watchface
  const centerX = 153;
  const centerY = 153;
  const radius = 120;
  const startAngle = 225; // Start from bottom-left
  const endAngle = 315; // End at bottom-right
  
  // Convert angles to radians
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  
  // Calculate arc path
  const startX = centerX + radius * Math.cos(startRad);
  const startY = centerY + radius * Math.sin(startRad);
  const endX = centerX + radius * Math.cos(endRad);
  const endY = centerY + radius * Math.sin(endRad);
  
  // Create arc path (going clockwise)
  const arcPath = `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;
  
  // Calculate arc length for progress animation
  const arcAngle = endAngle - startAngle;
  const arcLength = (arcAngle / 360) * (2 * Math.PI * radius);
  const progressOffset = arcLength - (arcLength * progress / 100);
  
  return (
    <div className="absolute left-0 top-0 size-full pointer-events-none" data-name="Watchface Bottom Component Set">
      <svg className="absolute left-0 top-0 size-full" viewBox="0 0 306 306">
        {/* Background arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="rgba(255, 234, 0, 0.2)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="#ECE2D0"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={arcLength}
          strokeDashoffset={progressOffset}
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
      </svg>
    </div>
  );
}

interface WatchfaceTopProps {
  activeIndex: number;
  onEllipseClick: (index: number) => void;
}

function WatchfaceTop({ activeIndex, onEllipseClick }: WatchfaceTopProps) {
  const ellipses = [
    { d: svgPaths.p1d1d300, index: 0 },
    { d: svgPaths.p30ad9f80, index: 1 },
    { d: svgPaths.p37986200, index: 2 },
    { d: svgPaths.p3ba47800, index: 3 },
  ];

  return (
    <div className="absolute h-[64.455px] left-[48px] top-[-13px] w-[210.111px]" data-name="Watchface top">
      <div className="absolute bottom-[-2.19%] left-[-0.67%] right-[-0.67%] top-0 rounded-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 213 66">
          <g id="Watchface top">
            {ellipses.map((ellipse, idx) => (
              <path
                key={idx}
                d={ellipse.d}
                fill={activeIndex === ellipse.index ? "var(--fill-0, #ECE2D0)" : "transparent"}
                stroke="var(--stroke-0, #4d4709ff)"
                strokeWidth={activeIndex === ellipse.index ? "2" : "1"}
                onClick={() => onEllipseClick(ellipse.index)}
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                className="hover:opacity-80"
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

interface WatchfaceComponentProps {
  activeIndex: number;
  onEllipseClick: (index: number) => void;
  progress: number;
}

export default function WatchfaceComponent({ activeIndex, onEllipseClick, progress }: WatchfaceComponentProps) {
  return (
      <div className="size-[306px] top-0" data-name="Watchface">
        <div className="absolute inset-[-3.268%]" style={{ "--fill-0": "#04071D", "--stroke-0": "#ECE2D0" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 326">
            <circle cx="163" cy="163" fill="var(--fill-0, #04071D)" id="Watchface" r="158" stroke="var(--stroke-0, #ECE2D0)" strokeWidth="10" />
          </svg>
        </div>
      <WatchfaceBottomComponentSet progress={progress} />
      <WatchfaceTop activeIndex={activeIndex} onEllipseClick={onEllipseClick} />
    </div>
  );
}
