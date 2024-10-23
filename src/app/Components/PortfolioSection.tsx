import React from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

const portfolioImgs = [
  {
    id: 'portfolioImg_1',
    srcStr: '/portfolio1.svg',
    altTxt: 'portfolioImg_1_image',
    titleCaption: 'Reception Area',
    caption:
      'We create a welcoming and stylish reception area designed for seamless connections and memorable first impressions.',
  },
  {
    id: 'portfolioImg_2',
    srcStr: '/portfolio2.svg',
    altTxt: 'portfolioImg_2_image',
    titleCaption: 'Comfort Dining',
    caption:
      'We create a warm and inviting dining area designed for shared meals, laughter, and cherished moments.',
  },
  {
    id: 'portfolioImg_3',
    srcStr: '/portfolio3.svg',
    altTxt: 'portfolioImg_3_image',
    titleCaption: 'Cozy Bedroom',
    caption:
      'We create a serene and cozy bedroom designed for restful nights, peaceful moments, and personal retreats.',
  },
  {
    id: 'portfolioImg_4',
    srcStr: '/portfolio4.svg',
    altTxt: 'portfolioImg_4_image',
    titleCaption: 'Living Room',
    caption:
      'A cozy living room s a warm nd inivting space hat makes ou feel relaxed and comfortable',
  },
  {
    id: 'portfolioImg_5',
    srcStr: '/portfolio5.svg',
    altTxt: 'portfolioImg_5_image',
    titleCaption: 'A Functional Kitchen Oasis',
    caption:
      'This kitchen combines modern elegance with practicality, featuring custom cabinetry',
  },
  {
    id: 'portfolioImg_6',
    srcStr: '/portfolio6.svg',
    altTxt: 'portfolioImg_6_image',
    titleCaption: 'The Perfect Kids Room',
    caption:
      'This kids room features vibrant colors and playful decor, offering a fun space for both play and relaxation.',
  },
]

const Portfolio = () => {
  return (
    <section className='about flexCenter textColorDark sectionMargin'>
      <div className='sectionContainer'>
        <SectionHeader title='Portfolio' subTitle='View our projects' />
        {/* <div className='md:flexBetwn gap-20'>
          <p className='text-3xl textColorSecondary md:w-[50%] mt-10 md:mt-0'>
            Explore our unique and customised interior design solution tailored
            to fit individual style
          </p>
        </div> */}
        <div className='responsiveGrid'>
          {portfolioImgs.map((item, idx) => {
            return (
              <div
                key={item.id}
                className='border-2 md:border-none p-5 hover:shadow-2xl hover:bg-white hover:border-none smooth'>
                <Image
                  src={item.srcStr}
                  alt={item.altTxt}
                  width={400}
                  height={600}
                />
                <div className='mt-5'>
                  <p className='text-lg md:text-2xl font-bold'>
                    {item.titleCaption}
                  </p>
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
