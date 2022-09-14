import { AnimatePresence} from 'framer-motion'
import { Box, Button, Image, Paragraph } from 'components/motionComponents'

const styles = {
    button: {
        variant: "container.glassBackground",
        outline: "none",
        border: 0,
        borderRadius: 0,
        fontSize: 20,
        p: 10,
        width: ["60%", "50%", "50%", "50%", "70%"],
        color: "white",
        fontFamily: "body",
        display: "flex",
        alignItems: "center",
        fontWeight: 300,
        cursor: "pointer",
        transition: ".2s",
        zIndex: 1,
        "&.active": {
            width: ["95%", "95%", "65%", "60%", "90%"],
            backgroundColor: "deepBlue",
            fontWeight: 500,
        }
    },
    imgInStrip: {
        width: 50, height: 50, mr: "5px",
        img: { width: "100%", height: "100%", mx: 0 },
    },
}

const ButtonComponent = ({setSelectedObj, selectedObj, data, direction}) => {
    const variants = {
        initial: { scale: 0, display: "none", transition: {delay: .2 } },
        active: { scale: 1, display: "block", transition: {delay: .2 } },
        exit: {
            scale: 0,
            display: "none",
            transition: { delay: -0.1 }
        }
    };

    return (
        <Button sx={{ ...styles.button, flexDirection: direction || "unset" }} onClick={() => setSelectedObj(data)} className={selectedObj.id === data.id ? "active" : ""}>
            <Box sx={styles.imgInStrip}>
                <Image src={data.imgStrip} alt={data.name} />
            </Box>
            <Paragraph data-testid="member-name" variant="sectionPara" mx={["5px", 10, 20]}>{data.name}</Paragraph>
            <AnimatePresence>
                {selectedObj.id === data.id &&
                    <Box mx="5px" variants={variants} initial={"initial"} animate={"active"} exit={"exit"} transition={{ duration: .1, delay: .2 }}>
                        <Paragraph variant="sectionPara" data-testid="member-position">({data.position})</Paragraph>
                    </Box>
                }
            </AnimatePresence>
        </Button>
    )
}

export default ButtonComponent