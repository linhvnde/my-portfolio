"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundCircle() {
  return (
    <motion.div
      initial={{
        opacity: 0,

      }}
      animate={{
        scale: [0.5,0.8,1,1.2,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 4.5,
      }}
      className='relative flex justify-center items-center '>
      <div className='absolute mt-[90vh] sm:mt-[82vh] border border-emerald-700 border-opacity-[20%] rounded-full h-[20vmin] w-[20vmin] md:h-[23vmin] md:w-[23vmin]   animate-ping'/>
      <div className='absolute mt-[90vh] sm:mt-[82vh] border border-emerald-700 border-opacity-[20%] rounded-full h-[30vmin] w-[30vmin] md:h-[35vmin] md:w-[35vmin] '/>
      <div className='absolute mt-[90vh] sm:mt-[82vh] border border-emerald-700 border-opacity-[20%] rounded-full h-[47vmin] w-[47vmin] md:h-[55vmin] md:w-[55vmin] '/>
      <div className='absolute mt-[90vh] sm:mt-[82vh] border border-orange-600 opacity-20 rounded-full h-[60vmin] w-[60vmin] md:h-[70vmin] md:w-[70vmin]   animate-pulse'/>
      <div className='absolute mt-[90vh] sm:mt-[82vh] border border-emerald-700 border-opacity-[20%] rounded-full h-[70vmin] w-[70vmin] md:h-[80vmin] md:w-[80vmin] '/>
    </motion.div>
  )
}
