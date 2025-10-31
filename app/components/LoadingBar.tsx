import { useState, useEffect } from "react";

type LoadingBarProps = 
  { isLoading: boolean, setIsLoading: (isLoading: boolean) => void }

function LoadingBar({ isLoading, setIsLoading }: LoadingBarProps) {
    const [progress, setProgress] = useState(0);
    
  
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev === 100) {
            setIsLoading(false);
            return 0;
          }
          return prev + 1;
        });
      }, 30);
  
      return () => clearInterval(interval);
    }, []);
  
    // Width: 200px, padding: 5.785px each side
    // Max fill width: 200 - (5.785 * 2) = 188.43px
    const maxWidth = 188.43;
    const currentWidth = (progress / 100) * maxWidth;
  
    return (
        <div className="h-[100vh] w-[100vw] absolute top-0 left-0 flex items-center bg-[#0c0e1a] justify-center z-50">
            <div className="bg-white h-[40px] mx-auto relative rounded-[185.114px] w-full max-w-[200px]" data-name="Loading bar">
                <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[57.848px] items-center px-[5.785px] py-[8px] relative size-full">
                        <div 
                        className="h-[24px] rounded-[578.481px] shrink-0 transition-all duration-100 ease-linear overflow-hidden"
                        style={{ width: `${currentWidth}px` }}
                        >
                        <div
                            className="h-full rounded-[578.481px]"
                            style={{ 
                            width: `${maxWidth}px`,
                            background: 'linear-gradient(to right, #5FFFFF 0%, #05FF74 33%, #FFEA00 66%, #FF0000 100%)'
                            }}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }

export default LoadingBar;