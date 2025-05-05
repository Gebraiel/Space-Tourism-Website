"use client";
import React, { useState } from "react";
import { motion } from "motion/react"
export default function Destinations({ destinations }) {
    const [destinationIndex, setDestinationIndex] = useState(0);
    return (
    <div className="lg:pt-22 lg:pb-0 py-11 flex lg:flex-row flex-col gap-8 justify-between items-center">
        
            <motion.img
                src={destinations[destinationIndex].images["webp"]}
                width="480"
                height="480"
                className="lg:w-[480px] md:w-[300px] w-[150px]"
                alt="Destination Image"
                initial={{x:"-20px",opacity:0}}
                animate={{x:0,opacity:1}}
                exit={{opacity:0}}
                key={destinations[destinationIndex].name}
            />
        
        <div className="lg:w-1/2 md:w-full flex flex-col lg:items-start items-center gap-10">
            <motion.ul initial={{opacity:0}} animate={{opacity:1}} className="flex lg:justify-start justify-center gap-8 text-8 font-barlow ">
                {destinations.map((dest,index)=><li className="text-white" key={dest.name}><button className={`cursor-pointer pb-3 border-b border-transparent hover:border-white hover:text-white transition-colors duration-300 uppercase ${index == destinationIndex ? 'text-white border-white':'text-blue-300'}`} onClick={()=>setDestinationIndex(index)}>{dest.name}</button></li>)}
            </motion.ul>

            <motion.article  initial={{opacity:0,x:"20px"}} animate={{opacity:1,x:0}} key={destinations[destinationIndex].description} className="flex flex-col gap-10 container lg:w-sm md:w-md w-full lg:text-left text-center">
                <div>
                    <h1 className="text-white text-2 font-bellefair uppercase">{destinations[destinationIndex].name}</h1>
                    <p className="text-blue-300 text-9 font-barlow">{destinations[destinationIndex].description}</p>
                </div>
                <div className="bg-[#979797] opacity-25  h-[1px]"></div>
                <div className="flex lg:justify-start justify-around gap-16">
                    <div className="">
                        <p className="uppercase text-7 font-barlow text-blue-300 mb-3 ">avg. Distance</p>
                        <p className="text-white text-6 font-bellefair">{destinations[destinationIndex].distance}</p>
                    </div>
                    <div className="">
                        <p className="uppercase text-7 font-barlow text-blue-300 mb-3 ">Est. travel time</p>
                        <p className="text-white text-6 font-bellefair">{destinations[destinationIndex].travel}</p>
                    </div>
                </div>
            </motion.article>
        </div>
    </div>
    );
}
