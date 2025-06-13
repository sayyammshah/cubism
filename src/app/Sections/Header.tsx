import React from 'react'
import Logo from './Logo'
import { ArrowRightIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { WA_LINK } from '@/lib/constants'

const Header = () => {
  const arrowSrc = '/arrow.svg'

  return (
    <section className='header'>
      <div className='flex items-center justify-between'>
        <Logo />
        <div className='flex gap-1'>
          <Link href={WA_LINK} target='_blank'>
            <p className='underline cursor-pointer'>Book a Call </p>
          </Link>
          <ArrowRightIcon width={18} />
        </div>
      </div>
      <Separator className='bg-[#E1E1E1] mt-5' />
    </section>
  )
}

export default Header
