"use client"

import { motion } from 'framer-motion'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import ProjectCard from './ProjectCard'
import { projectsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'


export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.50,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
  
  useEffect(() => {    
    if (inView && Date.now() - timeOfLastClick > 1000) {
      console.log("Projects inView---",inView)
      setActiveSection("Projects")
    }    
  },[inView, setActiveSection, timeOfLastClick])
  
  return (
    <section id='projects' ref={ref} className='snap-start h-screen relative flex flex-col justify-evenly items-center  scroll-mt-16  mx-0 sm:mx-auto w-full sm:max-w-full px-0 sm:px-10'>
      <SectionHeading>
        Projects
      </SectionHeading>
      <div className='w-full flex space-x-[5vw] px-[2.5vw] sm:space-x-[15vw] overflow-x-scroll p-0 sm:p-10 snap-x snap-mandatory'>
       {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
