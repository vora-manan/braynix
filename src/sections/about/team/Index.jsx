import { useResponsiveValue } from '@theme-ui/match-media'
import { slideUpAnimation } from 'components/motionAnimations'
import { Box, Flex, Heading, Image, Paragraph } from 'components/motionComponents'
import Desktop from './Desktop'
import Responsive from './Responsive'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({overwrite:"auto"});

const styles = {
    boxBg: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: "0px 4px 10px -3px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(20px)",
    },
    buttonContainer: {alignItems: "center", py: 10, justifyContent: "flex-end"},
    button: {
        outline: "none",
        border: 0,
        borderRadius: 0,
        fontSize: 20,
        p: 10,
        width: ["80%", "80%", "80%", "70%"],
        color: "white",
        fontFamily: "body",
        display: "flex",
        alignItems: "center",
        fontWeight: 300,
        cursor: "pointer",
        transition: ".2s",
        "&.active": {
            width: ["100%", "100%", "100%", "90%"],
            backgroundColor: "deepBlue",
            fontWeight: 500,
        }
    },
    imgInStrip: {
        width: 50, height: 50, mr: "5px",
        img: {width: "100%", height: "100%", mx: 0},
    },
    memberCard: {width: "70%", display: "flex"},
    memberName: {
        textAlign: "center",
        color: "white",
        fontSize: 30,
        fontWeight: 600
    },
    memberCardImgBox: {
        width: "70%",
        img: {
            width: "100%",
            height: "100%",
        }
    },
    memberCardDetailBox:{flexDirection: "column", p: 20, alignItems: "center", justifyContent: "center"},
    bubble: {
        display: ["block", 'block', 'block', 'block', 'none'],
        position: "absolute",
        top: "10%",
        left: 0,
        img: {
            width: 300
        }
    }
}

const Team = ({data}) => {
    const bubbleRef = useRef()

    useEffect(() => {
        let tl = gsap.timeline()
        tl.to(bubbleRef.current, {
            scrollTrigger: {
                trigger: bubbleRef.current,
                scrub: 2,
                start: "bottom bottom"
            },
            y: -200
        })
        return () => tl.kill()
    },[])

    return (
        <Box as="section" sx={{ overflow: "hidden", position: "relative", my: 13 }} data-testid="teamSection">
            <Box sx={styles.bubble} ref={bubbleRef}><Image src='/images/bubbleFlipped.png' /></Box>
            <Flex variant="container.centeredFlexBox" sx={{zIndex: 1}}>
                <Box sx={{ width: ["100%", "100%", "100%", "45%"] }}>
                    <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Our Team</Heading>
                    <Paragraph data-testid="para" variant="sectionPara" sx={{ textAlign: "center" }} {...slideUpAnimation({delay: .1})}>Custom tailored to each client's needs we aim to.</Paragraph>
                </Box>
            </Flex>
            {useResponsiveValue([<Responsive data={data}/>, <Responsive data={data}/>, <Responsive data={data}/>, <Responsive data={data}/>, <Desktop data={data}/>])}
        </Box>
    )
}

export default Team