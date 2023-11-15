"use client"

import { motion } from 'framer-motion'

import Image from 'next/image'
import React from 'react'

export default function ProjectCard(props) {
  return (
    <article className='project-card snap-center overflow-hidden relative top-[10vh] p-2  border border-red-500 flex-shrink-0 w-[90vw] pt-1 flex flex-col justify-evenly items-center  sm:w-[80vw] sm:h-[65vh] rounded-lg sm:border-emerald-500/5 sm:bg-emerald-50/80 shadow-2xl'>      
    <motion.h3
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
        className='self-start sm:absolute  sm:top-4  sm:left-2 text-base uppercase text-emerald-500'
      > <a href={`${props.appUrl}`} title='Go to application site' target='blank'>
          
        {props.title}
      </a>
      </motion.h3>
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
          opacity: 1,
          
        }}
        viewport={{ once: true }}
        className='sm:absolute sm:top-[2.8rem] sm:-right-[11rem] md:-right-[14rem] sm:mb-3 sm:px-0 md:px-10 border border-purple-500 project-image relative w-[90vw] h-[30.3vh] sm:h-[34vh] sm:w-[80vw] md:h-[40vh] rounded-lg overflow-hidden sm:shadow-2xl'
      >
        <Image
            src={props.imageUrl}
            alt="Snapshot of the application i worked on" layout='fill' objectFit='contain' quality="100" priority={true} 
          />
      </motion.div>
        {/* <div >          
         
        </div> */}
      <motion.div
        className='project-text sm:absolute sm:top-7 md:top-9 sm:self-start sm:pl-3 sm:pr-10 sm:max-w-[55%] lg:max-w-[50%] sm:h-[50vh] relative mt-[2vh] sm:mt-[3vh] md:mt-[1.8vh] text-xs sm:text-sm md:text-base space-y-3 sm:space-y-3 md:space-y-7 px-0 md:pl-5 text-justify text-emerald-700  flex flex-col sm:justify-evenly items-center'
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
        <p className='leading-relaxed text-emerald-700/80'>{props.description}</p>
        <ul className='flex flex-wrap self-end mb-1 mt-1 sm:mt-auto pb-1 gap-1 pr-2'>
          {props.tags.map(tag => (
            <li className=' bg-emerald-700/[0.7] rounded-full px-1 py-1 text-[0.6rem] uppercase tracking-wide text-white'>
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </article>
  )
}
