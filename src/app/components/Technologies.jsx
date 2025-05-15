"use client"
import React, { useState } from 'react';
import {motion} from "motion/react";

export default function Technologies({techs}) {
  const [techIndex, setTechIndex] = useState(0);
    return (
    <div className="flex lg:flex-row flex-col-reverse gap-8 justify-between md:items-center md:mb-0 mb-6">
        <div className="flex lg:flex-row flex-col justify-end items-center gap-10 lg:mt-0 ">
            <motion.ul initial={{opacity:0}} animate={{opacity:1}} className="flex lg:flex-col flex-row items-center lg:justify-start justify-center lg:gap-8 gap-4 text-8 font-barlow ">
                {techs.map((crew,index)=><li className="text-white" key={crew.name}><button className={`cursor-pointer lg:size-20 md:size-14 size-10 rounded-full text-4 ${index == techIndex ? "bg-white text-black":"border border-white/15"}`} onClick={()=>setTechIndex(index)}>{index+1}</button></li>)}
            </motion.ul>
            <motion.article  initial={{opacity:0,x:"-20px"}} animate={{opacity:1,x:0}} key={techs[techIndex].description} className="flex flex-col lg:gap-0 gap-6 max-w-[500px] lg:text-left text-center lg:px-0 px-6">
                
                    <div className='uppercase font-bellefair'>
                        <h2 className='text-white/50 text-4'>THE TERMINOLOGY…</h2>
                        <h1 className="text-white text-3">{techs[techIndex].name}</h1>

                    </div>

                    <p className="text-blue-300 text-9 font-barlow lg:ml-0 m-auto">{techs[techIndex].description}</p>
                
            </motion.article>
            
        </div>
        <motion.img
            src={techs[techIndex].images["portrait"]}
            className='m-auto lg:block hidden'
            alt="Tech Image"
            initial={{x:"20px",opacity:0}}
            animate={{x:0,opacity:1}}
            exit={{opacity:0}}
            key={techs[techIndex].name}
        />        
        <motion.img
            src={techs[techIndex].images["landscape"]}
            className='m-auto block lg:hidden'
            alt="Tech Image"
            initial={{x:"20px",opacity:0}}
            animate={{x:0,opacity:1}}
            exit={{opacity:0}}
            key={techs[techIndex].images["landscape"]}
        />        
    </div>
  )
}
