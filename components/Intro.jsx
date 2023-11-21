"use client"
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.50,
  })
  const { setActiveSection } = useActiveSectionContext()
  
  useEffect(() => {    
    if (inView) {
      console.log("Home inView---",inView)
      setActiveSection("Home")
    }    
  }, [inView, setActiveSection])
  
  return (
    <section id='home' ref={ref} className='  scroll-pt-14 snap-start h-screen flex flex-col items-center justify-start text-center overflow-hidden pb-[5vh]'>
      <div className='relative'>        
        <BackgroundCircle />
        <motion.div
          initial={{
          opacity: 0,

        }}
        animate={{
          scale: [0.5,0.8,1,1.2,1],
          opacity: 1,
        }}
        transition={{
          duration: 4.5,
        }}
          className='flex justify-center items-center  '>        
          <div className='profile-image absolute mt-[90vh] sm:mt-[82vh] overflow-hidden rounded-full h-[20vmin] w-[20vmin]'>        
            <Image  src="https://res.cloudinary.com/dkuwzoiqf/image/upload/t_Square Profile Picture/v1699225827/my-portfolio/IMG_4909-EDIT_cla1wa.jpg" alt="Linh profile picture" layout='fill' objectFit='cover' quality="100" priority={true} />
          </div>
        </motion.div>
        <div>

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 5
            }}
            >
            <h1 className='text-sm sm:text-lg mt-[58vh] sm:mt-[60vh]  text-emerald-700 uppercase font-semibold tracking-[5px] sm:tracking-[15px]' >
            Full Stack Developer 
            </h1>         
         
            <p className="max-w-4xl mt-[1.5vh] sm:mt-[2vh] px-4 text-xs font-medium !leading-[2] sm:text-base text-emerald-700 text-justify">              
              <span className="font-bold">Linh is my name</span> - a <span className="italic">career changer</span> who pivoted to <span className="font-bold">Full Stack Development</span> from a decade as a <span className="italic">Business Strategist</span>. Specialize in the <span className="underline">MERN stack</span> and passionate about crafting <span className="font-bold">innovative software solutions</span> that are both user-intuitive and business-optimal.
            </p>
          
        </motion.div>
        </div>
      </div>
       
    </section>
  )
}
