/** @jsxImportSource theme-ui */
import { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
} from "components/motionComponents";
// import {motion, useViewportScroll, useTransform} from "framer-motion"
import { slideUpAnimation } from "components/motionAnimations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ overwrite: "auto" });

const styles = {
  imageBox: {
    display: "flex",
    justifyContent: "center",
    zIndex: 1,
    img: {
      width: ["50%", "50%", "50%", "29vw"],
      objectFit: "contain",
    },
  },
  heading1: {
    color: "white",
    fontWeight: 400,
    letterSpacing: ["0.3em", "0.3em", "0.5em", "0.5em"],
    fontSize: [16, 18, 20, 16, 20, 25],
  },
  heading2: {
    color: "white",
    fontWeight: 500,
    fontSize: [32, 35, 35, 35, 45, 50],
    mt: 10,
  },
  heading3: {
    color: "colored",
    fontWeight: 700,
    fontSize: [65, 70, 70, 70, 72, 80],
    lineHeight: 1,
  },
  portfolioBtn: {
    background: "linear-gradient(180deg, #00E0FC 0%, #0136C2 100%)",
    color: "white",
    px: 50,
    py: 15,
    mt: 40,
    fontFamily: "body",
    borderRadius: "5px",
    fontSize: 20,
    width: ["100%", "100%", "100%", "unset"],
    cursor: "pointer",
  },
};

const Banner = () => {
  // const {scrollYProgress} = useViewportScroll()
  // const [hookedYPostion, setHookedYPosition] = useState(0);
  // useEffect(()=>{
  //   // hook into the onChange, store the current value as state.
  //   scrollYProgress.onChange(v=> setHookedYPosition(v));
  // },[scrollYProgress]); //make sure to re-subscriobe when scrollYProgress changes

  // useEffect(() => console.log(hookedYPostion), [hookedYPostion])
  // const yValue = useTransform(hookedYPostion, [0, 1], [0, 200])
  const imageRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    // gsap.fromTo(imageRef.current, {transform: "translate(-500px, -500px)"}, {transform: "translate(0, 0)"})
    tl.fromTo(
      imageRef.current,
      { transform: "translate(-500px, -500px)", opacity: 0 },
      {
        transform: "translate(0, 0)",
        opacity: 1,
        duration: 1.5,
        ease: "easeOut",
      }
    ).fromTo(
      imageRef.current,
      { transform: "translate(0, 0)" },
      {
        scrollTrigger: {
          scrub: true,
        },
        transform: "translate(-500px, -500px)",
        duration: 1,
        lazy: false,
      }
    );
    // .to(imageRef.current, {
    //     scrollTrigger: {
    //         scrub: true,
    //     },
    //     transform: "translate(-500px, -500px)",
    //     duration: 1,
    //     lazy: false,
    // })
    return () => tl.kill();
  }, []);
  return (
    <Grid as="section" columns={["none", 'none', 'none', "1fr 1.5fr"]} data-testid="banner">
        <Flex sx={styles.imageBox} ref={imageRef} data-testid="bannerImg">
            <Image src='/images/index/banner.png'/>
        </Flex>
        <Flex sx={{alignItems: "center", zIndex: 1}}>
            <Box sx={{width: "95%", mx: ["auto", "auto", "auto", "unset"]}}>
                <Heading as="h3" sx={styles.heading1} {...slideUpAnimation({})}>Intelligence Everywhere!</Heading>
                <Heading as="h2" sx={styles.heading2} {...slideUpAnimation({delay: .1})}>Lets convert your dream into a reality</Heading>
                <Heading as="h1" sx={styles.heading3} {...slideUpAnimation({delay: .2})}>With innovative and intelligent solutions.</Heading>
                <Button sx={styles.portfolioBtn} {...slideUpAnimation(({delay: .3}))}>Our Services</Button>
            </Box>
        </Flex>
    </Grid>
  );
};

export default Banner;
