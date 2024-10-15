import React from 'react'
import Divider from './Divider'
import Image from 'next/image'
import Header from './Header'

const heroContent = {
  title: 'Beautify and Enhance your space',
}

const HeroSection = () => {
  return (
    <>
      <section className='homepage setBg flexCenter textColorLight'>
        <div className='container'>
          <Header />
          <div className='flex flex-col gap-4'>
            <p className='text-6xl font-bold'>
              Beautify and Enhance your space <br /> with our expertise
            </p>
            <Divider />
            <p>
              We will help you to unlock the beauty and comfort of your space{' '}
              <br />
              that insipres and enriches your life
            </p>
          </div>
          <div className='flexCenter gap-2'>
            <p>Explore</p>
            <Image
              src={'/doubleArrowDown.svg'}
              alt='double arrow down'
              width={24}
              height={24}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
