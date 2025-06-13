// 'use client'
import React from 'react'

const services = [
  {
    id: '01',
    title: 'Designing residential & commercial spaces',
    description: '',
  },
  {
    id: '02',
    title: 'Turnkey interior solutions',
    description: '',
  },
  {
    id: '03',
    title: 'Design consultancy',
    description: '',
  },
  {
    id: '04',
    title: '3D Visualisation & concept design',
    description: '',
  },
  {
    id: '05',
    title: 'Reovation & remodeling',
    description: '',
  },
  {
    id: '06',
    title: 'Styling & decore services',
    description: '',
  },
]

const ServicesSection = () => {
  return (
    <section>
      <div className='my-10'>
        <p className='text-cormorant_unicase text-4xl'>services offered</p>
        <p className='mt-1'>
          At Cubism, we offer end-to-end interior design solutions. Whether it’s
          styling a cozy home, designing a functional office, or managing your
          project from start to finish, we ensure every detail aligns with your
          vision—beautifully and effortlessly.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-2'>
        {services.map(({ id, title }) => {
          return (
            <div key={id} className='border-2 p-5 rounded-2xl md:mt-0'>
              <p className='text-cormorant_unicase text-4xl text-[#808080] leading-none'>
                {id}
              </p>
              <p className='font-bold'>{title}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
