import Image from 'next/image'
import SectionHeader from './SectionHeader'

const Contact = () => {
  return (
    <section className='contact flexCenter sectionMargin textColorDark px-10'>
      <div className='sectionContainer shadow-2xl rounded-lg p-5 bg-[#fff]'>
        {/* <div className='flexBetwn'> */}
        <div className='md:max-w-[50%]'>
          <p className='text-5xl'>
            Would you like to discuss with us about your amazing project?
          </p>
          <p className='text-xl textColorSecondary mt-5'>
            Let's work together & we'll help you by our best interior design
          </p>
        </div>
        {/* <Image
            src={'/contactSectionBanner.svg'}
            alt='contact_banner'
            width={200}
            height={400}
          /> */}
        {/* </div> */}
      </div>
    </section>
  )
}

export default Contact
