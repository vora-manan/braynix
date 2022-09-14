// /** @jsxImportSource theme-ui */
// import ContactForm from 'components/ContactForm'
// import { slideUpAnimation, staggeredAnims } from 'components/motionAnimations'
// import { Box, Flex, Grid, Heading, Image, Paragraph } from 'components/motionComponents'
// import { useEffect, useRef } from 'react'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import ProductCard from './ProductCard';
// import Client from './Client';
// gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ overwrite: "auto" });


// const data = {
//     products: [
//         {
//             id: 123,
//             name: "Healthcare Solutions",
//             details: `Built in collaboration with medical professionals, and trained on real-world datasets. Intelligent AI-based diagnosis that examines each scan for multiple complications at once.`,
//             collabtoration: ["Built in collaboration", "Built in collaboration", "Built in collaboration", "Built in collaboration"]
//         },
//         {
//             id: 321,
//             name: "Legal Solutions",
//             details: `An exhaustive, all-in-one solution, built to digitalize the legal sector. Intuitive workflow for both lawyers and clients that simplifies operational procedures.`,
//             collabtoration: ["Built in collaboration", "Built in collaboration", "Built in collaboration", "Built in collaboration"]
//         },
//     ],
//     trustedBy: [
//         { img: "/images/products/mern.png", name: "MERN" },
//         { img: "/images/products/python.png", name: "Python" },
//         { img: "/images/products/adobexd.png", name: "Adobe xd" },
//         { img: "/images/products/aws.png", name: "AWS" },
//         { img: "/images/products/azure.png", name: "Azure" },
//         { img: "/images/products/django.jpg", name: "Django" },
//         { img: "/images/products/figma.png", name: "Figma" },
//         { img: "/images/products/flask.png", name: "Flask" },
//         { img: "/images/products/nextjs.png", name: "Next Js" },
//         { img: "/images/products/oracle.png", name: "Oracle Cloud Infrastructure" },
//         { img: "/images/products/python.png", name: "Python" },
//         { img: "/images/products/redis.png", name: "Redis" },
//         { img: "/images/products/remix.png", name: "Remix Js" },
//         { img: "/images/products/scikitImage.png", name: "Scikit Image" },
//         { img: "/images/products/scikitLearn.png", name: "Scikit Learn" },
//         { img: "/images/products/sql.png", name: "SQL" },
//         { img: "/images/products/tensorflow.png", name: "Tensorflow" },
//     ]
// }

// const styles = {
//     productsContainer: {
//         // backgroundColor: ["unset", "unset", "unset", "rgba(255, 255, 255, 0.1)"],
//         // boxShadow: ["unset", "unset", "unset", "0px 4px 10px -3px rgba(0, 0, 0, 0.25)"],
//         // variant: [null, null, null, "container.glassBackground"],
//         p: [16, 16, 16, 16, 35],
//         width: ["95%", "95%", "95%", "95%", "85%"],
//         // backdropFilter: [null, null, null, "blur(20px)"],
//         zIndex: 1
//     },
//     cardHeading: {
//         variant: 'cardHeading',
//         fontSize: [22, 22, 22, 22, 30],
//     },
//     cardPara: {
//         variant: 'sectionPara',
//         fontSize: [16, 16, 16, 16, 18],
//     },
//     productDetailsBox: {
//         // backgroundColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)", "unset"],
//         // boxShadow: ["0px 4px 10px -3px rgba(0, 0, 0, 0.25)", "0px 4px 10px -3px rgba(0, 0, 0, 0.25)", "0px 4px 10px -3px rgba(0, 0, 0, 0.25)", "unset"],
//         variant: "container.glassBackground",
//         backdropFilter: 'blur(20px)',
//         px: 20,
//         py: [20, 20, 20, null],
//         flexDirection: "column",
//         height: "100%",
//         justifyContent: "space-between",
//         position: "relative",
//         // "&:nth-of-type(odd)": {
//         //     borderRight: [null, null, null, "1px solid white"],
//         // }
//     },
//     exploreBtn: {
//         variant: "button",
//         py: "5px",
//         px: 35,
//         fontSize: 18,
//         border: "1px solid white"
//     },
//     bubble: {
//         position: "absolute",
//         img: {
//             width: [250, 250, 250, 350]
//         }
//     },
//     trustedByCompaniesContainer: {
//         flexWrap: "wrap",
//         width: ["90%", "90%", "90%", "65%"],
//         mx: "auto",
//         variant: "container.centeredFlexBox",
//         my: 35
//     },
//     trustedByCompany: {
//         my: 15,
//         mx: [20, 20, 20, 35],
//         variant: "container.centeredFlexBox"
//     },
//     trustedByCompanyImage: {
//         width: 40,
//         height: 40,
//         mr: 10,
//         img: {
//             width: "100%",
//             height: "100%",
//             m: 0,
//             objectFit: "contain"
//         }
//     }
// }

