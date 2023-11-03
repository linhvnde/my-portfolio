"use client";


import React from 'react'

import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'


import { links } from '../lib/data';

import Link from 'next/link';

export default function Header() {
  return (
    <header className='z-[999] relative top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center'
    // sticky 
    >
      <motion.div className='flex flex-row mt-1.5 items-center header-1'
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
        className='flex flex-row mt-1.5 items-center cursor-pointer header-1'
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5
        }}        
        >
        <SocialIcon className='cursor-pointer' network='email' fgColor='darkGreen' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-green-800'>DROP AN EMAIL</p>
      </motion.div>
      <motion.div
        className="nav-bg fixed top-0 left-1/2  h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{duration: 1.5}}
      ></motion.div>
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-green-900 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {
            links.map(link => {
              
              return (
                <li key={link.hash} className='h-3/4 flex items-center justify-center'>
                  <Link href={link.hash} className='flex w-full items-center justify-center px-2 py-1 hover:text-yellow-500 transition'>{link.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
      
    </header>
  )
}
