import ContactForm from 'components/ContactForm'
import { Box} from 'theme-ui'
import Team from './team/Index'
import WhoAreWe from './whoAreWe/Index'

const data = {
    moto: [
        {
            id: 123,
            name: "Our Mission",
            details: `To become the world's largest customer centric AI company with products flourishing in myriad of streams by determining the business requirements and developing solutions to cater its needs.`,
            collabtoration: ["Built in collaboration", "Built in collaboration", "Built in collaboration", "Built in collaboration"]
        },
        {
            id: 321,
            name: "Our Vision",
            details: `Braynix AI envisions a world where AI gives a human touch to industries beyond the boundaries of software and hardware congruency. We look forward to serve the world with technology that enhances the life of users without compromising on data privacy and security thereby promoting the ethical and progressive use of technology.`,
            collabtoration: ["Built in collaboration", "Built in collaboration", "Built in collaboration", "Built in collaboration"]
        },
    ],
    team: [
        {
            id: 123,
            img: "/images/about/1.jpg",
            imgStrip:"/images/about/1.jpg",
            name: "Amitabh Das",
            position: "The visionary",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        // {
        //     id: 456,
        //     img: "/images/about/2.png",
        //     imgStrip:"/images/about/2_strip.png",
        //     name: "Shubham Muthreja",
        //     position: "The tech guy",
        //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        // },
        {
            id: 789,
            img: "/images/about/3.jpg",
            imgStrip:"/images/about/3.jpg",
            name: "Suruchi",
            position: "HR",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        },
    ]
}

const About = () => {
    return (
        <Box as="section" sx={{overflow: "hidden"}}>
            <WhoAreWe moto={data.moto}/>
            <Team data={data.team}/>
            <ContactForm/>
        </Box>
    )
}

export default About