// const Products = () => {
//     const flippedBubble = useRef()
//     const bubble = useRef()
//     useEffect(() => {
//         const tl = gsap.timeline()
//         tl
//             .to(flippedBubble.current, {
//                 scrollTrigger: {
//                     trigger: flippedBubble.current,
//                     scrub: 1,
//                     start: "top 20%",
//                 },
//                 y: 200,
//             })
//             .to(bubble.current, {
//                 scrollTrigger: {
//                     trigger: bubble.current,
//                     scrub: 1,
//                     start: "top 20%",
//                 },
//                 y: -200
//             })
//     }, [])

//     return (
//         <Box as="main">
//             <Box as="section" data-testid="productsSection">
//                 <Flex variant="container.centeredFlexBox">
//                     <Box sx={{ width: ["100%", "100%", "100%", "45%"], zIndex: 1 }}>
//                         <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Our Products</Heading>
//                         <Paragraph data-testid="para" variant="sectionPara" sx={{ textAlign: "center" }} {...slideUpAnimation({ delay: .1 })}>Custom tailored to each client's needs we aim to become a one stop solution for all your needs.</Paragraph>
//                     </Box>
//                 </Flex>
//                 <Flex variant="container.centeredFlexBox" my={40} sx={{ position: "relative" }}>
//                     <Box sx={{ ...styles.bubble, top: -125, left: 0 }} data-testid="bgImg" ref={flippedBubble}><Image src='/images/bubbleFlipped.png' /></Box>
//                     <Box sx={{ ...styles.bubble, bottom: -125, right: 0 }} data-testid="bgImg" ref={bubble}><Image src='/images/bubble.png' /></Box>
//                     <Flex sx={styles.productsContainer} {...slideUpAnimation({})}>
//                         <Grid columns={['none', 'none', 'none', 2]} gap={[40, 40, 40, 16]}>
//                             {data.products.map(product => <ProductCard data={product} key={product.id} />)}
//                         </Grid>
//                     </Flex>
//                 </Flex>
//             </Box>
//             <Box as="section" my={100} data-testid="customersSection">
//                 <Flex variant="container.centeredFlexBox">
//                     <Box sx={{ width: ["100%", "100%", "100%", "45%"], zIndex: 1 }}>
//                         <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Tech Stack</Heading>
//                         <Paragraph data-testid="para" variant="sectionPara" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Custom tailored to each client's needs we aim to.</Paragraph>
//                     </Box>
//                 </Flex>
//                 <Flex sx={styles.trustedByCompaniesContainer} variants={staggeredAnims.fadeIn.container} initial="hidden" whileInView="show" viewport={{ once: true }}>
//                     {data.trustedBy.map((company, id) => <Client data={company} key={id} />)}
//                 </Flex>
//             </Box>
//             <ContactForm />
//         </Box>
//     )
// }

// export default Products


