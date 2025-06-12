import { Separator } from '@/components/ui/separator'
import React from 'react'

const Logo = ({ isLarge }: { isLarge?: boolean }) => {
  return (
    <>
      <div className='flex items-center gap-3'>
        <p className={`text-tangerine ${isLarge ? 'text-7xl' : 'text-2xl'}`}>
          Cubism
        </p>
        <Separator orientation='vertical' className='h-[2.5rem] bg-[#282828]' />
        <p
          className={`text-cormorant ${
            isLarge ? 'text-2xl text-left' : 'text-sm'
          }`}>
          Interior Design <br /> Studio
        </p>
      </div>
    </>
  )
}

export default Logo
