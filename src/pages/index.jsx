/** @jsxImportSource theme-ui */

import ContactForm from "components/ContactForm"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Banner from "sections/index/Banner"
import OurProducts from "sections/index/OurProducts"
import OurServices from "sections/index/OurServices"
import WhoAreWe from "sections/index/WhoAreWe"
import { scroller } from 'react-scroll'
import { useBreakpointIndex } from '@theme-ui/match-media'
import LayoutWrapper from "components/LayoutWrapper"
import Testimonials from "../sections/index/Testimonials"

const Index = () => {
  const router = useRouter()
  const index = useBreakpointIndex()

  // useEffect(() => {
  //   const query = router.query
  //   if(query && query.id === "contact") {
  //     let headerOffset = -35;
  //     let elementPosition = document.getElementById("contactForm").getBoundingClientRect().top;
  //     let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth"
  //     });
  //   }
  // }, [router.query])

  useEffect(() => {
    const query = router.query
    if (query && query.id === "contact") {
      scroller.scrollTo("contactForm", {
        duration: 1000,
        delay: 0,
        smooth: "easeOutQuad",
        // offset: index <= 2 ? 0 : -55
      })
    }
  }, [router.query])


  return (
    <LayoutWrapper>
      <Banner />
      <WhoAreWe />
      <OurServices />
      <OurProducts />
      <Testimonials/>
      <ContactForm />
    </LayoutWrapper>
  )
}

export default Index