// /** @jsxImportSource theme-ui */
// import ContactForm from 'components/ContactForm'
// import { slideUpAnimation, staggeredAnims } from 'components/motionAnimations'
// import { Box, Flex, Grid, Heading, Image, Paragraph } from 'components/motionComponents'
// import { useEffect, useRef } from 'react'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import ProductCard from './ProductCard';
// import Client from './Client';
// gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ overwrite: "auto" });


// const data = {
//     products: [
//         {
//             id: 123,
//             name: "Healthcare Solutions",
//             details: `Built in collaboration with medical professionals, and trained on real-world datasets. Intelligent AI-based diagnosis that examines each scan for multiple complications at once.`,
//             collabtoration: ["Built in collaboration", "Built in collaboration", "Built in collaboration", "Built in collaboration"]
//         },
//         {
//             id: 321,
//             name: "Legal Solutions",
//             details: `An exhaustive, all-in-one solution, built to digitalize the legal sector. Intuitive workflow for both lawyers and clients that simplifies operational procedures.`,
//             collabtoration: ["Built in collaboration", "Built in collaboration", "Built in collaboration", "Built in collaboration"]
//         },
//     ],
//     trustedBy: [
//         { img: "/images/products/mern.png", name: "MERN" },
//         { img: "/images/products/python.png", name: "Python" },
//         { img: "/images/products/adobexd.png", name: "Adobe xd" },
//         { img: "/images/products/aws.png", name: "AWS" },
//         { img: "/images/products/azure.png", name: "Azure" },
//         { img: "/images/products/django.jpg", name: "Django" },
//         { img: "/images/products/figma.png", name: "Figma" },
//         { img: "/images/products/flask.png", name: "Flask" },
//         { img: "/images/products/nextjs.png", name: "Next Js" },
//         { img: "/images/products/oracle.png", name: "Oracle Cloud Infrastructure" },
//         { img: "/images/products/python.png", name: "Python" },
//         { img: "/images/products/redis.png", name: "Redis" },
//         { img: "/images/products/remix.png", name: "Remix Js" },
//         { img: "/images/products/scikitImage.png", name: "Scikit Image" },
//         { img: "/images/products/scikitLearn.png", name: "Scikit Learn" },
//         { img: "/images/products/sql.png", name: "SQL" },
//         { img: "/images/products/tensorflow.png", name: "Tensorflow" },
//     ]
// }

// const styles = {
//     productsContainer: {
//         // backgroundColor: ["unset", "unset", "unset", "rgba(255, 255, 255, 0.1)"],
//         // boxShadow: ["unset", "unset", "unset", "0px 4px 10px -3px rgba(0, 0, 0, 0.25)"],
//         // variant: [null, null, null, "container.glassBackground"],
//         p: [16, 16, 16, 16, 35],
//         width: ["95%", "95%", "95%", "95%", "85%"],
//         // backdropFilter: [null, null, null, "blur(20px)"],
//         zIndex: 1
//     },
//     cardHeading: {
//         variant: 'cardHeading',
//         fontSize: [22, 22, 22, 22, 30],
//     },
//     cardPara: {
//         variant: 'sectionPara',
//         fontSize: [16, 16, 16, 16, 18],
//     },
//     productDetailsBox: {
//         // backgroundColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)", "unset"],
//         // boxShadow: ["0px 4px 10px -3px rgba(0, 0, 0, 0.25)", "0px 4px 10px -3px rgba(0, 0, 0, 0.25)", "0px 4px 10px -3px rgba(0, 0, 0, 0.25)", "unset"],
//         variant: "container.glassBackground",
//         backdropFilter: 'blur(20px)',
//         px: 20,
//         py: [20, 20, 20, null],
//         flexDirection: "column",
//         height: "100%",
//         justifyContent: "space-between",
//         position: "relative",
//         // "&:nth-of-type(odd)": {
//         //     borderRight: [null, null, null, "1px solid white"],
//         // }
//     },
//     exploreBtn: {
//         variant: "button",
//         py: "5px",
//         px: 35,
//         fontSize: 18,
//         border: "1px solid white"
//     },
//     bubble: {
//         position: "absolute",
//         img: {
//             width: [250, 250, 250, 350]
//         }
//     },
//     trustedByCompaniesContainer: {
//         flexWrap: "wrap",
//         width: ["90%", "90%", "90%", "65%"],
//         mx: "auto",
//         variant: "container.centeredFlexBox",
//         my: 35
//     },
//     trustedByCompany: {
//         my: 15,
//         mx: [20, 20, 20, 35],
//         variant: "container.centeredFlexBox"
//     },
//     trustedByCompanyImage: {
//         width: 40,
//         height: 40,
//         mr: 10,
//         img: {
//             width: "100%",
//             height: "100%",
//             m: 0,
//             objectFit: "contain"
//         }
//     }
// }

