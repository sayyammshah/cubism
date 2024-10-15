import React from 'react'
import { CONTENT } from '../Content'
import Image from 'next/image'
import Divider from './Divider'
import SectionHeader from './SectionHeader'

const About = () => {
  const { AboutUs, AboutUsImages } = CONTENT
  return (
    <>
      <section className='about flexCenter sectionMargin textColorDark'>
        <div className='sectionContainer'>
          <div className='md:flex gap-5'>
            <div className='md:max-w-[50%]'>
              <SectionHeader
                title='About Us'
                subTitle='Discover the power of design'
              />
              <ul className='mt-3'>
                {AboutUs.map((item, idx) => {
                  return (
                    <li className='textColorSecondary' key={idx + 1}>
                      {item}
                    </li>
                  )
                })}
              </ul>
              <Divider isSecondary />
              <p>
                Our mission is to transform your interior spaces into a
                reflection of you and your lifestyle. We prioritize your budget
                and tailor our solutions accordingly, ensuring a seamless and
                enjoyable experience. Our personal involvement and meticulous
                attention to detail guarantee your satisfaction throughout the
                entire design process.
              </p>
            </div>
            <div className='flex justify-center gap-1 mt-10'>
              {AboutUsImages.map((item, idx) => {
                return (
                  <span
                    className={`${(idx === 1 || idx === 3) && `pt-10`}`}
                    key={idx + 2}>
                    <Image
                      src={item}
                      width={180}
                      height={560}
                      alt='about_img'
                    />
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
