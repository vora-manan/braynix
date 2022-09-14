/** @jsxImportSource theme-ui */
import { Box, Flex, Grid, Heading, Image, Paragraph, Text } from "components/motionComponents"
import { useBreakpointIndex } from '@theme-ui/match-media'
import {fadeInAnim, slideUpAnimation} from 'components/motionAnimations'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({overwrite:"auto"});

const styles = {
    heading: {
        fontSize: 30,
        fontWeight: 600,
        color: "white"
    },
    para: {
        variant: "sectionPara",
        mt: "5px",
        whiteSpace: "pre-wrap",
        fontSize: [16, 16, 16, 16, 18]
    },
    sectionNumber: {
        variant: "sectionOrder",
        top: [-420, -460, -546, -546, -130],
        fontSize: [300, 300, 430, 430, 265]
    }
}

const ServiceDetailBox = ({ data: { img, name, detail, imgWidth }, number }) => {
    const breakpointIndex = useBreakpointIndex()
    const numberPosition = () => {
        // const pos = breakpointIndex <= 3 ? {left: -90} : number % 2 ? {left: -90} : {right: -90}
        const pos = breakpointIndex <= 3 ? number % 2 ? {left: -40} : {right: -60} : {left: -90}
        return {...styles.sectionNumber, position: "absolute", ...pos}
        
    }
    const numberRef = useRef()
    const imageRef = useRef()
    useEffect(() => {
        const tl = gsap.timeline()
        tl
        // .fromTo(imageRef.current, {y: 50, opacity: 0}, {
        //     scrollTrigger: {
        //         trigger: imageRef.current,
        //         start: "bottom bottom"
        //     },
        //     y: 0,
        //     opacity: 1
        // })
        // .fromTo(numberRef.current, {y: 50, opacity: 0}, {
        //     scrollTrigger: {
        //         trigger: numberRef.current,
        //         start: "bottom bottom"
        //     },
        //     y: 0,
        //     opacity: 1
        // })
        .add("start")
        .fromTo(numberRef.current, {y: 0}, {
            scrollTrigger: {
                scrub: 1,
                start: "bottom bottom",
                trigger: numberRef.current
            },
            y: breakpointIndex <= 3 ? -75 : -100,
            // duration: .1,
            lazy: false,
        }, "start")
        .fromTo(imageRef.current, {y: 0}, {
            scrollTrigger: {
                scrub: 1,
                start: "bottom bottom",
                trigger: imageRef.current
            },
            y: breakpointIndex <= 3 ? -75 : -100,
            // duration: .1,
            lazy: false,
        }, "start")
        return () => tl.kill()
    }, [])

    return (
        <Grid columns={["none", "none", 'none', "none", 2]} my={[30, 30, 30, 30, 60]} data-testid="service-card">
            <Flex variant="container.centeredFlexBox" sx={{zIndex: 1, flexDirection: "column"}}>
                <Heading as="h4" mb={20} sx={{...styles.heading, display: ["block",'block', 'block', 'block', 'none']}} {...slideUpAnimation({})}>{name}</Heading>
                <Image src={img} alt={name} sx={imgWidth ? { width: imgWidth } : { width: ["50%", "50%", "50%", "50%", "65%"] }} {...fadeInAnim({})} ref={imageRef}/>
            </Flex>
            <Flex sx={{ order: breakpointIndex <= 3 ? 1 : number % 2 ? 1 : -1, position: "relative" }}>
                <Text data-testid="service-card-number" sx={numberPosition()} {...slideUpAnimation({})} ref={numberRef}>{number}</Text>
                <Box sx={{ zIndex: 1 }}>
                    <Heading as="h3" sx={{...styles.heading, display: ["none",'none', 'none', 'none', 'flex']}} {...slideUpAnimation({})}>{name}</Heading>
                    <Paragraph data-testid="service-card-details" as="p" sx={styles.para} {...slideUpAnimation({delay: .1})}>{detail}</Paragraph>
                </Box>
            </Flex>
        </Grid>
    )
}

export default ServiceDetailBox