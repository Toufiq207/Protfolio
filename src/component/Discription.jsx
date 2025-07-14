import React from 'react'

const Discription = ({className,text,para}) => {
  return (
    <div className={`w-full  shadow-xl bg-amber-700 rounded-2xl mb-4 ${className}`} >

 <h1 className='text-[40px] text-black  font-dm font-normal  pt-[20px]  pl-4'>{text}</h1>
 <p className='text-[20px] text-black font-dm font-norma   pb-[20px] pl-4'>{para}</p>
        <h1></h1>
    </div>
  )
}

export default Discription