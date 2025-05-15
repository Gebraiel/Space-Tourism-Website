import React from 'react'
import Logo from './Logo'
import NavigationMenu from './NavigationMenu'

export default function Header() {
  return (
    <header className='z-10 lg:pl-14 pl-10 pr-10 md:pr-0 py-10 lg:pt-10 md:pt-0 flex justify-between gap-10 items-center'>
        <Logo/>
        <NavigationMenu/>
    </header>
  )
}
