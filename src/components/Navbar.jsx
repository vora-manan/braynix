/** @jsxImportSource theme-ui */
import { Flex, IconButton, Image } from 'components/motionComponents'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { AnimatePresence } from 'framer-motion'

const styles = {
    navbar: {
        justifyContent: "space-between",
        px: [10, 10, 10, 10, 50],
        py: [10, 10, 10, 20],
        position: "sticky",
        top: 0,
        backgroundColor: `navbar`,
        backdropFilter: "blur(4px)",
        boxShadow: theme => `0 0 20px ${theme.colors.backgroundLight}`,
        zIndex: 10,
    },
    menuButton: {
        width: 40,
        height: 40,
        outline: "none",
        border: "none",
        backgroundColor: "transparent",
        display: ["flex", "flex", "flex", "none"],
        img: {
            width: "100%",
            height: "100%",
        }
    },
    linksContainer: { flex: 1, alignItems: "center", justifyContent: "center", overflow: "auto" },
    menu: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        flexDirection: "column"
    }
}

const Navbar = () => {
    const breakpointIndex = useBreakpointIndex()
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        if (showMenu) document.body.style.overflow = "hidden"
        else {
            document.body.style.overflowY = "auto"
            document.body.style.overflowX = "hidden"
        }
    }, [showMenu])


    const variants = {
        initial: { clipPath: 'circle(0% at 100% 0)', WebkitClipPath: 'circle(0% at 100% 0)' },
        animate: { clipPath: 'circle(141.4% at 100% 0)', WebkitClipPath: 'circle(141.4% at 100% 0)' },
        exit: { clipPath: 'circle(0% at 100% 0)', WebkitClipPath: 'circle(0% at 100% 0)' },
    }

    return (
        <Flex sx={styles.navbar} as="nav">
            <Logo testid="logo-navbar"/>
            {breakpointIndex > 2 ? <NavLinks /> :
                <AnimatePresence>
                    {showMenu &&
                        <Flex data-testid="navbar-menu" sx={styles.menu} variants={variants} initial={'initial'} animate={'animate'} exit={'exit'} transition={{ duration: 0.5 }}>
                            <Flex sx={{ justifyContent: "flex-end", width: "100%", p: 15 }}>
                                <IconButton data-testid="closeButton" sx={styles.menuButton} onClick={() => setShowMenu(false)}><CloseIcon /></IconButton>
                            </Flex>
                            <Flex sx={styles.linksContainer}>
                                <NavLinks closeMenu={() => setShowMenu(false)} />
                            </Flex>
                        </Flex>
                    }
                </AnimatePresence>
            }

            <IconButton sx={styles.menuButton} onClick={() => setShowMenu(true)} data-testid="menuButton"><Image src='/icons/menu.svg' alt='Menu'/></IconButton>
        </Flex>
    )
}

const CloseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#fff" stroke="#fff" strokeWidth={2} strokeMiterlimit={10} d="M19 5L5 19" />
            <path fill="#fff" stroke="#fff" strokeWidth={2} strokeMiterlimit={10} d="M5 5L19 19" />
        </svg>
    )
}

export default Navbar

/*
menuButton: {
    width: 50,
    height: 50,
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    display: ["block", "block", "block", "none"]
}

<IconButton sx={styles.menuButton} onClick={() => setShowMenu(true)}><Image src='/icons/menu.svg' alt='Menu'/></IconButton>

*/