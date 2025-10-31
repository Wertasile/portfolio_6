"use client"

import { CircleIcon } from '@phosphor-icons/react'
import React, { useEffect, useRef, useState } from 'react'

type SummaryProps = {
  role: string;
  location: string;
  time: string;
}

export const Summary = ({role, location, time}: SummaryProps) => {
  return (
    <div className='bg-[#ECE2D0] rounded-[24px] p-2 flex justify-between items-center text-[#2F3241]'>
      <div className='fit-content flex flex-col'>
        <div className='font-semibold'>{role}</div>
        <i>{location}</i>
      </div>
      <div>
        {time}
      </div>
    </div>
  )
}

type CardProps = {
  role: string;
  location: string;
  company: string;
  time: string;
  tools: string;
  desc: string;
}

export const Card = ({role, location, company, time, tools, desc}: CardProps) => {
  return(
  <div className='flex flex-col h-full gap-2 justify-around'>
    <div className='flex justify-between items-center'>
      <h2>{role}</h2>
      <p>{location}</p>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center'>CLIENT</div>
      <div className=''>{company}</div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center'>TIME</div>
      <div className=''>{time}</div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center'>TOOLS</div>
      <div className=''>{tools}</div>
    </div>
    <div className='flex gap-2'>
      <div className='bg-[#2F3241] h-fit p-2 min-w-[80px] rounded-3xl text-center'>DESC</div>
      <div className=''>{desc} </div>
    </div>
  </div>
  )
}

const ThirdCard = () => {
  const [highlights, setHighlights] = useState<"Summary" | "Fadah" | "IT" | "Comp">("Summary")
  const [paused, setPaused] = useState(false)
  const [slideHeight, setSlideHeight] = useState(0)

  const highlightList = ["Summary", "Fadah", "IT", "Comp"] as const

  const highlightIndex = {
    Summary: 0,
    Fadah: 1,
    IT: 2,
    Comp: 3
  }

  const carousalRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // 🕐 Auto Slide
  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setHighlights(prev => {
        const currentIndex = highlightIndex[prev]
        const nextIndex = (currentIndex + 1) % highlightList.length
        return highlightList[nextIndex]
      })
    }, 5000) // 3s per slide

    return () => clearInterval(interval)
  }, [paused])

  // 🎞 Apply Slide Transform
  useEffect(() => {
    if (carousalRef.current) {
      const index = highlightIndex[highlights]
      carousalRef.current.style.transition = "transform 0.8s ease-in-out"
      carousalRef.current.style.transform = `translateY(-${index * slideHeight}px)`
    }
  }, [highlights, slideHeight])

  // 📏 Dynamically update slide height
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setSlideHeight(containerRef.current.offsetHeight)
      }
    }

    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    if (containerRef.current) resizeObserver.observe(containerRef.current)

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <div
      className='col-span-2 bg-[#5F9FFF] flex rounded-[24px] justify-between items-center p-[8px]'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={containerRef}
        className='h-[400px] flex justify-between gap-2 w-full overflow-hidden relative'
      >
        {/* 🧩 Carousel Container */}
        <div
          ref={carousalRef}
          className='flex flex-col transition-transform duration-700 ease-in-out'
          style={{ height: `${highlightList.length * 100}%` }}
        >
          {/* Slides */}
          <div className='flex flex-col h-full gap-2'>
            <h1>CAREER</h1>
            <div className='flex flex-col gap-2 '>
              <Summary role='Freelance Developer' location='Freelance' time='JUN `25 - PRESENT'/>
              <Summary role='Web Developer' location='Fadah Al Doha' time='JUL `25 - AUG `25'/>
              <Summary role='IT Support Staff' location='University of Greenwich' time='AUG `24 - FEB `25'/>
              <Summary role='BEng Comp Eng Student' location='University of Greenwich' time='SEP `21 - JUL `24'/>
            </div>
          </div>

          <Card role='Web Developer' location='REMOTE' time='JUL `25 - AUG `25' tools='NEXTJS | REACT | GSAP | RESEND' company='FADAH AL DOHA TRADING AND CONTRACTING'
            desc="DELIVERED A NEW WEBSITE FOR FADAH AL DOHA, WHO WANTED AN INCREASE IN THEIR ONLINE PRESENCE, AS WELL AS A WAY TO INCREASE THEIR LEADS VIA ONLINE CONTACT."
          />

          <Card role='IT Support' location='LONDON' time='AUG `24 - FEB `25' tools='ITSM | AZURE | HALO | MOODLE LMS' company='UNIVERSITY OF GREENWICH'
            desc="PROVIDED ONLINE AND IN-PERSON HARWARE, SOFTWARE AND NETWORKING SUPPORT. DELEGATED USER ACCOUNTS AND POLICIES THROUGH AZURE AD."
          />

          <Card role='Comp Eng Student' location='remote' time='JUL `25 - AUG `25' tools='HARDWARE | NETWORKING | APP DEV ' company='UNIVERSITY OF GREENWICH'
            desc="LEARNED FOUNDATIONAL BASICS IN SOFTWARE DEVELOPMENT, WORKING WITH SENSORS AND HARDWARE AS WELL AS SENSORS AND NETWORKS."
          />
        </div>

        {/* ⭕ Navigation Circles */}
        <div className='flex flex-col gap-5 justify-center items-center'>
          {highlightList.map((item) => (
            <CircleIcon
              key={item}
              size={'14'}
              onClick={() => setHighlights(item)}
              weight={highlights === item ? 'fill' : 'regular'}
              className='cursor-pointer text-white transition-all duration-200'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThirdCard
