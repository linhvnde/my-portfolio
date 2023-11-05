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
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        // borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 4.5,
      }}
      className='relative flex justify-center items-center'>
      <div className='absolute border border-emerald-700 border-opacity-[50%] rounded-full h-[20vmin] w-[20vmin] mt-[27vh] md:h-[23vmin] md:w-[23vmin]  md:mt-[15vh] animate-ping'/>
      <div className='absolute border border-emerald-700 border-opacity-[20%] rounded-full h-[30vmin] w-[30vmin] mt-[27vh] md:h-[35vmin] md:w-[35vmin] md:mt-[15vh]'/>
      <div className='absolute border border-emerald-700 border-opacity-[20%] rounded-full h-[47vmin] w-[47vmin] mt-[27vh] md:h-[55vmin] md:w-[55vmin] md:mt-[15vh]'/>
      <div className='absolute border border-orange-600 opacity-20 rounded-full h-[60vmin] w-[60vmin] mt-[27vh] md:h-[70vmin] md:w-[70vmin] md:mt-[15vh]  animate-pulse'/>
      <div className='absolute border border-emerald-700 border-opacity-[20%] rounded-full h-[70vmin] w-[70vmin] mt-[27vh] md:h-[80vmin] md:w-[80vmin] md:mt-[15vh]'/>
      <div />
    </motion.div>
  )
}
