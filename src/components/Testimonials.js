// import React from 'react'
// import styled from 'styled-components'
// import { GatsbyImage, getImage  } from 'gatsby-plugin-image'
// import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
// import { FaRegLightbulb } from 'react-icons/fa'
// import { graphql, useStaticQuery } from 'gatsby'
// import { useStaticQuery } from 'gatsby'

// function Testimonials() {
//     const data = useStaticQuery(graphql)`
//         query {
//   allFile(filter: {ext: {}, name: {in: ["student", "niaja-man"]}}) {
//     edges {
//       node {
//         childImageSharp {
//           gatsbyImageData(
//                   width: 800
//                   placeholder: BLURRED
//                   formats: [AUTO, WEBP, AVIF]
//                 )
//           }
//         }
//       }
//     }
//   }
// }
//     `
//   return (
//     <TestimonialsContainer>
//         <TopLine>
//             Testimonials
//         </TopLine>
//         <Description>
//             What People are Saying
//         </Description>
//         <ContentWrapper>
//             <ColumnOne>
//                 <Testimonial>
//                     <IoMdCheckmarkCircleOutline />
//                     <h3>Sean Micheals</h3>
//                     <p>The greatest experience of my life! The vacatio i have aalways wanted to go on finally had the opportunity to achieve this.</p>
//                 </Testimonial>
//                 <Testimonial>
//                     <FaRegLightbulb />
//                     <h3>Sarah kim</h3>
//                     <p>The greatest experience of my life! The vacatio i have aalways wanted to go on finally had the opportunity to achieve this.</p>
//                 </Testimonial>
//             </ColumnOne>
//             <ColumnTwo>
//                 {data.allFile.edges.map((image, key) => {
//             const imageData = getImage(image.node.childImageSharp.gatsbyImageData)
//             return <StyledGatsbyImage key={key} image={imageData} alt="" />
//           })}
//             </ColumnTwo>
//         </ContentWrapper>

//     </TestimonialsContainer>
//   )
// }

// export default Testimonials

// const TestimonialsContainer = styled.div`
// width: 100%;
// background: #fcfcfc;
// color: #000;
// padding: 5rem calc((100vw - 1300px) / 2);
// height: 100%
// `

// const TopLine = styled.p`
// color: #077bf1;
// font-size: 1rem;
// padding-left: 2rem;
// margin-bottom: 0.75rem;
// `

// const Description = styled.p`
// text-align: start;
// padding-left: 2rem;
// margin-bottom: 4rem;
// font-size: clamp(1.5rem, 5vw, 2rem);
// font-weight: bold;
// `


// const ContentWrapper = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr;
// padding: 0 2rem;

// @media screen and (max-width: 768px) {
// grid-template-columns: 1fr;
// }
// `

// const ColumnOne = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr;
// `

// const Testimonial = styled.div`
// padding-top: 1rem;
// padding-right: 2rem;

// h3 {
// margin-bottom: 1rem;
// font-size: 1.5rem;
// font-style: italic;
// }

// p {
// color: #3b3b3b;
// }
// `


// const ColumnTwo = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr;
// margin-top: 2rem;
// grid-gap: 10px;

// @media screen and (max-width: 500px) {
// grid-template=columns: 1fr;
// }
// `

// const StyledGatsbyImage = styled(GatsbyImage)`
//   border-radius: 10px;
//   height: 100%;
// `

import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

function Testimonials() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { ext: {}, name: { in: ["student", "niaja-man"] } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline css={`
                                color: #3fffa8;
                                font-size: 2rem;
                                margin-bottom: 1rem;
                                `} 
            />
            <h3>Adewale Tinubu</h3>
            <p>
              The greatest experience of my life! The vacation I have always
              wanted to go on finally had the opportunity to achieve this.
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb css={`
                                color: #f9b19b;
                                font-size: 2rem;
                                margin-bottom: 1rem;
                                `}
            />
            <h3>Aisat Buhari</h3>
            <p>
              Wow! This was an experience so unique and wonderful! Hoping to make it a yearly occurrence as it was so relaxing and fun filled.
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => {
            const imageData = getImage(image.node.childImageSharp.gatsbyImageData)
            return <StyledGatsbyImage key={key} image={imageData} alt="" />
          })}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`
