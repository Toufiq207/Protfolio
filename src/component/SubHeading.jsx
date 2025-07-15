// import React from 'react'

// const SubHeading = () => {
//   return (
//     <p className='text-[20px] text-black font-dm font-norma pb-[20px]'></p>
//   )
// }

// export default SubHeading
// responsiv


import React from 'react'

const SubHeading = ({ text, className }) => {
  return (
    <p
      className={`text-base sm:text-lg md:text-xl text-black font-dm font-normal pb-5 ${className}`}
    >
      {text}
    </p>
  )
}

export default SubHeading
