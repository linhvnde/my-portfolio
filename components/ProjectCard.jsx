import Image from 'next/image'
import React from 'react'

export default function ProjectCard(props) {
  return (
    <article className='relative overflow-hidden mb-3 px-0 md:px-10 w-[80vw] h-[50vh] border rounded-lg border-emerald-500/5 bg-emerald-50/80'>
      <div className='mt-6 pt-4 pb-10 px-1 sm:pl-2 sm:pr-1 max-w-[55%] flex flex-col h-full'>

      <h3 className='text-2xl font-semibold text-emerald-800'>{props.title}</h3>
      <p className='mt-2 leading-relaxed text-emerald-700/80'>{props.description}</p>
      <ul className='flex flex-wrap mb-8 mt-4 sm:mt-auto pb-2 gap-2'>{props.tags.map(tag => (
        <li className=' bg-emerald-700/[0.7] rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white'>{ tag }</li>
      ))}</ul>

      </div>

      <div className='absolute top-[2.8rem] -right-10 w-[25rem] h-[15rem] rounded-lg overflow-hidden shadow-2xl'>
        <Image
          src={props.imageUrl}
          alt="Snapshot of the application i worked on"
          layout='fill'
          style={{ objectFit: 'start' }}
          quality="100"
          priority={true}
        />
      </div>
    </article>
  )
}
