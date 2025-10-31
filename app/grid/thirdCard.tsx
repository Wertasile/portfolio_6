import { CircleIcon } from '@phosphor-icons/react'
import React from 'react'

type SummaryProps = {
  role: string;
  location: string;
  time: string;
}

export const Summary = ({role, location, time}:SummaryProps) => {
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


const ThirdCard = () => {
  return (    
    <div className='col-span-2 bg-[#5F9FFF] flex rounded-[24px] justify-between items-center p-[8px]'>
      <div className='w-full flex flex-col h-full gap-2 justify-around' >
        
        <Summary role='Freelance Developer' location='Freelance' time='JUN `25 - PRESENT'/>
        <Summary role='Web Developer' location='Fadah Al Doha' time='JUL `25 - AUG `25'/>
        <Summary role='IT Support Staff' location='University of Greenwich' time='AUG `24 - FEB `25'/>
        <Summary role='BEng Comp Eng Student' location='University of Greenwich' time='SEP `21 - JUL `24'/>

      </div>

      {/* <div className='w-[50px] flex flex-col gap-5 items-center justify-center'>
        <CircleIcon size={12} weight="fill" />
        <CircleIcon size={12} weight="fill" />
        <CircleIcon size={12} weight="fill" />
        <CircleIcon size={12} weight="fill" />
      </div> */}
    </div>
  )
}

export default ThirdCard