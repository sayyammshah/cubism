import Image from 'next/image'
import React from 'react'

const ongoingProject1 = [
  {
    id: 1,
    src: '/op1_img1.svg',
    caption: 'Minimal TV unit',
    altTxt: 'altTxt_op1_img1',
  },
  {
    id: 2,
    src: '/op1_img2.svg',
    caption: 'Guest bedroom',
    altTxt: 'altTxt_op1_img2',
  },
  {
    id: 3,
    src: '/op1_img3.svg',
    caption: 'Passage way',
    altTxt: 'altTxt_op1_img3',
  },
  {
    id: 4,
    src: '/op1_img4.svg',
    caption: 'Wardrobe',
    altTxt: 'altTxt_op1_img4',
  },
]
const ongoingProject2 = [
  {
    id: 1,
    src: '/op2_img1.svg',
    caption: 'Designing as per vastu & client’s requirements',
    altTxt: 'altTxt_op1_img1',
  },
  {
    id: 2,
    src: '/op2_img2.svg',
    caption: 'Grand & classy lobby',
    altTxt: 'altTxt_op1_img2',
  },
  {
    id: 3,
    src: '/op2_img3.svg',
    caption: 'Master bedroom',
    altTxt: 'altTxt_op1_img3',
  },
  {
    id: 4,
    src: '/op2_img4.svg',
    caption: 'Wardrobe',
    altTxt: 'altTxt_op1_img4',
  },
]

const OngoingSitesSection = () => {
  return (
    <section className='mt-20'>
      <p className='text-cormorant_unicase md:text-4xl text-2xl'>
        Ongoing sites
      </p>

      <div className='flex gap-2 items-end my-3'>
        <p className='text-5xl'>›</p>
        <p className='leading-none'>
          <span className='block mb-1'>3bhk Apartment 1700 sq.ft.</span>
          <span className='text-[#808080] block'>@nashik</span>
        </p>
      </div>

      <div className='grid md:grid-cols-4 grid-cols-2 gap-1'>
        {ongoingProject1.map(({ id, src, caption, altTxt }) => {
          return (
            <div className='' key={id}>
              {' '}
              <Image src={src} width={300} height={490} alt={altTxt} />
              <p className='mt-2'>{caption}</p>{' '}
            </div>
          )
        })}
      </div>

      <div className='flex gap-2 items-end my-4'>
        <p className='text-5xl'>›</p>
        <p className='leading-none'>
          <span className='block mb-1'>3bhk Apartment 2300 sq.ft.</span>
          <span className='text-[#808080] block'>@nashik</span>
        </p>
      </div>

      <div className='grid md:grid-cols-4 grid-cols-2 gap-1'>
        {ongoingProject2.map(({ id, src, caption, altTxt }) => {
          return (
            <div className='' key={id}>
              {' '}
              <Image src={src} width={300} height={490} alt={altTxt} />
              <p className='mt-2'>{caption}</p>{' '}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default OngoingSitesSection
