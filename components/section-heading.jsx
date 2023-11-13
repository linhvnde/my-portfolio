"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({children}) {
  return (
    <motion.h2
      className='absolute top-[5rem] md:top-[1rem] my-2 uppercase tracking-[20px] text-emerald-700 text-2xl text-center'
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
