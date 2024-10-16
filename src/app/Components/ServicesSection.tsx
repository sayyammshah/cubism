// 'use client'
import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import Divider from './Divider'
import Image from 'next/image'

const services = [
  {
    id: '01',
    title: 'Consultation',
    description:
      'A Consultation with an Interior Designer to discuss design ideas, budget & project scope',
  },
  {
    id: '02',
    title: 'Layout Design',
    description:
      'Layout Design: A Consultation with an Interior Designer to discuss design ideas, budget & project scope',
  },
  {
    id: '03',
    title: 'Concept Sketches',
    description:
      'Concept Sketches: A Consultation with an Interior Designer to discuss design ideas, budget & project scope',
  },
  {
    id: '04',
    title: '3D Rendering',
    description:
      '3D Rendering: A Consultation with an Interior Designer to discuss design ideas, budget & project scope',
  },
  {
    id: '05',
    title: 'Artwork Installation',
    description:
      'Artwork Installation: A Consultation with an Interior Designer to discuss design ideas, budget & project scope',
  },
]

const Services = () => {
  const [isClicked, setIsClicked] = useState<Record<string, string>>(
    services[0],
  )

  return (
    <section className='services flexCenter textColorDark sectionMargin'>
      <div className='sectionContainer'>
        <SectionHeader title='Services' subTitle='Featured Services' />
        <div className='md:flex justify-between items-start gap-10'>
          <div className='md:w-[50%]'>
            {services.map((service, idx) => {
              return (
                <>
                  <div
                    key={service.id}
                    className={`cursor-pointer smooth text-xl md:text-2xl ${
                      isClicked.id === service.id
                        ? 'textColorDark'
                        : 'textColorSecondary'
                    } flexBetwn`}
                    onClick={() => setIsClicked(service)}>
                    <p>{service.title} </p>
                    <Image
                      src={`${
                        isClicked.id === service.id
                          ? '/downRightArrow.svg'
                          : '/rightArrow.svg'
                      }`}
                      width={28}
                      height={28}
                      alt='arrow_ic'
                    />
                  </div>
                  <p className='block md:hidden'>
                    {isClicked.id === service.id && isClicked.description}
                  </p>
                  <Divider isSecondary />
                </>
              )
            })}
          </div>
          <div className='hidden md:block md:max-w-[50%] md:pl-12 relative'>
            <Image
              src={'/servicesSectionImg.svg'}
              alt='service_section_img'
              width={570}
              height={300}
            />
            <div className='shadow-2xl rounded-sm absolute left-3/4 transform -translate-x-1/2 -translate-y-1/2 bottom-[-40%] bg-white p-4 w-2/3'>
              <span className='text-lg font-black textColorSecondary'>
                {isClicked.title.toUpperCase()}
              </span>
              <br />
              {isClicked.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
