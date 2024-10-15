import React from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

const portfolioImgs = [
  {
    id: 'portfolioImg_1',
    srcStr: '/portfolio1.svg',
    altTxt: 'portfolioImg_1_image',
    titleCaption: 'Comfy Library',
    caption:
      'We create a cozy and inviting space designed for reading studying and relaxation',
  },
  {
    id: 'portfolioImg_2',
    srcStr: '/portfolio2.svg',
    altTxt: 'portfolioImg_2_image',
    titleCaption: 'Workspace',
    caption:
      'A Productive environment by choosing furnitureand lightining that enhance positivity',
  },
  {
    id: 'portfolioImg_3',
    srcStr: '/portfolio3.svg',
    altTxt: 'portfolioImg_3_image',
    titleCaption: 'Space Cafe',
    caption:
      'A Comfortable seating and soft lightining that create a cozy a cozy nd inviting atmosphere',
  },
  {
    id: 'portfolioImg_4',
    srcStr: '/portfolio4.svg',
    altTxt: 'portfolioImg_4_image',
    titleCaption: 'Cozy Living Room',
    caption:
      'A cozy living room s a warm nd inivting space hat makes ou feel relaxed and comfortable',
  },
  {
    id: 'portfolioImg_5',
    srcStr: '/portfolio5.svg',
    altTxt: 'portfolioImg_5_image',
    titleCaption: 'Portfolio Caption Title 5',
    caption: 'Portfolio Caption 5',
  },
  {
    id: 'portfolioImg_6',
    srcStr: '/portfolio6.svg',
    altTxt: 'portfolioImg_6_image',
    titleCaption: 'Portfolio Caption Title 6',
    caption: 'Portfolio Caption 6',
  },
]

const Portfolio = () => {
  return (
    <section className='about flexCenter textColorDark sectionMargin'>
      <div className='sectionContainer'>
        <div className='flexCenter gap-20'>
          <span>
            <SectionHeader title='Portfolio' subTitle='View our projects' />
          </span>
          <p className='text-3xl textColorSecondary md:w-[50%] mt-10 md:mt-0'>
            Explore our unique and customised interior design solution tailored
            to fit individual style
          </p>
        </div>
        <div className='mt-16 responsiveGrid'>
          {portfolioImgs.map((item, idx) => {
            return (
              <div
                key={item.id}
                className='border-2 p-5 hover:shadow-2xl hover:border-none'>
                <Image
                  src={item.srcStr}
                  alt={item.altTxt}
                  width={400}
                  height={600}
                />
                <div className='mt-5'>
                  <p className='text-2xl font-bold'>{item.titleCaption}</p>
                  <p className='textColorSecondary text-lg'>{item.caption}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