// const Products = () => {
//     const flippedBubble = useRef()
//     const bubble = useRef()
//     useEffect(() => {
//         const tl = gsap.timeline()
//         tl
//             .to(flippedBubble.current, {
//                 scrollTrigger: {
//                     trigger: flippedBubble.current,
//                     scrub: 1,
//                     start: "top 20%",
//                 },
//                 y: 200,
//             })
//             .to(bubble.current, {
//                 scrollTrigger: {
//                     trigger: bubble.current,
//                     scrub: 1,
//                     start: "top 20%",
//                 },
//                 y: -200
//             })
//     }, [])

//     return (
//         <Box as="main">
//             <Box as="section" data-testid="productsSection">
//                 <Flex variant="container.centeredFlexBox">
//                     <Box sx={{ width: ["100%", "100%", "100%", "45%"], zIndex: 1 }}>
//                         <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Our Products</Heading>
//                         <Paragraph data-testid="para" variant="sectionPara" sx={{ textAlign: "center" }} {...slideUpAnimation({ delay: .1 })}>Custom tailored to each client's needs we aim to become a one stop solution for all your needs.</Paragraph>
//                     </Box>
//                 </Flex>
//                 <Flex variant="container.centeredFlexBox" my={40} sx={{ position: "relative" }}>
//                     <Box sx={{ ...styles.bubble, top: -125, left: 0 }} data-testid="bgImg" ref={flippedBubble}><Image src='/images/bubbleFlipped.png' /></Box>
//                     <Box sx={{ ...styles.bubble, bottom: -125, right: 0 }} data-testid="bgImg" ref={bubble}><Image src='/images/bubble.png' /></Box>
//                     <Flex sx={styles.productsContainer} {...slideUpAnimation({})}>
//                         <Grid columns={['none', 'none', 'none', 2]} gap={[40, 40, 40, 16]}>
//                             {data.products.map(product => <ProductCard data={product} key={product.id} />)}
//                         </Grid>
//                     </Flex>
//                 </Flex>
//             </Box>
//             <Box as="section" my={100} data-testid="customersSection">
//                 <Flex variant="container.centeredFlexBox">
//                     <Box sx={{ width: ["100%", "100%", "100%", "45%"], zIndex: 1 }}>
//                         <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Tech Stack</Heading>
//                         <Paragraph data-testid="para" variant="sectionPara" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Custom tailored to each client's needs we aim to.</Paragraph>
//                     </Box>
//                 </Flex>
//                 <Flex sx={styles.trustedByCompaniesContainer} variants={staggeredAnims.fadeIn.container} initial="hidden" whileInView="show" viewport={{ once: true }}>
//                     {data.trustedBy.map((company, id) => <Client data={company} key={id} />)}
//                 </Flex>
//             </Box>
//             <ContactForm />
//         </Box>
//     )
// }

// export default Products


/** @jsxImportSource theme-ui */

import { useResponsiveValue } from "@theme-ui/match-media"
import Caraousel from "components/Caraousel"
import { useRef, useState, useEffect } from "react"
import { Box, Flex, Grid, Heading, IconButton, Image, Paragraph, Text } from "components/motionComponents"
import {slideLeftAnimation, slideRightAnimation, slideUpAnimation} from "components/motionAnimations"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({overwrite:"auto"});

