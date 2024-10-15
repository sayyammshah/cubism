import Image from 'next/image'
import React from 'react'
import SectionHeader from './SectionHeader'
import Divider from './Divider'

const profileSpecs = [
  {
    ic: '/client_satisfaction.svg',
    heading: 'Client Satisfaction',
    description: 'Over 100% of my clients have rated my services with 5.',
  },
  {
    ic: '/areas.svg',
    heading: 'Specialized areas:',
    description:
      'I specialize in modern design, minimalist aesthetics, or sustainable living.',
  },
  {
    ic: '/awards.svg',
    heading: 'Awards or certifications:',
    description:
      'I am a certified [certification name] and have been recognized with [award name] for my contributions to the field of interior design.',
  },
]
const acehivements = [
  {
    id: 'acehivement_1',
    title: '3+',
    description: 'Years of experience',
  },
  {
    id: 'acehivement_2',
    title: '10+',
    description: 'Happy Clients',
  },
  {
    id: 'acehivement_3',
    title: '5+',
    description: 'Ongoing Sites',
  },
]

const OwnedBy = () => {
  return (
    <section className='about flexCenter textColorDark sectionMargin'>
      <div className='sectionContainer'>
        <SectionHeader title='Who am I?' subTitle='Expertise You Can Trust' />
        <div className='mt-10 md:flex gap-10'>
          <Image
            src={'/Profile_Rounded.svg'}
            alt='profile_img'
            width={300}
            height={1023.5}
          />
          <div>
            <div className='mt-5'>
              <p className='text-2xl font-bold'>Sayyami Shah</p>
              <p> Interior Designer</p>
            </div>
            <span className='textColorSecondary'>
              <p>
                a passionate interior designer, we specialize in creating
                beautiful, functional spaces that reflect your unique style.
                With an eye for detail and a commitment to quality, transforms
                homes and commercial spaces into inspiring environments. Let us
                bring your vision to life with personalized designs that enhance
                your lifestyle and elevate your surroundings.
              </p>
            </span>
            <Divider isSecondary />
            <div className='mt-5 responsiveGrid'>
              {acehivements.map((item, idx) => {
                return (
                  <div key={item.id}>
                    <p className='text-3xl'>{item.title}</p>
                    <p className='textColorSecondary'>{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OwnedBy
