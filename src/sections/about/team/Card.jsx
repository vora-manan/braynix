import { Box, Flex, Heading, Image, Paragraph, Text } from 'components/motionComponents'

const styles = {
    card: {
        variant: "container.glassBackground",
        width: ["95%", "95%", "95%", "70%"],
        zIndex: 1
    },
    memberCardImgBox: {
        width: ["100%", "100%", "70%"],
        img: {
            width: "100%",
            height: "100%",
        }
    },
    memberCardDetailBox:{flexDirection: "column", p: ["5px", "5px", "5px", 20], alignItems: "center", justifyContent: "center"},
}

const Card = ({data: {id, img, name, position, description}, slideDirection}) => {
    const variants = {
        initial: {x: slideDirection || "-100vw"},
        animate: {x: 0},
        // exit: {x: slideDirection || "-100vw"},
    }
    return (
        <Flex key={id} sx={styles.card} variants={variants} initial="initial" animate="animate" exit="exit" transition={{duration: .2}} data-testid="card">
            <Box sx={styles.memberCardImgBox}>
                <Image src={img} alt={name}/>
            </Box>
            <Flex sx={styles.memberCardDetailBox}>
                <Heading variant='cardHeading'>{name}</Heading>
                <Flex my={[0, 0, 0, 10]} variant="container.centeredFlexBox"><Text variant='sectionPara' data-testid="memberCard-Role">({position})</Text></Flex>
                <Paragraph data-testid="memberCard-description" variant='sectionPara' sx={{width: "95%", mx: "auto", textAlign: "center"}}>{description}</Paragraph>
            </Flex>
        </Flex>
    )
}

export default Card