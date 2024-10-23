import Image from 'next/image'
import Divider from './Divider'

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
            <div className='flex gap-2 mb-5'>
              <Image
                src={'/whatsappBlack.svg'}
                width={18}
                height={18}
                alt='whatsapp_ic'
              />
              <p>+91 9876543210</p>
            </div>
            <Divider isSecondary />
            <p className='smooth text-xl md:text-2xl'>
              Chat with us on WhatsApp and let’s transform your interiors into
              something extraordinary!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
