import { useResponsiveValue } from '@theme-ui/match-media'
import { slideUpAnimation } from 'components/motionAnimations'
import { Box, Flex, Heading, Paragraph } from 'components/motionComponents'
import Desktop from './Desktop'
import Responsive from './Responsive'

const WhoAreWe = ({moto}) => {
    return (
        <Box as="main" data-testid="whoAreWeSection">
            <Flex variant="container.centeredFlexBox" sx={{zIndex: 1}}>
                <Box sx={{ width: ["100%", "100%", "100%", "45%"], zIndex: 1 }}>
                    <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Who are we?</Heading>
                    <Paragraph data-testid="para" variant="sectionPara" sx={{ textAlign: "center" }} {...slideUpAnimation({delay: .1})}>Custom tailored to each client's needs we aim to become a one stop solution for all your needs.</Paragraph>
                </Box>
            </Flex>
            {useResponsiveValue([<Responsive data={moto}/>, <Responsive data={moto}/>, <Responsive data={moto}/>, <Responsive data={moto}/>, <Desktop data={moto}/>])}
        </Box>
    )
}
export default WhoAreWe