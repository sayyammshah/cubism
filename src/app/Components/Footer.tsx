import Image from 'next/image'
import Divider from './Divider'

const Footer = () => {
  return (
    <div className='footer textColorLight bg-[#282828] py-10 px-36'>
      <div>
        <Image
          src={'/heroSectionLogo.svg'}
          alt='logo_img'
          width={50}
          height={50}
        />
        <p className='text-2xl'>CUBISM</p>
      </div>
      <p className='mt-5'>
        Copyright © {new Date().getFullYear()} Cubism. All Right Reserved
      </p>
    </div>
  )
}

export default Footer