const styles = {
    heading: {
        textAlign: "center",
        fontWeight: 600,
        color: "white",
        fontSize: 25
    },
    mainBox: { alignItems: "center", py: 40, position: "relative", width: "75%", ml: 100 },
    para: {
        variant: "sectionPara",
        textAlign: "center",
        my: 10,
        fontSize: [16, 16, 16, 18]
    },
    imageBox: {
        alignItems: "center",
        justifyContent: "center",
        // position: "absolute",
        // top: -93,
        // right: -70,
        img: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    },
    learnMoreText: {
        color: "colored",
        fontWeight: 600,
        fontSize: 18,
        fontFamily: "body",
    },
    number: {
        variant: "sectionOrder",
        top: -100,
    },
    carouselContainer: {
        variant: "carousel",
        position: "relative",
        my: 40
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
        }
    },
    carouselBoxNumber: {
        variant: "sectionOrder",
        top: -64,
        left: 0,
        zIndex: -1
    },
    carouselBoxImgContainer: {
        zIndex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        img: {
            width: "100%",
            height: "100%",
            objectFit: "contain"
        }
    }
}

const data = [
    {
        img: "/images/index/health.png",
        name: "Healthcare Solution",
        details: "Built in collaboration with medical professionals, and trained on real-world datasets. Intelligent AI-based diagnosis that examines each scan for multiple complications at once."
    },
    {
        img: "/images/index/lawyer.png",
        name: "Legal Solution",
        details: "An exhaustive, all-in-one solution, built to digitalize the legal sector. Intuitive workflow for both lawyers and clients that simplifies operational procedures."
    },
]

const OurProducts = () => {
    return (
        <Box as="section" py={50} data-testid="ourProductsSection">
            <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Our Products</Heading>
            {useResponsiveValue([<ProductsCarousel />, <ProductsCarousel />, <ProductsCarousel />, <ProductsGrid/>])}
        </Box>
    )
}

const ProductsGrid = () => {
    return <Box sx={{ width: ["90%", "90%", "90%", "80%", "70%"], mx: "auto" }}>
    {data.map((el, index) => <Product key={index} data={el} index={index}/>)}
    </Box>
}

const Product = ({data, index}) => {
    const numberRef = useRef()
    const imageRef = useRef()
    useEffect(() => {
        const tl = gsap.timeline()
        tl.add("start").to(numberRef.current, {
            scrollTrigger: {
                scrub: 1,
                start: "top 20%",
                trigger: numberRef.current
            },
            y: -100,
            duration: .1,
            lazy: false,
        }, "start")
        .to(imageRef.current, {
            scrollTrigger: {
                scrub: 1,
                start: "bottom bottom",
                trigger: imageRef.current
            },
            y: -100,
            duration: .1,
            lazy: false,
        }, "start")
        return () => tl.kill()
    }, [])

    const numberTextProps = {
        sx: (index+1)%2 ? { ...styles.number, left: 0} : {...styles.number, right: 0}, 
        anim: (index+1)%2 ? { ...slideLeftAnimation({})} : {...slideRightAnimation({})}
    }

    return <Grid columns={(index + 1)%2 ? "2fr 1fr" : "1fr 2fr"} {...slideUpAnimation({})} data-testid="product">
    <Flex sx={{order: (index + 1)%2 ? 1 : -1, justifyContent: "space-between", zIndex: 1}} {...slideUpAnimation({})} ref={imageRef}>
        <Image src={data.img}/>
    </Flex>
    <Flex sx={{ justifyContent: "center", alignItems: "center", position: "relative", zIndex: 2 }}>
        <Text {...numberTextProps} ref={numberRef} data-testid="productNumber">{index + 1}</Text>
        <Box sx={{ zIndex: 1, width: "90%" }}>
            <Heading data-testid="productHeading" sx={styles.heading} {...slideUpAnimation({})}>{data.name}</Heading>
            <Paragraph data-testid="productPara" sx={styles.para} {...slideUpAnimation({delay: .1})}>{data.details}</Paragraph>
            <Flex sx={{ justifyContent: "center" }} {...slideUpAnimation({delay: .2})}><Text sx={styles.learnMoreText}>Learn More</Text></Flex>
        </Box>
    </Flex>
</Grid>
}

