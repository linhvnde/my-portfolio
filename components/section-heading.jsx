"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({children}) {
  return (
    <motion.h2
      className='absolute text-xl top-[4rem] sm:top-[2rem] md:top-[1rem] my-2 sm:mt-5 sm:mb-2 md:my-2 uppercase tracking-[20px] text-emerald-700 md:text-2xl text-center'
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        duration:1.5
      }}
    >
        {children}
    </motion.h2>
  )
}
