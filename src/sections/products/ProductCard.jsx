import { Box, Button, Flex, Heading, Paragraph } from 'components/motionComponents'

const styles = {
    cardHeading: {
        variant: 'cardHeading',
        fontSize: [22, 22, 22, 22, 30],
    },
    cardPara: {
        variant: 'sectionPara',
        fontSize: [16, 16, 16, 16, 18],
    },
    productDetailsBox: {
        backgroundColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)", "unset"],
        boxShadow: ["0px 4px 10px -3px rgba(0, 0, 0, 0.25)", "0px 4px 10px -3px rgba(0, 0, 0, 0.25)", "0px 4px 10px -3px rgba(0, 0, 0, 0.25)", "unset"],
        backdropFilter: ["blur(20px)", "blur(20px)", "blur(20px)", 'unset'],
        px: 20,
        py: [20, 20, 20, null],
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        position: "relative",
        "&:nth-of-type(odd)": {
            borderRight: [null, null, null, "1px solid white"],
        }
    },
    exploreBtn: {
        variant: "button",
        py: "5px",
        px: 35,
        fontSize: 18,
        border: "1px solid white"
    },
}


const ProductCard = ({data: {name, details, collabtoration}}) => {
    return (
        <Flex sx={styles.productDetailsBox} data-testid="prductDetail">
            <Box>
                <Heading as="h4" sx={styles.cardHeading}>{name}</Heading>
                <Paragraph data-testid="productCard-detail" as="p" sx={styles.cardPara} my={10}>{details}</Paragraph>
            </Box>
            <Box>
                <Box>
                    {collabtoration.map((el, ind) => <Flex data-testid="productCard-coll" my={15} key={ind}><Box variant='container.circledImg'></Box> <Paragraph variant='sectionPara'>{el}</Paragraph></Flex>)}
                </Box>
                <Flex variant="container.centeredFlexBox"><Button sx={styles.exploreBtn}>Explore More</Button></Flex>
            </Box>
        </Flex>
    )
}

export default ProductCard