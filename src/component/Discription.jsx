// import React from 'react'

// const Discription = ({className,text,para}) => {
//   return (
//     <div className={`w-full  shadow-xl bg-amber-700 rounded-2xl mb-4 ${className}`} >

//  <h1 className='text-[40px] text-black  font-dm font-normal  pt-[20px]  pl-4'>{text}</h1>
//  <p className='text-[20px] text-black font-dm font-norma   pb-[20px] pl-4'>{para}</p>
//         <h1></h1>
//     </div>
//   )
// }

// export default Discription


// responsiv


import React from 'react'

const Discription = ({ className, text, para }) => {
  return (
    <div
      className={`w-full shadow-xl bg-amber-700 rounded-2xl mb-4 
                  p-4 sm:p-6 md:p-8 
                  ${className}`}
    >
      <h1
        className='text-2xl sm:text-3xl md:text-4xl text-black font-dm font-medium mb-2'
      >
        {text}
      </h1>

      <p
        className='text-base sm:text-lg md:text-xl text-black font-dm font-normal'
      >
        {para}
      </p>
    </div>
  )
}

export default Discription
