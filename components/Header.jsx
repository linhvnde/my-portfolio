"use client";


import React from 'react'

import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'



export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-center md:justify-between max-w-7xl mx-auto xl:items-center'
    >
      <motion.div className='flex w-[10rem] flex-row mt-1.5 justify-evenly items-center header-1'
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5
        }}
      >
        {/* social icons */}
        <SocialIcon url="https://github.com/linhvnde" fgColor='darkGreen' bgColor='transparent'/>
        <SocialIcon url="https://www.linkedin.com/in/linhnhvn-fullstackdev/" fgColor='darkGreen' bgColor='transparent'/>
      </motion.div>
      <motion.div
        className='flex w-[10rem] flex-row mt-1.5 justify-evenly items-center cursor-pointer header-1'
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5
        }}        
        >
        <SocialIcon className='cursor-pointer' network='email' fgColor='darkGreen' bgColor='transparent'/>
        <p className='uppercase md:inline-flex text-sm text-green-800'>DROP AN EMAIL</p>
      </motion.div>
    
      
    </header>
  )
}
