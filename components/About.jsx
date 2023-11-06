"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className='snap-start h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-[10rem] md:top-[5rem] my-2 uppercase tracking-[20px] text-emerald-700 text-2xl text-center'>
        About
      </h3>

      <motion.div
        initial={{
        x:-200,
        }}
        transition={{
          duration:1
        }}
        whileInView={{
          x:0
        }}
        viewport={{ once: true }}
        className='flex justify-center items-center '
      >        
        <div className='about-image relative mt-[12rem] md:mt-[3rem]  h-[70vh] w-[60vw]'>          
          <Image
            src="https://res.cloudinary.com/dkuwzoiqf/image/upload/v1699304237/my-portfolio/z4295401506805_9198ca46dcee5224ffc35eafe5eaca58_w9ww9a.jpg"
            alt="Picture about Linh" layout='fill' objectFit='cover' quality="100" priority={true} 
          />
        </div>
      </motion.div> 
    </section>
  )
}
