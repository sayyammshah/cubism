import Image from 'next/image'
import React from 'react'

interface SectionHeaderProps {
  title: string
  subTitle?: string
  applyMaxWidth?: boolean
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { title, subTitle, applyMaxWidth = false } = props
  return (
    <div className='mb-10 md:mb-16'>
      <p className='text-lg md:text-xl textColorSecondary'>{title}</p>
      <p
        className={`sectionHeaderTextSize smooth ${
          applyMaxWidth ? `md:max-w-[40%]` : `max-w-fit`
        }`}>
        {subTitle}
        <div className='mt-[5px]'></div>
        <Image
          src={'/underlineGreen.svg'}
          width={100}
          height={20}
          alt='underline_img'
        />
      </p>
    </div>
  )
}

export default SectionHeader
