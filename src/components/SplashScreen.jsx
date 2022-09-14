import Logo from './Logo'
import { Box, Flex } from './motionComponents'

const styles = {
  splashScreen: {
    variant: "container.centeredFlexBox",
    position: 'fixed',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    ".logo": {
      pointerEvents: "none"
    }
  }
}

const SplashScreen = () => {
  return (
    <Box sx={styles.splashScreen} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3, ease: "easeInOut"}}>
      <Flex variant="container.centeredFlexBox" sx={{width: "100%", height: "100%", flexDirection: "column"}}>
        <Box className="lds-roller" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .1 }}><Box></Box><Box></Box><Box></Box><Box></Box><Box></Box><Box></Box><Box></Box><Box></Box></Box>
        <Flex variant="container.centeredFlexBox" my={10}><Logo /></Flex>
      </Flex>
    </Box>
  )
}

export default SplashScreen