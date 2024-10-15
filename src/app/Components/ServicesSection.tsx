import React from 'react'
import SectionHeader from './SectionHeader'
import Divider from './Divider'
import Image from 'next/image'

const services = [
  {
    id: '01',
    title: 'Consultation',
    description:
      ' A Consultation with an Interior Designer to discuss design ideas, budget & project scope',
  },
  {
    id: '02',
    title: 'Layout Design',
    description:
      ' A Consultation with an Interior Designer to discuss design ideas, budget & project scope',
  },
  {
    id: '03',
    title: 'Concept Sketches',
    description:
      ' A Consultation with an Interior Designer to discuss design ideas, budget & project scope',
  },
  {
    id: '04',
    title: '3D Rendering',
    description:
      ' A Consultation with an Interior Designer to discuss design ideas, budget & project scope',
  },
  {
    id: '05',
    title: 'Artwork Installation',
    description:
      ' A Consultation with an Interior Designer to discuss design ideas, budget & project scope',
  },
]

const Services = () => {
  return (
    <section className='services flexCenter textColorDark sectionMargin'>
      <div className='sectionContainer'>
        <SectionHeader title='Services' subTitle='What we provide for you' />
        <div className='bg-servicesSectionBanner bg-cover bg- bg-no-repeat h-[10rem] mt-10'></div>
        <div className='responsiveGrid mt-10'>
          {services.map((item, idx) => {
            return (
              <div className='p-4' key={item.id}>
                <p className='textColorDark text-3xl'>
                  <span className='textColorSecondary'>{item.id}. </span>{' '}
                  {item.title}{' '}
                </p>
                <p className='textColorSecondary my-3'>{item.description}</p>
                <Divider isSecondary />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
