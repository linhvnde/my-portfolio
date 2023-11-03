"use client";


import React from 'react'
import { motion } from 'framer-motion'
import { links } from '../lib/data';

import Link from 'next/link';


export default function Navbar() {
  return (
    <div>
      <motion.div
        className="nav-bg fixed top-[5rem] left-1/2  h-[4.5rem] w-[85%] border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:top-6 md:h-[3.25rem] md:w-[34rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{duration: 1.5}}
      ></motion.div>
      <motion.nav className='nav-content flex fixed top-[5.15rem] left-1/2 h-12 -translate-x-1/2 py-2 md:top-[1.7rem] md:h-[initial] md:py-0'
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{duration: 1.5}}
      >
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
      </motion.nav>
    </div>
  )
}
