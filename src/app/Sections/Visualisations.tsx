import Image from 'next/image'
import React from 'react'

const visualisationsImages = [
  {
    id: 1,
    src: '/v1_img1.svg',
    altTxt: 'altTxt_v1_img1.svg',
    width: 675,
    height: 353,
  },
  {
    id: 2,
    src: '/v1_img2.svg',
    altTxt: 'altTxt_v1_img2.svg',
    width: 445,
    height: 388,
  },
  {
    id: 3,
    src: '/v1_img3.svg',
    altTxt: 'altTxt_v1_img3.svg',
    width: 675,
    height: 353,
  },
  {
    id: 4,
    src: '/v1_img4.svg',
    altTxt: 'altTxt_v1_img4.svg',
    width: 445,
    height: 388,
  },
  {
    id: 5,
    src: '/v1_img5.svg',
    altTxt: 'altTxt_v1_img5.svg',
    width: 675,
    height: 353,
  },
  {
    id: 6,
    src: '/v1_img6.svg',
    altTxt: 'altTxt_v1_img6.svg',
    width: 445,
    height: 388,
  },
  {
    id: 7,
    src: '/v1_img7.svg',
    altTxt: 'altTxt_v1_img7.svg',
    width: 675,
    height: 353,
  },
  {
    id: 8,
    src: '/v1_img8.svg',
    altTxt: 'altTxt_v1_img8.svg',
    width: 445,
    height: 388,
  },
]

const VisualisationSection = () => {
  return (
    <section className='mt-20 min-h-screen'>
      <p className='text-cormorant_unicase md:text-4xl text-2xl'>
        3D Visualisations
      </p>

      <div className='columns-2 gap-2 mt-5'>
        {visualisationsImages.map(({ id, src, width, height, altTxt }) => (
          <div
            key={id}
            className='mb-4 rounded-lg overflow-hidden break-inside-avoid-column shadow-md bg-white'>
            <Image
              src={src}
              width={width}
              height={height}
              alt={altTxt}
              className='w-full h-auto rounded-t-lg' // Apply rounded corners to the top
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default VisualisationSection
