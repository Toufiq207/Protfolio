import React from 'react'

const Navberlist = ({text,className}) => {
  return (
   
           <ul> <li className={`text-xl text-white hover:text-secondary font-normal hover:font-bold font-dm list-none duration-500 ${className}`}>{text}</li>
        </ul>
  )
}

export default Navberlist