import { staggeredAnims } from 'components/motionAnimations'
import { Flex, Box, Image, Paragraph } from 'components/motionComponents'

const styles = {
    trustedByCompany: {
        my: 15,
        mx: [20, 20, 20, 35],
        variant: "container.centeredFlexBox"
    },
    trustedByCompanyImage: {
        width: 40,
        height: 40,
        mr: 10,
        img: {
            width: "100%",
            height: "100%",
            m: 0,
            objectFit: "contain"
        }
    }
}

const Client = ({data: {img, name}}) => {
    return (
        <Flex variants={staggeredAnims.fadeIn.listItem} sx={styles.trustedByCompany} data-testid="customerBox">
            <Box sx={styles.trustedByCompanyImage}><Image src={img} /></Box>
            <Paragraph data-testid="clientName" variant="sectionPara">{name}</Paragraph>
        </Flex>
    )
}

export default Client