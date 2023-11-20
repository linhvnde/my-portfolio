"use client";


import React, { useState } from 'react'
import Link from 'next/link';

import { motion } from 'framer-motion'
import clsx from 'clsx';

import { links } from '../lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';



export default function Navbar() {
  const {activeSection, setActiveSection} = useActiveSectionContext()

  return (
    <nav>
      <div className='bg-white bg-opacity-70  h-[3.5rem] md:h-0 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-65'>

      <motion.div
        className="z-[999] nav-bg fixed top-[3.75rem] left-1/2  h-[4rem] w-full border border-green  border-opacity-5 bg-white bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:top-[0.75rem] sm:h-[3.25rem] md:w-[34rem] sm:w-[85%] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-65
        "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{duration: 1.5}}
      ></motion.div>
      <motion.nav className='z-[999] nav-content flex fixed top-[3.85rem] left-1/2 h-12 -translate-x-1/2 py-2 md:top-[0.95rem] md:h-[initial] md:py-2'
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{duration: 1.5}}
      >
        <ul className='flex w-[90vw] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-green-900 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {
            links.map(link => {
              
              return (
                <li key={link.hash} className='h-3/4 flex items-center justify-center'>
                  <Link
                    href={link.hash}
                    className={clsx('focus:scale-110 hover:scale-110 flex w-full items-center justify-center px-2 py-1 hover:text-yellow-400 transition', { "text-yellow-400": activeSection === link.name })}
                    onClick={() => { setActiveSection(link.name); console.log(link.name)}}
                  >
                    {link.name}
                    {activeSection === link.name && activeSection !== "" && (
                      <motion.span
                        className="bg-yellow-50 rounded-full absolute inset-0 -z-10"
                        layoutId='activeSection'
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </motion.nav>
      </div>
    </nav>
  )
}
