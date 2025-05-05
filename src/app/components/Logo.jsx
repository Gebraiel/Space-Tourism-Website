import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.svg";
import Link from 'next/link';
export default function Logo() {
  return (
    <div className='relative grow after:content-[""] after:w-[calc(100%-50px)] after:h-[1px] after:absolute after:left-28 after:top-1/2 after:z-10 after:bg-[#979797] lg:after:block after:hidden '>
        <Link href="/" className='w-fit block'><Image src={logo} width="50" height="50" alt="Logo"/></Link>
    </div>
  )
}
