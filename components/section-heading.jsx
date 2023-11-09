import React from 'react'

export default function SectionHeading({children}) {
  return (
    <h2 className='absolute top-[10rem] sm:top-[5rem] my-2 uppercase tracking-[20px] text-emerald-700 text-2xl text-center'>
        {children}
    </h2>
  )
}
