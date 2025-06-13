// components/Loading.js
import React, { useEffect, useState } from 'react'

const Loading = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev < 10 ? prev + 1 : 0)) // Loop the count from 0 to 10
    }, 1000) // Update every second

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='relative'>
        <div className='loader w-20 h-20 border-2 border-t-[#282828] rounded-full animate-spin'></div>
      </div>
    </div>
  )
}

export default Loading
