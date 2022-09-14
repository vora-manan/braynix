// import LayoutWrapper from "components/LayoutWrapper"
// import Products from "sections/products/Products"

// const products = () => {
//   return (
//     <LayoutWrapper>
//       <Products/>
//     </LayoutWrapper>
//   )
// }

// export default products

// import LayoutWrapper from "components/LayoutWrapper"
// import Products from "sections/products/Products"
import ContactForm from "components/ContactForm"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Banner from "sections/index/Banner"
import Products from "sections/products/Products"
import OurServices from "sections/index/OurServices"
import WhoAreWe from "sections/index/WhoAreWe"
import { scroller } from 'react-scroll'
import { useBreakpointIndex } from '@theme-ui/match-media'
import LayoutWrapper from "components/LayoutWrapper"
import Testimonials from "../sections/index/Testimonials"

const products = () => {
  return (
    // <LayoutWrapper>
    //   <Products/>
    // </LayoutWrapper>
    <LayoutWrapper>
    <Products />
  </LayoutWrapper>
  )
}

export default products