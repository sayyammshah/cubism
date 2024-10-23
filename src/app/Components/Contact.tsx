import Image from 'next/image'
import Divider from './Divider'
import Link from 'next/link'
import { CONTENT } from '../Content'

const Contact = () => {
  return (
    <section className='contact flexCenter sectionMargin textColorDark px-10 mb-10'>
      <div className='sectionContainer shadow-2xl rounded-lg p-5 bg-[#fff]'>
        <div className='md:flex items-center gap-10'>
          <Image
            src={'/contactBanner.svg'}
            alt='contact_banner'
            width={300}
            height={500}
          />
          <div className='mt-5 md:mt-0'>
            <p className='text-lg md:text-xl textColorSecondary mb-5'>
              Let's work together & we'll help you by our best interior design
            </p>
            <Divider isSecondary />
            <p className='smooth text-xl md:text-2xl'>
              Chat with us on WhatsApp and let’s transform your interiors into
              something extraordinary!
            </p>
            <Link
              href={CONTENT.waLink}
              target='_blank'
              className='flex gap-2 mt-10 w-fit p-3 rounded-sm cursor-pointer bg-[#282828] textColorLight'>
              <Image
                src={'/whatsapp.svg'}
                width={18}
                height={18}
                alt='whatsapp_ic'
              />
              <p>Reach Out to Us</p>
              {/* <p>+91 9876543210</p> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
