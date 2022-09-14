import { Box, Flex, Grid, Heading, Paragraph } from 'components/motionComponents'

const styles = {
    card: {
        variant: "container.glassBackground",
        width: ["95%", "95%", "95%", "70%", "90%", "70%"],
        py: [15, 15, 15, 40],
        px: 20
    },
}

const Card = ({ data: { id, name, details, collabtoration }, slideDirection }) => {
    const variants = {
        initial: { x: slideDirection || "100vw" },
        animate: { x: 0 },
        // exit: { x: slideDirection || "100vw" },
    }
    const transition = {
        duration: 0.4,
        ease: 'easeInOut',
        type: 'tween',
      }
    return (
        <Box key={id} sx={styles.card} variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: .2 }} data-testid="card">
            <Heading as="h3" variant='cardHeading'>{name}</Heading>
            <Paragraph data-testid="card-details" variant='sectionPara' sx={{ width: "95%", mx: "auto", my: 20 }}>{details}</Paragraph>
            <Grid columns={["none", 'none', 'none', 2]}>
                {collabtoration.map((el, ind) => <Flex key={ind}><Box data-testid="card-coll-array" variant='container.circledImg'></Box> <Paragraph variant='sectionPara'>{el}</Paragraph></Flex>)}
            </Grid>
        </Box>
    )
}

export default Card