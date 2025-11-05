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
    <div className="bg-[#0c0e1a] flex flex-col gap-8 min-h-screen p-1 sm:p-4 relative overflow-hidden">
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
          <header className="flex items-center justify-center z-10 animate-fadeIn">
            <div className="w-[1000px] bg-[#ECE2D0] flex text-[20px] items-center justify-between sm:rounded-[24px] text-black p-2 sm:py-[12px] sm:px-[24px] shadow-md">
              <div>
                <a href="#" className="font-semibold">Ahmed Arfan</a>
              </div>
              <nav className="flex items-center gap-4 ">
                <a href="#" className="hover:text-gray-700 transition-colors">
                  About
                </a>
                <a href="#" className="hover:text-gray-700 transition-colors">
                  Work
                </a>
                <a href="#" className="hover:text-gray-700 transition-colors">
                  Contact
                </a>
                <a href="/CV.pdf" target="_blank" className="primary-btn">
                  DOWNLOAD CV
                </a>
              </nav>
            </div>
          </header>

          <main className="flex items-center justify-center z-10 animate-fadeIn">
            <div className="max-w-[1000px] flex flex-col gap-2 w-full sm:grid grid-cols-[repeat(auto-fit,minmax(166px,1fr))]">
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
