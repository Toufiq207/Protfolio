// import React from 'react'

// const Button = ({text,className}) => {
//   return (
//  <button className={`text-sm text-[#FFFFFF] hover:text-black font-bold font-dm bg-[#262626] hover:bg-transparent py-4 px-16 border border-transparent  hover:border-secondary duration-500 ${className}`}>{text}</button>


//   )
// }

// export default Button





// responsive


import React from 'react'

const Button = ({ text, className }) => {
  return (
    <button
      className={`text-sm md:text-base text-white hover:text-black font-bold font-dm
                  bg-[#262626] hover:bg-transparent
                  py-3 px-8 sm:py-4 sm:px-12 md:py-5 md:px-16
                  border border-transparent hover:border-secondary
                  duration-500 ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
