import Image from 'next/image'
import React from 'react'

const Logo = (props: { showWithTagLine?: boolean }) => {
  const logo = '/heroSectionLogo.svg'
  return (
    <>
      {props.showWithTagLine ? (
        <div className='flex items-start gap-2'>
          <Image src={logo} width={38} height={38} alt='cubism logo' />
          <div>
            <p className='font-extrabold text-xl'>CUBISM</p>
            <p className='text-sm'>the interior design studio</p>
          </div>
        </div>
      ) : (
        <div className='absolute pl-24 pt-5 flex gap-1 items-start'>
          <Image src={logo} alt='logo' width={22} height={22} />
          <p className='text-md font-medium text-[#f5f5f5]'>CUBISM</p>
        </div>
      )}
    </>
  )
}

export default Logo
