import React from 'react'

interface SectionHeaderProps {
  title: string
  subTitle?: string
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { title, subTitle } = props
  return (
    <div>
      <p className='text-xl textColorSecondary'>{title}</p>
      <p className='text-7xl'>{subTitle}</p>
    </div>
  )
}

export default SectionHeader