const ProductsCarousel = () => {
    const carouselRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(1)
    return <Box sx={styles.carouselContainer} data-testid="productsCarousel">
        <IconButton onClick={() => carouselRef.current.slickPrev()} sx={{ ...styles.arrowIconBtn, left: 10, transform: "rotate(180deg)" }}><Image src="/icons/arrowRight-colored.svg" /></IconButton>
        <IconButton onClick={() => carouselRef.current.slickNext()} sx={{ ...styles.arrowIconBtn, right: 10 }}><Image src="/icons/arrowRight-colored.svg" /></IconButton>
        <Caraousel dots={false} carouselRef={carouselRef} carouselChngFunc={setCurrentIndex}>
            {data.map((product, i) => <Box key={i}><Grid columns='1fr 2fr' gap={0} data-testid="productCarouselBox">
                <Box sx={{ position: "relative" }}>
                    <Text data-testid="carousel-number" sx={styles.carouselBoxNumber}>{i + 1}</Text>
                    <Flex sx={styles.carouselBoxImgContainer}>
                        <Image data-testid="carousel-img" src={product.img} alt="Lawyer"/>
                    </Flex>
                </Box>
                <Box sx={{ zIndex: 1 }}>
                    <Heading data-testid="carousel-heading" sx={{ ...styles.heading, textAlign: "start" }}>{product.name}</Heading>
                    <Paragraph data-testid="carousel-para" variant="sectionPara" sx={{fontSize: [16, 16, 16, 18]}} my={10}>{product.details}</Paragraph>
                    <Flex><Text sx={styles.learnMoreText}>Learn More</Text></Flex>
                </Box>
            </Grid>
            </Box>)}
        </Caraousel>
        <Flex sx={{ justifyContent: "center", mt: 20 }}><Paragraph variant="sectionPara">{currentIndex}/{data.length}</Paragraph> </Flex>
    </Box>
}

export default OurProducts

