"use client"
import React, { useState } from 'react';
import {motion} from "motion/react";
export default function Crews({crews}) {
    const [crewIndex, setCrewIndex] = useState(0);
    
  return (
    <div className="grow flex lg:flex-row flex-col gap-8 justify-between lg:items-end md:items-center lg:pb-12">
        <div className="flex flex-col justify-end lg:items-start items-center lg:gap-42 gap-6 lg:mt-0 md:mt-10">
            <motion.article  initial={{opacity:0,x:"-20px"}} animate={{opacity:1,x:0}} key={crews[crewIndex].description} className="flex flex-col lg:gap-0 gap-6 w-full lg:text-left text-center">
                
                    <div className='uppercase font-bellefair'>
                        <h2 className='text-4 text-white/50'>{crews[crewIndex].role}</h2>
                        <h1 className="text-white text-3">{crews[crewIndex].name}</h1>
                    </div>
                    <p className="text-blue-300 text-9 font-barlow max-w-[430px] lg:ml-0 m-auto">{crews[crewIndex].bio}</p>
                
            </motion.article>
            <motion.ul initial={{opacity:0}} animate={{opacity:1}} className="flex lg:justify-start justify-center  gap-8 text-8 font-barlow ">
                {crews.map((crew,index)=><li className="text-white" key={crew.name}><button className={`cursor-pointer w-[15px] h-[15px] rounded-full ${index == crewIndex ? "bg-white":"bg-white/15"}`} onClick={()=>setCrewIndex(index)}></button></li>)}
            </motion.ul>
        </div>
        <motion.img
                src={crews[crewIndex].images["webp"]}
                className='w-1/2 m-auto'
                alt="Crew Image"
                initial={{x:"20px",opacity:0}}
                animate={{x:0,opacity:1}}
                exit={{opacity:0}}
                key={crews[crewIndex].name}
            />        
    </div>
  )
}
