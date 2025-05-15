"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import homeBgD from "@/public/background-home-desktop.jpg";
import homeBgT from "@/public/background-home-tablet.jpg";
import homeBgM from "@/public/background-home-mobile.jpg";

import destinationBgD from "@/public/destination/background-destination-desktop.jpg";
import destinationBgT from "@/public/destination/background-destination-tablet.jpg";
import destinationBgM from "@/public/destination/background-destination-mobile.jpg";

import crewBgD from "@/public/crew/background-crew-desktop.jpg";
import crewBgT from "@/public/crew/background-crew-tablet.jpg";
import crewBgM from "@/public/crew/background-crew-mobile.jpg";

import technologyBgD from "@/public/technology/background-technology-desktop.jpg";
import technologyBgT from "@/public/technology/background-technology-tablet.jpg";
import technologyBgM from "@/public/technology/background-technology-mobile.jpg";

export default function BackgroundImage() {
    const path = usePathname();
    switch(path){
        case '/':
            return( 
                <>
                    <img src={homeBgD.src} className='absolute inset-0 w-full h-full lg:block hidden' alt="Desktop Home Background"/>
                    <img src={homeBgT.src} className='absolute inset-0 w-full h-full lg:hidden md:block hidden' alt="Tablet Home Background"/>
                    <img src={homeBgM.src} className='absolute inset-0 w-full h-full block md:hidden' alt="Mobile Home Background"/>
                </>
            )
        case '/destination' : 
            return( 
                <>
                    <img src={destinationBgD.src} className='absolute inset-0 w-full h-full lg:block hidden'alt="Desktop Destination Background"/>
                    <img src={destinationBgT.src} className='absolute inset-0 w-full h-full lg:hidden md:block hidden' alt="Tablet Destination Background"/>
                    <img src={destinationBgM.src} className='absolute inset-0 w-full h-full block md:hidden' alt="Mobile Destination Background"/>
                </>
            )
        case '/crew' : 
            return( 
                <>
                    <img src={crewBgD.src} className='absolute inset-0 w-full h-full lg:block hidden'alt="Desktop Crew Background"/>
                    <img src={crewBgT.src} className='absolute inset-0 w-full h-full lg:hidden md:block hidden' alt="Tablet Crew Background"/>
                    <img src={crewBgM.src} className='absolute inset-0 w-full h-full block md:hidden' alt="Mobile Crew Background"/>
                </>
            )
        case '/technology':
            return( 
                <>
                    <img src={technologyBgD.src} className='absolute inset-0 w-full h-full lg:block hidden'alt="Desktop technology Background"/>
                    <img src={technologyBgT.src} className='absolute inset-0 w-full h-full lg:hidden md:block hidden' alt="Tablet technology Background"/>
                    <img src={technologyBgM.src} className='absolute inset-0 w-full h-full block md:hidden' alt="Mobile technology Background"/>
                </>
            )
    }

}
