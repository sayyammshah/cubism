import React from 'react'

const Divider = (props: { isSecondary?: boolean }) => {
  const { isSecondary } = props
  return (
    <div
      className={`border-t ${
        isSecondary ? `text-[#878787]` : `border-[#F5F5F5]`
      } my-5`}></div>
  )
}

export default Divider
