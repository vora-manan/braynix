// /** @jsxImportSource theme-ui */
// import { AnimatePresence } from "framer-motion"
// import { Box, Grid, Heading, Image, Paragraph, Text } from "components/motionComponents"
// import { staggeredAnims } from "components/motionAnimations"

// const styles = {
//     heading: {
//         color: "white",
//         fontSize: 28,
//         fontWeight: 500,
//         position: "relative",
//         transition: ".1s",
//         pb: "5px",
//         display: "inline-block",
//         cursor: "pointer",
//         "&::before": {
//             content: "''",
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             width: "70%",
//             transition: ".1s",
//             height: "3px",
//             backgroundColor: "white",
//             borderRadius: 20
//         },
//         "&.active": {
//             color: "colored",
//         },
//         "&.active::before": {
//             backgroundColor: "colored"
//         }
//     },
//     para: {
//         variant: "sectionPara",
//         mt: 30,
//         width: ["100%", "100%", "100%", "100%", "55%"]
//     },
//     jobDetailText: {
//         fontSize: [16, 16, 17, 17, 18]
//     }
// }

// const Acordian = ({ data: { type, detail, positions }, isSelected, selectOpening }) => {
//     const closed = `polygon(0 0, 100% 0, 100% 0, 0 0)`
//     const open = `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
//     return (
//         <Box layout my={40} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} data-testid="jobOpening-accordian">
//             <Box layout onClick={() => selectOpening(type)} data-testid="jobOpening-accordianTitle">
//                 <Heading data-testid="heading" sx={styles.heading} className={isSelected ? "active" : ""}>{type}</Heading>
//             </Box>
//             <AnimatePresence exitBeforeEnter>
//                 {isSelected ?
//                     <Box initial={{ clipPath: closed }} animate={{ clipPath: open }} exit={{ clipPath: closed }} layout data-testid="jobOpening-details">
//                         <Paragraph data-testid="jobOpening-para" sx={styles.para}>{detail}</Paragraph>
//                         <Box variants={staggeredAnims.fadeIn.container} initial="hidden" whileInView="show" viewport={{once: true}}>
//                             {positions.map((position, index) => <Grid key={index} columns="1fr 2fr 1fr" my={30} variants={staggeredAnims.fadeIn.listItem} data-testid="jobOpening-position-detail">
//                                 <Text data-testid="jobType" variant="sectionPara" sx={styles.jobDetailText}>{position.job}</Text>
//                                 <Text data-testid="jobLocation" variant="sectionPara" sx={styles.jobDetailText}>{position.location}</Text>
//                                 <Image src="/icons/arrow-right.svg" alt="arrow-right" sx={{ justifySelf: "end" }} />
//                             </Grid>)}
//                         </Box>
//                     </Box>
//                     : <Box></Box>}
//             </AnimatePresence>
//         </Box>
//     )
// }

// export default Acordian


/** @jsxImportSource theme-ui */
import { AnimatePresence } from "framer-motion"
import { Link } from 'theme-ui'
import { Box, Grid, Heading, Image, Paragraph, Text } from "components/motionComponents"
import { staggeredAnims } from "components/motionAnimations"

const styles = {
    heading: {
        color: "white",
        fontSize: 28,
        fontWeight: 500,
        position: "relative",
        transition: ".1s",
        pb: "5px",
        display: "inline-block",
        cursor: "pointer",
        "&::before": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "70%",
            transition: ".1s",
            height: "3px",
            backgroundColor: "white",
            borderRadius: 20
        },
        "&.active": {
            color: "colored",
        },
        "&.active::before": {
            backgroundColor: "colored"
        }
    },
    para: {
        variant: "sectionPara",
        mt: 30,
        width: ["100%", "100%", "100%", "100%", "55%"]
    },
    jobDetailText: {
        fontSize: [16, 16, 17, 17, 18]
    }
}

const Acordian = ({ data: { type, detail, positions }, isSelected, selectOpening }) => {
    const closed = `polygon(0 0, 100% 0, 100% 0, 0 0)`
    const open = `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
    return (
        <Box layout my={40} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} data-testid="jobOpening-accordian">
            <Box layout onClick={() => selectOpening(type)} data-testid="jobOpening-accordianTitle">
                <Heading data-testid="heading" sx={styles.heading} className={isSelected ? "active" : ""}>{type}</Heading>
            </Box>
            <AnimatePresence exitBeforeEnter>
                {isSelected ?
                    <Box initial={{ clipPath: closed }} animate={{ clipPath: open }} exit={{ clipPath: closed }} layout data-testid="jobOpening-details">
                        <Paragraph data-testid="jobOpening-para" sx={styles.para}>{detail}</Paragraph>
                        <Box variants={staggeredAnims.fadeIn.container} initial="hidden" whileInView="show" viewport={{once: true}}>
                            {positions.map((position, index) => <Grid key={index} columns="1fr 2fr 1fr" my={30} variants={staggeredAnims.fadeIn.listItem} data-testid="jobOpening-position-detail">
                                <Text data-testid="jobType" variant="sectionPara" sx={styles.jobDetailText}>{position.job}</Text>
                                <Text data-testid="jobLocation" variant="sectionPara" sx={styles.jobDetailText}>{position.location}</Text>
                                <Link href="#"><Image src="/icons/arrow-right.svg" alt="arrow-right" sx={{ justifySelf: "end" }} /></Link>
                            </Grid>)}
                        </Box>
                    </Box>
                    : <Box></Box>}
            </AnimatePresence>
        </Box>
    )
}

export default Acordian