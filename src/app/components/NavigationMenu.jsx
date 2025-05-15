"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import BurgerButton from "@/public/icon-hamburger.svg";
import CloseButton from "@/public/icon-close.svg";
import Image from 'next/image';
import {motion, AnimatePresence } from "motion/react"
import { usePathname } from 'next/navigation';
export default function NavigationMenu() {
    const [isOpened,setIsOpened] = useState(false); 
    const path = usePathname();
    return (
        <>
            <button className='block md:hidden z-50' onClick={()=>setIsOpened(!isOpened)}>
                {
                    isOpened?<Image src={CloseButton} width="24" height="21" alt="close button" />:<Image src={BurgerButton} width="24" height="21" alt="burger-menu" />
                }
            </button>
            <nav className=' backdrop-blur-2xl px-10  bg-white/10 hidden md:block'>
                <motion.ol initial={{opacity:0}} animate={{opacity:1}} className='flex items-center gap-12 text-8 font-barlow text-white uppercase '>
                    <li className={`h-24 items-center flex menu-item ${path == '/' ? 'active':''}`}><Link href="/" ><span className='md:hidden lg:inline mr-3 font-bold'>00</span>Home</Link></li>
                    <li className={`h-24 items-center flex menu-item ${path == '/destination' ? 'active':''}`}><Link href="/destination"><span className='mr-3 font-bold'>01</span>Destination</Link></li>
                    <li className={`h-24 items-center flex menu-item ${path == '/crew' ? 'active':''} `}><Link href="/crew"><span className='mr-3 font-bold'>02</span>Crew</Link></li>
                    <li className={`h-24 items-center flex menu-item ${path == '/technology' ? 'active':'' }`}><Link href="/technology"><span className='mr-3 font-bold'>03</span>Technology</Link></li>
                </motion.ol>
            </nav>
            <AnimatePresence>
                {
                    isOpened &&
                    <motion.nav initial={{x:"100%"}} transition={{type:"tween"}} animate={{x:0}} exit={{x:"100%"}} className='backdrop-blur-2xl pl-8 pt-32 bg-white/10 block md:hidden absolute right-0 top-0 h-screen w-2/3'>
                        <ol className='flex flex-col items-start gap-8 text-8 font-barlow text-white uppercase '>
                            <li className={`items-center flex h-5 w-full mobile-menu-item ${path == '/' ? 'active' : ''}`}><Link  href="/" ><span className='mr-3 font-bold'>00</span>Home</Link></li>
                            <li className={`items-center flex h-5 w-full mobile-menu-item ${path == '/destination' ? 'active' : ''}`}><Link  href="/destination"><span className='mr-3 font-bold'>01</span>Destination</Link></li>
                            <li className={`items-center flex h-5 w-full mobile-menu-item ${path == '/crew' ? 'active' : ''}`}><Link  href="/crew"><span className='mr-3 font-bold'>02</span>Crew</Link></li>
                            <li className={`items-center flex h-5 w-full mobile-menu-item ${path == '/technology' ? 'active' : ''}`}><Link  href="/technology"><span className='mr-3 font-bold'>03</span>Technology</Link></li>
                        </ol>
                    </motion.nav>
                }
            </AnimatePresence>
        </>
  )
}
