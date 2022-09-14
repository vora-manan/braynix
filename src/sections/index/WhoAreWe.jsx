/** @jsxImportSource theme-ui */
import { Box, Flex, Grid, Heading, Image, Paragraph } from "components/motionComponents"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { slideUpAnimation } from "components/motionAnimations";
gsap.registerPlugin(ScrollTrigger);

const styles = {
    imageContainer: {
        justifyContent: 'flex-end', alignItems: "center",
        display: ["none", 'none', 'none', 'flex'],
        img: {
            width: "80%",
        }
    },
    responsivelyPositionedImage: {
        display: ["block", 'block', 'block', 'none'],
        position: "absolute",
        top: "35%",
        left: 0,
        img: {
            width: 229,
        }
    },
    contentBox: {
        display: "flex",
        justifyContent: "center", alignItems: "center", zIndex: 1
    }
}

const WhoAreWe = () => {
    const imageRef = useRef();
    const responsiveImageRef = useRef();
    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(imageRef.current, {
            scrollTrigger: {
                trigger: imageRef.current,
                scrub: true,
                start: "top 10%"
            },
            x: 200,
            duration: .1,
            lazy: false,
        })
        return () => tl.kill()
    }, [])


    return (
        <Grid as="section" columns={["none", 'none', 'none', "1.5fr 1fr"]} sx={{ height: ["55vh", "60vh", "75vh"], position: "relative", }} data-testid="whoAreWeSection">
            <Flex sx={styles.responsivelyPositionedImage} ref={responsiveImageRef} data-testid="bannerImgResponsive">
                <Image src="/images/bubbleFlipped.png" />
            </Flex>
            <Flex sx={styles.contentBox}>
                <Box sx={{ width: ["90%", "90%", "90%", "80%"] }}>
                    <Heading data-testid="heading" variant="sectionHeading" {...slideUpAnimation({})}>Who are we?</Heading>
                    <Paragraph data-testid="para" variant="sectionPara" {...slideUpAnimation({delay: .1})}>With an aim of transforming your idea into a successful business model framework, Braynix AI manages several emerging technological tools and help in solving the day-to-day practical hitches faced by the people and organizations. We stand out by providing customized solutions that are tailored as per your requirements.</Paragraph>
                </Box>
            </Flex>
            <Flex sx={styles.imageContainer} ref={imageRef} data-testid="bannerImg">
                <Image src="/images/bubble.png" />
            </Flex>
        </Grid>
    )
}

export default WhoAreWe