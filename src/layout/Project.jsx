import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import ProjectComponent from '../component/ProjectComponent'
import Heading from '../component/Heading'
import Oribi from '../assets/oribi.PNG'
import Innovat from '../assets/innovat.PNG'

const Project = ({id}) => {
  return (
    <section id={id} className="py-10">
      <Container>
        <Heading className="pb-6" text="Projects" />

        <Flex className="flex-wrap justify-center gap-x-6 gap-y-12 ">
          <ProjectComponent
            img={Oribi}
            text="Oribi (Ecommerce Website)"
            web="https://eccomarce.vercel.app/"
          />
          <ProjectComponent
            img={Innovat}
            text="Innovat"
            web="https://innovet.vercel.app/"
          />
        </Flex>
      </Container>
    </section>
  )
}

export default Project



// import React from 'react'
// import Container from '../component/Container'
// import Flex from '../component/Flex'
// import ProjectComponent from '../component/ProjectComponent'
// import Heading from '../component/Heading'
// import Oribi from '../assets/oribi.PNG'
// import Innovat from '../assets/innovat.PNG'

// const Project = () => {
//   return (
//     <section className="py-10">
//       <Container>
//         <Heading className="pb-6" text="Projects" />

//         <Flex className="flex-wrap justify-center gap-6 md:gap-10">
//           <ProjectComponent
//             img={Oribi}
//             text="Oribi (Ecommerce Website)"
//             web="https://eccomarce.vercel.app/"
//           />
//           <ProjectComponent
//             img={Innovat}
//             text="Innovat"
//             web="https://innovet.vercel.app/"
//           />
//         </Flex>
//       </Container>
//     </section>
//   )
// }

// export default Project
