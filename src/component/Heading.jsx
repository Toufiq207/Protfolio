import React from 'react'

const Heading = ({text,className}) => {
  return (
      <h1 className={`text-[50px] text-black font-dm font-bold text-center ${className}`}>{text}</h1>
  )
}

export default Heading