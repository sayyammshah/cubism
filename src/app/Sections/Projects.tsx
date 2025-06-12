import React from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

const minimalThemeBased = [
  {
    id: 1,
    src: '/p1_img1.svg',
    caption: 'Minimal TV unit',
    altTxt: 'altTxt_p1_img1',
  },
  {
    id: 2,
    src: '/p1_img2.svg',
    caption: 'Utilising every space',
    altTxt: 'altTxt_p1_img2',
  },
  {
    id: 3,
    src: '/p1_img3.svg',
    caption: 'Keeping vastu & requirements in consideration',
    altTxt: 'altTxt_p1_img3',
  },
  {
    id: 4,
    src: '/p1_img4.svg',
    caption: 'Making outmost use of space',
    altTxt: 'altTxt_p1_img4',
  },
]

const minimalThemeBasedHandedOver = [
  {
    id: 1,
    src: '/p1_ready_img2.svg',
    altTxt: 'altTxt_p1_ready_img2.svg',
  },
  {
    id: 2,
    src: '/p1_ready_img3.svg',
    altTxt: 'altTxt_p1_ready_img3.svg',
  },
  {
    id: 3,
    src: '/p1_ready_img4.svg',
    altTxt: 'altTxt_p1_ready_img4.svg',
  },
  {
    id: 4,
    src: '/p1_ready_img5.svg',
    altTxt: 'altTxt_p1_ready_img5.svg',
  },
]

const mordenClassicalThemeBased = [
  {
    id: 1,
    src: '/p2_img1.svg',
    caption: 'Cozy nook',
    altTxt: 'altTxt_p2_img1',
  },
  {
    id: 2,
    src: '/p2_img2.svg',
    caption: 'Living room',
    altTxt: 'altTxt_p2_img2',
  },
  {
    id: 3,
    src: '/p2_img3.svg',
    caption: 'Kitchen & dining area',
    altTxt: 'altTxt_p2_img3',
  },
  {
    id: 4,
    src: '/p2_img4.svg',
    caption: 'Living room',
    altTxt: 'altTxt_p2_img3',
  },
]

const ProjectsSection = () => {
  return (
    <section className='mt-20 min-h-screen'>
      {/* Heading */}
      <div className='md:flex items-stretch gap-4 mb-7'>
        <p className='text-cormorant_unicase md:text-4xl text-2xl leading-none'>
          <span className='block'>Minimal</span>
          <span className='block'>theme based interiors</span>
        </p>
        <Separator
          orientation='vertical'
          className=' hidden md:block h-[6rem] bg-[#E1E1E1]'
        />
        <p className='md:text-2xl text-lg text-[#808080]'>
          <span className='md:block'>2bhk Apartment </span>
          <span className='md:block'>700 sq. ft. </span>
          <span className='md:block'>@nashik</span>
        </p>
      </div>

      <div className='grid md:grid-cols-4 grid-cols-2 gap-1'>
        {minimalThemeBased.map(({ id, src, caption, altTxt }) => {
          return (
            <div className='' key={id}>
              {' '}
              <Image src={src} width={300} height={490} alt={altTxt} />
              <p className='mt-2'>{caption}</p>{' '}
            </div>
          )
        })}
      </div>

      <div className='md:flex items-stretch mt-10 gap-2'>
        <div>
          <p className='md:text-4xl text-2xl p-5 border-2 rounded-xl mb-3'>
            Handed over on November 2024
          </p>
          <Image
            src='/p1_ready_img1.svg'
            width={510}
            height={680}
            alt='altTxt_p1_ready_img1'
          />
        </div>
        <div className='grid grid-cols-2 gap-2 mt-2 md:mt-0'>
          {minimalThemeBasedHandedOver.map(({ id, src, altTxt }) => {
            return (
              <Image key={id} src={src} width={303} height={380} alt={altTxt} />
            )
          })}
        </div>
      </div>

      <div className='md:flex items-stretch gap-4 my-12'>
        <p className='text-cormorant_unicase md:text-4xl text-2xl leading-none'>
          <span className='block'>Morden calssical</span>
          <span className='block'>theme based interiors</span>
        </p>
        <Separator
          orientation='vertical'
          className=' hidden md:block h-[6rem] bg-[#E1E1E1]'
        />
        <p className='md:text-2xl text-lg text-[#808080]'>
          <span className='md:block'>Row House </span>
          <span className='md:block'>2000 sq. ft. </span>
          <span className='md:block'>@nashik</span>
        </p>
      </div>

      <div className='grid md:grid-cols-4 grid-cols-2 gap-1'>
        {mordenClassicalThemeBased.map(({ id, src, caption, altTxt }) => {
          return (
            <div key={id}>
              {' '}
              <Image src={src} width={370} height={660} alt={altTxt} />
              <p className='mt-2'>{caption}</p>{' '}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
