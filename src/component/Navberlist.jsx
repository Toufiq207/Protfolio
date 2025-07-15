// import React from 'react'

// const Navberlist = ({text,className}) => {
//   return (
   
//            <ul> <li className={`text-xl text-white hover:text-secondary font-normal hover:font-bold font-dm list-none duration-500 ${className}`}>{text}</li>
//         </ul>
//   )
// }

// export default Navberlist



// responsiv

import React from 'react'

const Navberlist = ({ text, className }) => {
  return (
    <ul className={`list-none ${className}`}>
      <li
        className="text-base sm:text-lg text-white hover:text-secondary font-normal hover:font-bold font-dm duration-500"
      >
        {text}
      </li>
    </ul>
  )
}

export default Navberlist
