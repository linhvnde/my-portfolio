import React from 'react'
import SectionHeading from './section-heading'
import ProjectCard from './ProjectCard'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
    <section id='projects' className=' h-screen snap-start flex flex-col relative text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden '>
      <SectionHeading>
        Projects
      </SectionHeading>
      <div className='mt-16 max-h-[65vh]'>
       {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
