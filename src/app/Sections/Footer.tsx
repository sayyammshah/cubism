import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Logo from './Logo'
import { WA_LINK } from '@/lib/constants'
import Link from 'next/link'

const contactProfiles = [
  {
    id: 1,
    title: 'Based out of',
    text: 'Nashik',
    link: '',
  },
  {
    id: 2,
    title: 'Email us on',
    text: 'cubisminteriors@gmail.com',
    link: '',
  },
  {
    id: 3,
    title: 'Chat with us',
    text: 'Whatsapp',
    link: WA_LINK,
  },
  {
    id: 4,
    title: 'Follow on Instagram',
    text: '@cubism_theinteriordesignstudio',
    link: '',
  },
]

const Footer = () => {
  return (
    <section className='container mt-10 p-10 mx-auto'>
      <div className='md:text-left text-center md:flex items-start justify-between gap-5'>
        <div className='w-full'>
          <Logo isLarge />
          <div className='my-10'>
            <p className='text-4xl text-cormorant_unicase text-[#333333]'>
              Get in touch with us
            </p>
            <div className='md:flex items-start mt-3 w-full'>
              {contactProfiles.map(({ id, title, text, link }) => {
                return (
                  <Link href={link} className='mt-5 md:mt-0 flex-grow'>
                    <p key={id}>
                      <span className='block'>{title}</span>
                      <span
                        className={`block underline  ${
                          id !== 1 && 'cursor-pointer'
                        }`}>
                        {text}
                      </span>
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <Image
          src={'/profile.svg'}
          width={270}
          height={350}
          alt={'altTxt_profile'}
          className='md:mx-0 mx-auto shadow-2xl rounded-3xl'
        />
      </div>
      <Separator className='w-full bg-[#E1E1E1] my-7' />
      <p>Copyright © {new Date().getFullYear()} Cubism. All Right Reserved</p>
    </section>
  )
}

export default Footer
