// /** @jsxImportSource theme-ui */
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { Button, Flex } from './motionComponents'
// import { scroller } from 'react-scroll'
// import { useBreakpointIndex } from '@theme-ui/match-media'

// const styles = {
//     navlinkContainer: {
//         alignItems: "center",
//         justifyContent: ["center", "center", "center", "start"],
//         flexDirection: ["column", "column", "column", "row"],
//         button: {
//             fontSize: [22, 22, 22, 16],
//             outline: "none",
//             border: 0,
//             backgroundColor: "transparent",
//             cursor: "pointer",
//             mx: [0, 0, 0, 10, 18, 20],
//             my: [15, 15, 15, 0],
//             position: "relative",
//             fontFamily: "heading",
//             transition: ".1s",
//             color: "white",
//             px: 0,
//             py: "2px",
//             fontWeight: 500,
//             "&::before": {
//                 content: "''",
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 height: "2px",
//                 backgroundColor: "colored",
//                 borderRadius: 15,
//                 width: 0,
//                 transition: ".1s",
//             },
//             "&:hover": {
//                 color: "colored"
//             },
//             "&:hover::before": {
//                 width: "70%"
//             },
//             "&.active": {
//                 color: "colored"
//             },
//             "&.active::before": {
//                 width: "70%"
//             },
//         },
//     }
// }

// const NavLinks = ({ closeMenu = undefined }) => {
//     const { pathname, push } = useRouter()
//     const index = useBreakpointIndex()

//     const contactBtnClick = () => {
//         if (["/careers"].includes(pathname)) push('/?id=contact')
//         else {
//             scroller.scrollTo("contactForm", {
//                 duration: 1000,
//                 delay: 0,
//                 smooth: "easeOutQuad",
//                 offset: index <= 2 ? 0 : -55
//             })
//         }
//         closeMenu && closeMenu()
//     }

//     // const menuAnimation = () => {
//     //     return index <= 2 ? {
//     //         initial: {x: -20, opacity: 0},
//     //         animate: {x: 0, opacity: 1},
//     //         transition: {
//     //             x: { stiffness: 1000, velocity: -100 },
//     //             delay: .1
//     //           }
//     //     } : {}
//     // }

//     // const container = {
//     //     hidden: { opacity: 0 },
//     //     show: {
//     //         opacity: 1,
//     //         transition: {
//     //             staggerChildren: 0.15
//     //         }
//     //     }
//     // };

//     // const listItem = {
//     //     hidden: { opacity: 0 },
//     //     show: { opacity: 1 }
//     // };
//     // key={1} variants={listItem}
//     return ( // variants={container} initial="hidden" animate="show"
//         <Flex sx={styles.navlinkContainer} className="navLinksContainer">
//             <Link href="/" passHref><Button data-testid="home" onClick={closeMenu} className={pathname === "/" ? "active" : ""}>Home</Button></Link>
//             <Link href="/about" passHref><Button data-testid="about" onClick={closeMenu} className={pathname === "/about" ? "active" : ""}>About</Button></Link>
//             <Link href="/services" passHref><Button data-testid="services" onClick={closeMenu} className={pathname === "/services" ? "active" : ""}>Services</Button></Link>
//             <Link href="/products" passHref><Button data-testid="products" onClick={closeMenu} className={pathname === "/products" ? "active" : ""}>Products</Button></Link>
//             <Link href="/careers" passHref><Button data-testid="careers" onClick={closeMenu} className={pathname === "/careers" ? "active" : ""}>Careers</Button></Link>
//             <Button data-testid="contact" onClick={contactBtnClick}>Contact</Button>
//         </Flex>
//     )
// }

// export default NavLinks

/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Flex } from './motionComponents'
import { scroller } from 'react-scroll'
import { useBreakpointIndex } from '@theme-ui/match-media'

const styles = {
    navlinkContainer: {
        alignItems: "center",
        justifyContent: ["center", "center", "center", "start"],
        flexDirection: ["column", "column", "column", "row"],
        button: {
            fontSize: [22, 22, 22, 16],
            outline: "none",
            border: 0,
            backgroundColor: "transparent",
            cursor: "pointer",
            mx: [0, 0, 0, 10, 18, 20],
            my: [15, 15, 15, 0],
            position: "relative",
            fontFamily: "heading",
            transition: ".1s",
            color: "white",
            px: 0,
            py: "2px",
            fontWeight: 500,
            "&::before": {
                content: "''",
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "2px",
                backgroundColor: "colored",
                borderRadius: 15,
                width: 0,
                transition: ".1s",
            },
            "&:hover": {
                color: "colored"
            },
            "&:hover::before": {
                width: "70%"
            },
            "&.active": {
                color: "colored"
            },
            "&.active::before": {
                width: "70%"
            },
        },
    }
}

const NavLinks = ({ closeMenu = undefined }) => {
    const { pathname, push } = useRouter()
    const index = useBreakpointIndex()

    const contactBtnClick = () => {
        if (["/careers"].includes(pathname)) push('/?id=contact')
        else {
            scroller.scrollTo("contactForm", {
                duration: 1000,
                delay: 0,
                smooth: "easeOutQuad",
                offset: index <= 2 ? 0 : -55
            })
        }
        closeMenu && closeMenu()
    }

    // const menuAnimation = () => {
    //     return index <= 2 ? {
    //         initial: {x: -20, opacity: 0},
    //         animate: {x: 0, opacity: 1},
    //         transition: {
    //             x: { stiffness: 1000, velocity: -100 },
    //             delay: .1
    //           }
    //     } : {}
    // }

    // const container = {
    //     hidden: { opacity: 0 },
    //     show: {
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.15
    //         }
    //     }
    // };

    // const listItem = {
    //     hidden: { opacity: 0 },
    //     show: { opacity: 1 }
    // };
    // key={1} variants={listItem}
    return ( // variants={container} initial="hidden" animate="show"
        <Flex sx={styles.navlinkContainer} className="navLinksContainer">
            <Link href="/" passHref><Button data-testid="home" onClick={closeMenu} className={pathname === "/" ? "active" : ""}>Home</Button></Link>
            <Link href="/about" passHref><Button data-testid="about" onClick={closeMenu} className={pathname === "/about" ? "active" : ""}>About Us</Button></Link>
            <Link href="/services" passHref><Button data-testid="services" onClick={closeMenu} className={pathname === "/services" ? "active" : ""}>Services</Button></Link>
            <Link href="/products" passHref><Button data-testid="products" onClick={closeMenu} className={pathname === "/products" ? "active" : ""}>Products</Button></Link>
            <Link href="/careers" passHref><Button data-testid="careers" onClick={closeMenu} className={pathname === "/careers" ? "active" : ""}>Careers</Button></Link>
            <Button data-testid="contact" onClick={contactBtnClick}>Contact</Button>
        </Flex>
    )
}

export default NavLinks