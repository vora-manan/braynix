/** @jsxImportSource theme-ui */
import { useResponsiveValue } from "@theme-ui/match-media";
import Caraousel from "components/Caraousel";
import { useRef, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Paragraph,
  Text,
} from "components/motionComponents";
import { slideUpAnimation } from "components/motionAnimations";

const services = [
  {
    img: "/images/index/services/dataAnalytics.png",
    name: "AI and Data Analytics",
    detail:
      "We crunch the big numbers for you and help refine your business model with tangible insights and feasable solutions.",
  },
  {
    img: "/images/index/services/chatBot.png",
    name: "Chatbots",
    detail:
      "Automate the 360° customer experience leveraging AI, across various channels.",
  },
  {
    img: "/images/index/services/graphic.png",
    name: "Graphic Designing",
    detail:
      "Get the visual identity of your business to boost up the engagement of the potential audience developed.",
  },
  {
    img: "/images/index/services/webDev.png",
    name: "Web Development",
    detail:
      "Ignite your businesses presence on the web and make a mark on global scale.",
  },
  {
    img: "/images/index/services/appDev.png",
    name: "App Development",
    detail:
      "Let us help you put your ideas in motion and connect it to the audience in just a tap.",
  },
  {
    img: "/images/index/services/seo.png",
    name: "SEO & Digital Marketing",
    detail:
      "Make your brand stand out and connect with audience at a personal level over various social platforms and search engines.",
  },
];

const styles = {
  gridBox: { width: "80%", mx: "auto", py: 30, gap: "40px 65px" },
  serviceImageBox: {
    width: 80,
    height: 80,
    mx: "auto",
    borderRadius: "50%",
    backgroundColor: "beta",
    justifyContent: "center",
    alignItems: "center",
    img: {
      width: "80%",
      height: "80%",
      // objectFit: "contain",
    }
  },
  serviceName: {
    variant: "text",
    display: "block",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    my: 10,
  },
  para: {
    variant: "sectionPara",
    textAlign: "center",
  },
  carouselContainer: {
    variant: "carousel",
    position: "relative",
    my: 40,
  },
  arrowIconBtn: {
    position: "absolute",
    top: "50%",
    width: 40,
    height: 40,
    zIndex: 1,
    img: {
      width: "100%",
      height: "100%",
    },
  },
};

const OurServices = () => {
  return (
    <Box as="section" mt={[20, 20, 20, 'unset']} sx={{ zIndex: 1 }} data-testid="ourServicesSection">
      <Flex sx={{ justifyContent: "center", zIndex: 1 }}>
        <Box sx={{ width: ["90%", "90%", "90%", "60%", "50%"], zIndex: 1 }}>
          <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>One Stop Solution</Heading>
          <Paragraph data-testid="para" variant="sectionPara" sx={{ textAlign: "center" }} {...slideUpAnimation({ delay: .1 })}>
            Choose from a wide gamut of services that are custom tailored to
            each client's need.
          </Paragraph>
        </Box>
      </Flex>
      {useResponsiveValue([<ServicesCarousel />, <ServicesCarousel />, <ServicesCarousel />, <ServicesGrid />])}
    </Box>
  )
}

const ServicesGrid = () => <Grid columns={3} sx={styles.gridBox} data-testid="servicesContainer">
  {services.map((service, i) => <Box key={i} style={{ zIndex: 1 }} data-testid="serviceDetailBox">
    <Box sx={styles.serviceImageBox} {...slideUpAnimation({})}></Box>
    <Box {...slideUpAnimation({ delay: .1 })}>
      <Text sx={styles.serviceName}>{service.name}</Text>
      <Paragraph sx={styles.para}>{service.detail}</Paragraph>
    </Box>
  </Box>)}
</Grid>

// "/icons/arrowLeft.svg" 
const ServicesCarousel = () => {
  const carouselRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(1)
  return (
    <Box sx={styles.carouselContainer} data-testid="servicesCaraousel">
      <IconButton onClick={() => carouselRef.current.slickPrev()} sx={{ ...styles.arrowIconBtn, left: 10, transform: "rotate(180deg)" }}><Image src="/icons/arrowRight-colored.svg" /></IconButton>
      <IconButton onClick={() => carouselRef.current.slickNext()} sx={{ ...styles.arrowIconBtn, right: 10 }}><Image src="/icons/arrowRight-colored.svg" /></IconButton>
      <Caraousel dots={false} carouselRef={carouselRef} carouselChngFunc={setCurrentIndex}>
        {services.map((service, i) => <Box key={i} data-testid="serviceCaraouselBox">
          <Box sx={styles.serviceImageBox}></Box>
          <Text sx={styles.serviceName}>{service.name}</Text>
          <Paragraph sx={{ ...styles.para, width: "80%", mx: "auto" }}>{service.detail}</Paragraph>
        </Box>)}
      </Caraousel>
      <Flex sx={{ justifyContent: "center", mt: 20 }}><Paragraph variant="sectionPara">{currentIndex}/{services.length}</Paragraph> </Flex>
    </Box>
  );
};


export default OurServices;
