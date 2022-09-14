// import { Box, Grid, Heading, Paragraph } from "theme-ui";
// import Testimonial from "components/Testimonial";
// // import stroke1 from "assets/testimoniaStrokeBlue.png";
// // import stroke2 from "assets/testimoniaStrokeGreen.png";
// // import stroke3 from "assets/testimoniaStrokePurple.png";

// const TESTIMONIALS_DATA = [
//     {
//         image: "/images/index/testimonials/1.png",
//         color: "#1ec198",
//         heading: "Aarti Ahuja",
//         designation: "Business Owner",
//         // stroke: stroke2,
//         content:
//             "They are doing amazing job with hundred percent customer satisfaction, Love their work and would like to work with them again.",
//     },
//     {
//         image: "/images/index/testimonials/2.png",
//         heading: "Dr. Daniyal Khan",
//         color: "#8655b9",
//         designation: "ENT Specialist",
//         // stroke: stroke3,
//         content:
//             "They Leverage agile frameworks to provide a robust synopsis for high level overviews.",
//     },
//     {
//         image: "/images/index/testimonials/3.png",
//         heading: "Joseph D'Souza ",
//         color: "#479ef2",
//         designation: "Marketing Manager",
//         // stroke: stroke1,
//         content:
//             "They bring to the table win-win survival strategies to ensure proactive domination.",
//     },
// ];

// const Testimonials = () => {
//     return (
//         <Box as="section" id="testimonials" sx={styles.testimonials}>
//             <Box sx={{ width: ["90%", "90%", "90%", "40%"], zIndex: 1, mx: "auto" }}>
//                 <Heading
//                     variant="sectionHeading"
//                     sx={{ textAlign: "center" }}
//                 >
//                     Testimonials
//                 </Heading>
//                 <Paragraph
//                     variant="sectionPara"
//                     sx={{ textAlign: "center" }}
//                 >
//                     Why our customers love us.
//                 </Paragraph>
//             </Box>
//             <Grid gap={4} columns={[1, 1, 2, 2, 3, 3, 3]} sx={{ my: 30 }}>
//                 {TESTIMONIALS_DATA?.map((item, index) => <Testimonial key={index} {...item} num={index + 1}/>)}
//             </Grid>
//         </Box>
//     );
// };

// export default Testimonials;

// const styles = {
//     testimonials: {
//         pt: [15, 15, 15, 30],
//         pb: [15, 15, 15, 30],
//         zIndex: 5
//     }
// };



import Caraousel from "components/Caraousel";
import { Box, Flex, Heading, IconButton, Image, Paragraph } from "components/motionComponents";
import {Testimonial,TestimonialForMobile} from "components/Testimonial";
import { useRef, useState } from "react";
import { useResponsiveValue } from "@theme-ui/match-media"
// import stroke1 from "assets/testimoniaStrokeBlue.png";
// import stroke2 from "assets/testimoniaStrokeGreen.png";
// import stroke3 from "assets/testimoniaStrokePurple.png";

const TESTIMONIALS_DATA = [
    {
        image: "/images/index/testimonials/1.png",
        color: "#1ec198",
        heading: "Aarti Ahuja",
        designation: "Business Owner",
        // stroke: stroke2,
        content:
            "They are doing amazing job with hundred percent customer satisfaction, Love their work and would like to work with them again.",
    },
    {
        image: "/images/index/testimonials/2.png",
        heading: "Dr. Daniyal Khan",
        color: "#8655b9",
        designation: "ENT Specialist",
        // stroke: stroke3,
        content:
            "They Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    },
    {
        image: "/images/index/testimonials/3.png",
        heading: "Joseph D'Souza ",
        color: "#479ef2",
        designation: "Marketing Manager",
        // stroke: stroke1,
        content:
            "They bring to the table win-win survival strategies to ensure proactive domination.",
    },
];

const Testimonials = () => {
    return (
        <Box as="section" id="testimonials" sx={styles.testimonials}>
            <Box sx={{ width: ["90%", "90%", "90%", "40%"], zIndex: 1, mx: "auto" }}>
                <Heading
                    variant="sectionHeading"
                    sx={{ textAlign: "center" }}
                >
                    Testimonials
                </Heading>
                <Paragraph
                    variant="sectionPara"
                    sx={{ textAlign: "center" }}
                >
                    Why our customers love us.
                </Paragraph>
            </Box>
            <TestimonialCarouel/>
        </Box>
    );
};

export default Testimonials;

const styles = {
    testimonials: {
        pt: [15, 15, 15, 30],
        pb: [15, 15, 15, 30],
        zIndex: 5
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
    }
};

const TestimonialCarouel = () => {
    const carouselRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(1)
    return <Box sx={styles.carouselContainer} data-testid="productsCarousel">
        <IconButton onClick={() => carouselRef.current.slickPrev()} sx={{ ...styles.arrowIconBtn, left: 10, transform: "rotate(180deg)" }}><Image src="/icons/arrowRight-colored.svg" /></IconButton>
        <IconButton onClick={() => carouselRef.current.slickNext()} sx={{ ...styles.arrowIconBtn, right: 10 }}><Image src="/icons/arrowRight-colored.svg" /></IconButton>
        <Caraousel dots={false} carouselRef={carouselRef} carouselChngFunc={setCurrentIndex}>
            {TESTIMONIALS_DATA?.map((item, index) => <Box key={index} sx={{ alignItems: "center", justifyContent: "center" }}>
            {useResponsiveValue([<TestimonialForMobile key={index} {...item} num={index + 1} />, <TestimonialForMobile key={index} {...item} num={index + 1}  />, <TestimonialForMobile key={index} {...item} num={index + 1} />, <Testimonial key={index} {...item} num={index + 1} />])}
        </Box>)}
        </Caraousel>
        <Flex sx={{ justifyContent: "center", mt: 20 }}><Paragraph variant="sectionPara">{currentIndex}/{TESTIMONIALS_DATA.length}</Paragraph> </Flex>
    </Box>
}
