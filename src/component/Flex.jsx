// import React from 'react'

// const Flex = ({children,className}) => {
//   return (
//    <div className={`flex ${className}`}>{children}</div>
//   )
// }

// export default Flex


// responsiv


import React from 'react'

const Flex = ({ children, className }) => {
  return (
    <div
      className={`flex flex-wrap gap-4 sm:gap-6 md:gap-8 ${className}`}
    >
      {children}
    </div>
  )
}

export default Flex



