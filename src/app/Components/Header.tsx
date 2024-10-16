import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navBarMetaData = [
  {
    label: 'Home',
    redirectTo: '/home',
    key: '/home1',
  },
  {
    label: 'About',
    redirectTo: '/about',
    key: '/about2',
  },
  {
    label: 'Services',
    redirectTo: '/services',
    key: '/services3',
  },
  {
    label: 'Portfolio',
    redirectTo: '/portfolio',
    key: '/portfolio4',
  },
]

const Header = () => {
  const logo = '/heroSectionLogo.svg'
  return (
    <>
      <section className='flexBetwn'>
        <div className='flex items-start gap-2'>
          <Image src={logo} alt='logo' width={22} height={22} />
          <p className='text-lg font-bold'>CUBISM</p>
        </div>
      </section>
    </>
  )
}

export default Header
