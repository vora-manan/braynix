import Footer from "components/Footer"
import Navbar from "components/Navbar"
import { Box } from "components/motionComponents"
// import Particles from "react-tsparticles";
// import particlesOptions from "components/particles";

const LayoutWrapper = ({ children }) => {
    return (
        <Box as="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1, ease: "easeInOut" }}>
            {/* <Particles options={particlesOptions} /> */}
            <Navbar />
            {children}
            <Footer />
        </Box>
    )
}

export default LayoutWrapper