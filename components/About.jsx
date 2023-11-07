"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className='snap-start sm:h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-[10rem] md:top-[5rem] my-2 uppercase tracking-[20px] text-emerald-700 text-2xl text-center'>
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration:1
        }}
        whileInView={{
          x: 0,
          opacity:1,
        }}
        viewport={{ once: true }}
        className='flex justify-center -mt-56'
      >        
        <div className='about-image relative sm:mt-[27rem] mt-[28rem] md:mt-[12rem] h-56 w-56 sm:h-[30vh] sm:w-[40vw] md:h-[30vh] md:w-[30vw] rounded-lg overflow-hidden'>          
          <Image
            src="https://res.cloudinary.com/dkuwzoiqf/image/upload/v1699304237/my-portfolio/z4295401506805_9198ca46dcee5224ffc35eafe5eaca58_w9ww9a.jpg"
            alt="Picture about Linh" layout='fill' objectFit='cover' quality="100" priority={true} 
          />
        </div>
      </motion.div>
      <motion.div
        className='about-text relative mt-[2vh] sm:mt-[3vh] md:mt-[40vh] text-sm sm:text-base sm:space-y-3 md:space-y-10 px-0 md:px-10 text-justify text-emerald-700  flex flex-col justify-center items-center'
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration:1
        }}
        whileInView={{
          x: 0,
          opacity:1,
        }}
        viewport={{ once: true }}      
      >
        <p>
          <span className="font-bold">Hi, I'm Linh</span>, transitioning from <span className="font-medium">business strategy</span> to <span className="font-medium">Full Stack Development</span> with a focus on the <span className="font-medium">MERN stack</span>. My journey includes significant achievements in e-commerce in Southeast Asia and fintech innovation in Germany. I thrive on <span className="italic">problem-solving</span> and am passionate about creating <span className="underline">intuitive, impactful software solutions</span>. Currently seeking a role where I can continue to grow and innovate in tech.
        </p>

        <p>
          <span className="italic">Outside of coding</span>, I engage in crochet, a hobby that enhances my <span className="font-medium">attention to detail and creativity</span>. Always eager to learn and adapt, I'm excited to apply my diverse experience to new challenges in the dynamic world of web development.
        </p>
      </motion.div>
    </section>
  )
}
