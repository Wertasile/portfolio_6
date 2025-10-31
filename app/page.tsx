"use client";

import { useEffect, useState } from "react";
import LoadingBar from "./components/LoadingBar";
import LeftStripes from "./components/LeftStripes";
import FirstCard from "./grid/firstCard";
import SecondCard from "./grid/secondCard";
import ThirdCard from "./grid/thirdCard";
import FourthCard from "./grid/fourthCard";
import RightIcons from "./components/RightIcons";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Automatically stop loading after e.g. 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0c0e1a] flex flex-col gap-8 min-h-screen p-4 relative overflow-hidden">
      {/* LOADING SCREEN */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#0c0e1a]">
          <LoadingBar isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
      )}

      {/* MAIN CONTENT */}
      {!isLoading && (
        <>
          <LeftStripes />
          <RightIcons />
          <header className="flex items-center justify-center z-10 animate-fadeIn font-semibold">
            <div className="w-[1000px] bg-[#ECE2D0] flex text-[20px] items-center justify-between rounded-[24px] text-black py-[12px] px-[24px] shadow-md">
              <div>
                <a href="#">Ahmed Arfan</a>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-gray-700 transition-colors">
                  About
                </a>
                <a href="#" className="hover:text-gray-700 transition-colors">
                  Work
                </a>
                <a href="#" className="hover:text-gray-700 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </header>

          <main className="flex items-center justify-center z-10 animate-fadeIn">
            <div className="w-[1000px] content-tiles">
              <FirstCard />
              <SecondCard />
              <ThirdCard />
              <FourthCard />
            </div>
          </main>
        </>
      )}
    </div>
  );
}
