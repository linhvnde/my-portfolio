import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center'>
      <div className='flex flex-row items-center'>
        {/* social icons */}
        <SocialIcon url="https://github.com/linhvnde" fgColor='darkGreen' bgColor='transparent'/>
        <SocialIcon url="https://www.linkedin.com/in/linhnhvn-fullstackdev/" fgColor='darkGreen' bgColor='transparent'/>
      </div>
      <div >
        {/* className='flex flex-row items-center cursor-pointer' */}
        <SocialIcon className='cursor-pointer' network='email' fgColor='darkGreen' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-green-800'>DROP AN EMAIL</p>
      </div>
    </header>
  )
}
