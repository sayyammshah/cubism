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
        <div className='navBar'>
          <ul className='flex items-center gap-7'>
            {navBarMetaData.map((item, idx) => {
              return (
                <li key={item.key} className='navBarItem'>
                  <Link href={item.redirectTo}>{item.label}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='flexCenter gap-2'>
          <Image
            src={'/whatsapp.svg'}
            width={18}
            height={18}
            alt='whatsapp_ic'
          />
          <p>+91 9876543210</p>
        </div>
      </section>
    </>
  )
}

export default Header
