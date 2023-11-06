"use client"
import React from 'react'
import { motion } from 'framer-motion'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'

export default function Intro() {
  return (
    <section id='intro' className=' snap-start h-screen flex flex-col items-center justify-start text-center overflow-hidden'>
      <BackgroundCircle />
      <motion.div
        initial={{
        opacity: 0,

      }}
      animate={{
        scale: [0.5,0.8,1,1.2,1],
        opacity: 1,
        // borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 4.5,
      }}
        className='relative flex justify-center items-center '>        
        <div className='profile-image absolute mt-[82vh] overflow-hidden rounded-full border border-emerald-700 h-[20vmin] w-[20vmin]'>        
          <Image  src="https://res.cloudinary.com/dkuwzoiqf/image/upload/t_Square Profile Picture/v1699225827/my-portfolio/IMG_4909-EDIT_cla1wa.jpg" alt="Linh profile picture" layout='fill' objectFit='cover' quality="100" priority={true} />
        </div>
      </motion.div>
    </section>
  )
}
