// import React from 'react'

// const Container = ({children,className}) => {
//   return (
//         <div className={`max-w-container  mx-auto ${className}`}>{children}</div>
//   )
// }

// export default Container


// responsiv


import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div
      className={`max-w-container mx-auto 
                  px-4 sm:px-6 md:px-8 
                  ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
