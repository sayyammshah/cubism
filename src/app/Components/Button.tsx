import Image from 'next/image'
import React from 'react'

interface EndIcConfig {
  icSrc: string
  width?: number
  height?: number
  altText?: string
}

interface ButtonProps {
  btnTxt: string
  showEndIc?: boolean
  endIcConfig?: EndIcConfig
}

const Button = (props: ButtonProps) => {
  const {
    btnTxt,
    showEndIc = false,
    endIcConfig = { icSrc: '', width: 24, height: 24 },
  } = props
  return (
    <>
      <button className='border-[1.5px] white px-5 py-2 rounded-md w-fit'>
        {showEndIc ? (
          <span className='flex justify-center items-center gap-2'>
            <span className='text-sm'>{btnTxt}</span>
            <Image
              src={endIcConfig.icSrc}
              width={endIcConfig.width}
              height={endIcConfig.height}
              alt={endIcConfig.altText || ''}
            />{' '}
          </span>
        ) : (
          <span className='text-sm'>{btnTxt}</span>
        )}
      </button>
    </>
  )
}

export default Button
