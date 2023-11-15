"use client"

import { motion } from 'framer-motion'

import React from 'react'
import SectionHeading from './section-heading'
import ProjectCard from './ProjectCard'
import { projectsData } from '@/lib/data'


export default function Projects() {
  return (
    <section id='projects' className='border border-blue-600 snap-start h-screen relative flex flex-col justify-evenly items-center  scroll-mt-16  mx-0 sm:mx-auto w-full sm:max-w-full px-0 sm:px-10'>
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
