/** @jsxImportSource theme-ui */
import { Box, Flex, Heading, Paragraph } from "components/motionComponents"
import Accordian from './Acordian'
import { slideUpAnimation } from "components/motionAnimations"
import { useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DetailsGrid from "./DetailsGrid";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({overwrite:"auto"});


const data = {
    grid: [
        {
            img: "/images/services/chatbot.png",
            top: "",
            heading: "Create a world where anyone can belong",
            detail: `Join us in our expedition to make innovative solutions that establish abstract connections among machines and people, enabling organisations to reap the benefits of technology. It's a venturesome, amazingly remunerating mission that our undeniably assorted group is devoted to accomplishing.`
        },
        {
            img: "/images/services/chatbot.png",
            top: "",
            heading: "Be your best self",
            detail: `At Braynix AI we believe in open and honest communication, genuine feedback, and building connections. As our colleague, you'll work hard and take ownership wearing numerous caps, but with the help of companions with different foundations, encounters, and points of view.`,
            bulletPoints: ["Experience Start-up culture and built network", '1:1 mentoring for developing relevant skills']
        },
    ],
    openings: [
        {
            type: "Design",
            detail: `If you have a keen eye for detail, enjoy asking questions to the point of annoyance, can eat a bowl full of ramen in under 2 minutes, and know how to recite the alphabet backwards, submit your portfolio now!`,
            positions: [
                {
                    job: "Design Recruiter",
                    location: "Chennai, Mumbai, Bangalore"
                },
                {
                    job: "Illustrator & Animator",
                    location: "Bangalore"
                },
                {
                    job: "Sr. UI Designer",
                    location: "Bangalore, Chennai, Mumbai, Vietnam"
                },
                {
                    job: "Sr. UX Designer",
                    location: "Bangalore, Mumbai, Chennai, Vietnam"
                },
                {
                    job: "Lead - UI Designer",
                    location: "Bangalore, Mumbai, Chennai"
                },
                {
                    job: "UX Researcher",
                    location: "Bangalore"
                },
                {
                    job: "Lead - UX Designer",
                    location: "Bangalore, Chennai, Vietnam"
                },
            ]
        },
        {
            type: "Technology",
            detail: `If you have a keen eye for detail, enjoy asking questions to the point of annoyance, can eat a bowl full of ramen in under 2 minutes, and know how to recite the alphabet backwards, submit your portfolio now!`,
            positions: [
                {
                    job: "Design Recruiter",
                    location: "Chennai, Mumbai, Bangalore"
                },
                {
                    job: "Illustrator & Animator",
                    location: "Bangalore"
                },
                {
                    job: "Sr. UI Designer",
                    location: "Bangalore, Chennai, Mumbai, Vietnam"
                },
                {
                    job: "Sr. UX Designer",
                    location: "Bangalore, Mumbai, Chennai, Vietnam"
                },
                {
                    job: "Lead - UI Designer",
                    location: "Bangalore, Mumbai, Chennai"
                },
                {
                    job: "UX Researcher",
                    location: "Bangalore"
                },
                {
                    job: "Lead - UX Designer",
                    location: "Bangalore, Chennai, Vietnam"
                },
            ]
        },
        {
            type: "Sales & Marketing",
            detail: `If you have a keen eye for detail, enjoy asking questions to the point of annoyance, can eat a bowl full of ramen in under 2 minutes, and know how to recite the alphabet backwards, submit your portfolio now!`,
            positions: [
                {
                    job: "Design Recruiter",
                    location: "Chennai, Mumbai, Bangalore"
                },
                {
                    job: "Illustrator & Animator",
                    location: "Bangalore"
                },
                {
                    job: "Sr. UI Designer",
                    location: "Bangalore, Chennai, Mumbai, Vietnam"
                },
                {
                    job: "Sr. UX Designer",
                    location: "Bangalore, Mumbai, Chennai, Vietnam"
                },
                {
                    job: "Lead - UI Designer",
                    location: "Bangalore, Mumbai, Chennai"
                },
                {
                    job: "UX Researcher",
                    location: "Bangalore"
                },
                {
                    job: "Lead - UX Designer",
                    location: "Bangalore, Chennai, Vietnam"
                },
            ]
        },
    ]
}
const Careers = () => {
    const [selectedOpening, setSelectedOpening] = useState(data.openings[0].type)
    return (
        <Box as="section" sx={{ width: "90%", mx: "auto" }}>
            <Flex variant="container.centeredFlexBox" data-testid="pageHeadingContainer">
                <Box sx={{ width: ["100%", "100%", "100%", "45%"], zIndex: 1 }}>
                    <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Careers</Heading>
                    <Paragraph data-testid="para" variant="sectionPara" sx={{ textAlign: "center" }} {...slideUpAnimation({delay: .1})}>Join our squad and become a part of creating amazing technology and tranforming human lives.</Paragraph>
                </Box>
            </Flex>
            <Box my={60}>
                {data.grid.map((data, index) => <DetailsGrid key={index} data={data} index={index}/>)}
            </Box>
            <Box mb={180} data-testid="jobOpenings">
                <Flex variant="container.centeredFlexBox">
                    <Box sx={{ width: ["90%", "90%", "90%", "60%"] }} data-testid="jobOpeningsHeadingContainer">
                        <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Job openings</Heading>
                        <Paragraph data-testid="para" variant="sectionPara" sx={{ textAlign: "center", whiteSpace: "pre-wrap" }} {...slideUpAnimation({delay: .1})}>{'If you have a sharp eye for detail, appreciate posing questions to the point of annoyance, can google about things and appreciate a hustling climate then we are here to have a chat about how you can collaborate with our vision.'}</Paragraph>
                    </Box>
                </Flex>
                <Box sx={{ width: ["100%", "100%", "100%", "80%"], mx: "auto" }}>
                    {data.openings.map((opening, index) => <Accordian data={opening} key={index} isSelected={selectedOpening === opening.type} selectOpening={setSelectedOpening} />)}
                </Box>
            </Box>
        </Box>
    )
}


export default Careers