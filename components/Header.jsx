"use client";


import React, { useContext } from 'react'

import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import {HiDownload} from "react-icons/hi"



export default function Header() {
  return (
    <header className=' bg-white bg-opacity-70 backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-65 sticky top-0 p-3 flex items-start justify-center md:justify-between max-w-7xl mx-auto xl:items-center
    z-[999]'>
      <motion.div className='flex w-[10rem] flex-row justify-evenly items-center header-1'
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5
        }}
      >
        {/* social icons */}
        <SocialIcon className=' focus:scale-110 hover:scale-110' url="https://github.com/linhvnde" fgColor='darkGreen' bgColor='transparent'/>
        <SocialIcon className=' focus:scale-110 hover:scale-110' url="https://www.linkedin.com/in/linhnhvn-fullstackdev/" fgColor='darkGreen' bgColor='transparent'/>
      </motion.div>
      <motion.div
        className='flex w-[10rem] flex-row justify-evenly items-center cursor-pointer header-1'
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5
        }}        
      >
        <a href='/CV - Linh Nguyen Hoang l Full Stack Developer.pdf' download title='Download My CV' className='h-[50px] w-[50px] flex justify-center items-center focus:scale-110 hover:scale-110 text-green-800'><HiDownload/> </a>
        <SocialIcon className='focus:scale-110 hover:scale-110 cursor-pointer' network='email' url="mailto:linh.nh.tyty@gmail.com" fgColor='darkGreen' bgColor='transparent'/>
        {/* <p className='uppercase md:inline-flex text-sm text-green-800'><a href="mailto:linh.nh.tyty@gmail.com"> EMAIL ME</a></p> */}
      </motion.div>
    
      
    </header>
  )
}
