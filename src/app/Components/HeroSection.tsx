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
      <section className='homepage setBg flexCenter textColorLight w-full'>
        <div className='container'>
          <Header />
          <div className='flex flex-col gap-5'>
            <p className='heroTextSize smooth font-bold'>
              Beautify and Enhance your space <br /> with our expertise
            </p>
            <Divider />
            <p>
              We will help you to unlock the beauty and comfort of your space{' '}
              <br />
              that insipres and enriches your life
            </p>
            <div className='flex gap-2'>
              <Image
                src={'/whatsapp.svg'}
                width={18}
                height={18}
                alt='whatsapp_ic'
              />
              <p>Get your Quote:</p>
              <p>+91 9876543210</p>
            </div>
          </div>
          <div className='flexCenter gap-2'>
            <p>Explore</p>
            <Image
              src={'/doubleArrowDown.svg'}
              alt='double arrow down'
              width={24}
              height={24}
              className='animate-bounce-up-down'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection