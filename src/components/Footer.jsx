import Link from "next/link"
import { Box, Button, Flex, Grid, Image, Text } from "./motionComponents"
import Logo from "./Logo"


const styles = {
    footer: {
        px: [15, 25, 30, 50],
        pt: 60,
        pb: 20
    },
    socialAccounts: {
        variant: "container.centeredFlexBox",
        mt: 10,
        img: {
            width: 25,
            height: 25,
            "&:nth-of-type(even)":{
                mx: 10
            }
        }
    },
    linksContainer: {
        flexDirection: ["row", 'row', 'row', 'column'],
        justifyContent: ["space-between", 'space-between', 'space-between', 'center'],
        width: ["100%", "100%", "100%", "unset"],
        button: {
            fontSize: [16, 18, 20, 20, 16],
            outline: "none",
            border: 0,
            backgroundColor: "transparent",
            cursor: "pointer",
            color: "white",
            fontFamily: "body",
            my: 10,
            p: 0,
            textAlign: "start",
            zIndex: 1
        }
    },
    infoText: {
        fontFamily: "body",
        color: "white",
        fontWeight: 400,
        fontSize: 18,
        my: 10,
        zIndex: 1
    },
    footerBottomBar: {
        boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.25)",
        p: 10,
        justifyContent: "center"
    },
    copyrightText: {
        fontFamily: "body",
        fontWeight: 300,
        fontSize: 15,
        color: "white",
        zIndex: 1
    }
}

const data = {
    accounts: [
        {
            icon: "/icons/fb.svg",
            name: "Facebook"
        },
        {
            icon: "/icons/linkedin.svg",
            name: "LinkedIN"
        },
        {
            icon: "/icons/github.svg",
            name: "Github"
        },
    ],
    routeLinks: [
        {
            href: "/",
            name: "Home" 
        },
        {
            href: "/about",
            name: "About" 
        },
        {
            href: "/services",
            name: "Services" 
        },
        {
            href: "/products",
            name: "Products" 
        },
    ]
}

const Footer = () => {

    var dt = new Date();
    const date = dt.getFullYear();
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    };

    return (
        <>
            <Grid as="footer" id="footer" columns={["none", 'none', 'none', 3]} sx={styles.footer}>
                <Flex sx={{ justifyContent: ["center", 'center', 'center', 'start'] }}>
                    <Box>
                        <Logo fontSize={[40, 50, 50, 40, 50]}/>
                        <Flex sx={styles.socialAccounts} variants={container} initial="hidden" whileInView="show" data-testid="socialAccountsContainer">
                            {data.accounts.map((account, i) => <Image variants={listItem} key={i} src={account.icon} alt={account.name} />)}
                        </Flex>
                    </Box>
                </Flex>
                <Flex sx={{ justifyContent: "center" }}>
                    <Flex sx={styles.linksContainer} variants={container} initial="hidden" whileInView="show" data-testid="links-container">
                        {data.routeLinks.map((link, i) => <Link key={i} href={link.href} passHref><Button key={i} variants={listItem} data-testid={"footer-" + link.name}>{link.name}</Button></Link>)}
                    </Flex>
                </Flex>
                <Flex sx={{ justifyContent: ["start", 'start', 'start', "flex-end"], mt: [20, 20, 20, 0] }}>
                    <Box variants={container} initial="hidden" whileInView="show" data-testid="footer-addressDetails">
                        <Flex sx={{ flexDirection: "column" }} key={1} variants={listItem}>
                            <Text sx={{ ...styles.infoText, color: "gray" }}>Contact</Text>
                            <Text sx={styles.infoText}>+91 8249262771</Text>
                            <Text sx={styles.infoText}>growth@braynixai.com</Text>
                        </Flex>
                        <Flex sx={{ flexDirection: "column" }} mt={10} key={2} variants={listItem}>
                            <Text sx={{ ...styles.infoText, color: "gray" }}>Located at</Text>
                            <Text sx={styles.infoText}>Bhubaneswar | Delhi-NCR | Mumbai</Text>
                        </Flex>
                    </Box>
                </Flex>
            </Grid>
            <Flex sx={styles.footerBottomBar}>
                <Text sx={styles.copyrightText}>Designed and Developed by Braynix AI © {date}</Text>
            </Flex>
        </>
    )
}

export default Footer