/*
import { useResponsiveValue } from "@theme-ui/match-media"
import Caraousel from "components/Caraousel"
import { useRef, useState } from "react"
import { Box, Flex, Grid, Heading, IconButton, Image, Paragraph, Text } from "theme-ui"
const styles = {
    heading: {
        textAlign: "center",
        fontWeight: 600,
        color: "white",
        fontSize: 25
    },
    mainBox: { alignItems: "center", py: 40, position: "relative", width: "75%", ml: 100 },
    para: {
        variant: "sectionPara",
        textAlign: "center",
        my: 10,
        fontSize: [16, 16, 16, 18]
    },
    imageBox: {
        alignItems: "center",
        justifyContent: "center",
        // position: "absolute",
        // top: -93,
        // right: -70,
        img: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    },
    learnMoreText: {
        color: "colored",
        fontWeight: 600,
        fontSize: 18,
        fontFamily: "body",
    },
    number: {
        variant: "sectionOrder",
        top: -100,
        left: 60
    },
    number2: {
        left: "unset",
        right: 0,
        top: 0
    },
    carouselContainer: {
        variant: "carousel",
        position: "relative",
        my: 40
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
        }
    },
    carouselBoxNumber: {
        variant: "sectionOrder",
        top: -64,
        left: 0,
        zIndex: -1
    },
    carouselBoxImgContainer: {
        zIndex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        img: {
            width: "100%",
            height: "100%",
            objectFit: "contain"
        }
    }
}
const data = [
    {
        img: "/images/index/health.png",
        name: "Healthcare Solution",
        details: "Built in collaboration with medical professionals, and trained on real-world datasets. Intelligent AI-based diagnosis that examines each scan for multiple complications at once."
    },
    {
        img: "/images/index/lawyer.png",
        name: "Legal Solution",
        details: "An exhaustive, all-in-one solution, built to digitalize the legal sector. Intuitive workflow for both lawyers and clients that simplifies operational procedures."
    },
]
const OurProducts = () => {
    return (
        <Box as="section" py={50}>
            <Heading variant="sectionHeading" sx={{ textAlign: "center" }}>Our Products</Heading>
            {useResponsiveValue([<ProductsCarousel />, <ProductsCarousel />, <ProductsCarousel />,
            <Box sx={{ width: ["90%", "90%", "90%", "80%", "70%"], mx: "auto" }}>
                <Grid columns="2fr 1fr">
                    <Flex sx={styles.mainBox}>
                        <Text sx={styles.number}>1</Text>
                        <Box sx={{ zIndex: 1 }}>
                            <Heading sx={styles.heading}>{data[0].name}</Heading>
                            <Paragraph sx={styles.para}>{data[0].details}</Paragraph>
                            <Flex sx={{ justifyContent: "center" }}><Text sx={styles.learnMoreText}>Learn More</Text></Flex>
                        </Box>
                    </Flex>
                    <Flex sx={styles.imageBox}>
                        <Image src={data[0].img} />
                    </Flex>
                </Grid>
                <Grid columns="1fr 2fr">
                    <Flex>
                        <Image src={data[1].img} alt="Lawyer" />
                    </Flex>
                    <Flex sx={{ justifyContent: "center", alignItems: "center", position: "relative" }}>
                        <Text sx={{ ...styles.number, ...styles.number2 }}>2</Text>
                        <Box sx={{ zIndex: 1, width: "90%" }}>
                            <Heading sx={styles.heading}>{data[1].name}</Heading>
                            <Paragraph sx={styles.para}>{data[1].details}</Paragraph>
                            <Flex sx={{ justifyContent: "center" }}><Text sx={styles.learnMoreText}>Learn More</Text></Flex>
                        </Box>
                    </Flex>
                </Grid>
            </Box>
            ])}
        </Box>
    )
}
const ProductsCarousel = () => {
    const carouselRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(1)
    return <Box sx={styles.carouselContainer}>
        <IconButton onClick={() => carouselRef.current.slickPrev()} sx={{ ...styles.arrowIconBtn, left: 10 }}><Image src="/icons/arrowLeft.svg" /></IconButton>
        <IconButton onClick={() => carouselRef.current.slickNext()} sx={{ ...styles.arrowIconBtn, right: 10 }}><Image src="/icons/arrowRight-colored.svg" /></IconButton>
        <Caraousel dots={false} carouselRef={carouselRef} carouselChngFunc={setCurrentIndex}>
            {data.map((product, i) => <Box><Grid key={i} columns='1fr 2fr'>
                <Box sx={{ position: "relative" }}>
                    <Text sx={styles.carouselBoxNumber}>{i + 1}</Text>
                    <Flex sx={styles.carouselBoxImgContainer}>
                        <Image src={product.img} alt="Lawyer"/>
                    </Flex>
                </Box>
                <Box sx={{ zIndex: 1 }}>
                    <Heading sx={{ ...styles.heading, textAlign: "start" }}>{product.name}</Heading>
                    <Paragraph variant="sectionPara" sx={{fontSize: [16, 16, 16, 18]}} my={10}>{product.details}</Paragraph>
                    <Flex><Text sx={styles.learnMoreText}>Learn More</Text></Flex>
                </Box>
            </Grid>
            </Box>)}
        </Caraousel>
        <Flex sx={{ justifyContent: "center", mt: 20 }}><Paragraph variant="sectionPara">{currentIndex}/{data.length}</Paragraph> </Flex>
    </Box>
}
export default OurProducts
*/