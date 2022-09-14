/** @jsxImportSource theme-ui */
import { Box, Flex, Heading, Paragraph, Grid, Text, Image } from "components/motionComponents"
import { slideUpAnimation, staggeredAnims } from "components/motionAnimations"
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({overwrite:"auto"});


const styles = {
    sectionHeadingContainer: {
        // alignItems: "center", 
        // justifyContent: "space-between",
        gridTemplateColumns: ["2fr 1fr", "2fr 1fr", "2fr 1fr", "2fr 1fr", 'none'],
        gap: 0,
        "& > div":{
            alignSelf: "center",
            zIndex: 1
        }
    },
    sectionHeading: {
        variant: "sectionHeading",
        background: "linear-gradient(180deg, #ffffff 80%, #000000 100%)",
        fontSize: [35, 40, 55, 55, 63, 79],
        lineHeight: "1em",
        alignItems: "center",
    },
    bulletPoints: {
        p: "0 0 0 30px",
        zIndex: 1,
        li: {
            fontFamily: "body",
            color: "white",
            my: [17, 17, 20],
            fontWeight: 700,
            fontSize: [17, 19, 20, 20, 23]
        }
    },
    imgAsideHeading: {
        zIndex: 1,
        display: ["block", "block", "block", "block", "none"],
        img: {
            height: "100%",
            objectFit: "contain"
        }
    },
    imgBox: {
        variant: "container.centeredFlexBox",
        display: ["none", "none", "none", "none", "flex"],
        zIndex: 1,
        img: {
            width: "70%",
            height: "100%",
            objectFit: "contain"
        }
    }
}

const DetailsGrid = ({data: {top, heading, img, detail, bulletPoints}, index}) => {
    const image = useRef()
    const resImg = useRef()
    useEffect(() => {
        const tl = gsap.timeline()
        tl
        .to(image.current, {
            scrollTrigger: {
                trigger: image.current,
                scrub: 1,
                start: "top 20%",
            },
            y: -200,
        })
        .to(resImg.current, {
            scrollTrigger: {
                trigger: resImg.current,
                scrub: 1,
                start: "top 20%",
            },
            y: -50
        })
    }, [])
    return <Grid columns={["none", "none", "none", "none", 2]} data-testid="gridBox">
    <Flex sx={{ flexDirection: "column" }}>
        <Box>
            <Grid sx={styles.sectionHeadingContainer}>
                <Box>
                    <Text data-testid="grid-topHeading" variant="sectionPara" {...slideUpAnimation({})}>{top}</Text>
                    <Heading data-testid="grid-heading" sx={styles.sectionHeading} {...slideUpAnimation({delay: .1})}>{heading}</Heading>
                </Box>
                <Box sx={styles.imgAsideHeading} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .5}} viewport={{once: true}} ref={resImg} data-testid="grid-img"><Image src={img} alt={heading} /></Box>
            </Grid>
            <Paragraph data-testid="grid-para" variant="sectionPara" mt={20} sx={{ whiteSpace: "pre-wrap" }} {...slideUpAnimation({})}>{detail}</Paragraph>
        </Box>
        {bulletPoints &&
            <Box as="ul" sx={styles.bulletPoints} variants={staggeredAnims.fadeIn.container} initial="hidden" whileInView="show" viewport={{once: true}}>
                {bulletPoints.map((point, index) => <Box data-testid="grid-bulletPoint" key={index} as="li" variants={staggeredAnims.fadeIn.listItem}>{point}</Box>)}
            </Box>
        }
    </Flex>
    <Box sx={{ ...styles.imgBox, order: (index + 1) % 2 ? 1 : -1 }} ref={image}><Image src={img} alt={heading} /></Box>
</Grid>
}

export default DetailsGrid