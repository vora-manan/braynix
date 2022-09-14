import Link from 'next/link'
import { Flex, Heading } from 'theme-ui'

const styles = {
  logoContainer: {
    alignItems: "center",
    cursor: "pointer"
  },
  logo: {
    fontWeight: 700,
    fontSize: 35,
    color: "white"
  },
}
//  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .2}}
const Logo = ({ fontSize, testid="logo" }) => {
  return (
    <Link href="/" passHref>
      <Flex sx={styles.logoContainer} className="logo" data-testid={testid}>
        <Heading sx={fontSize ? { ...styles.logo, fontSize } : styles.logo}>Braynix</Heading>
        <Heading sx={fontSize ? { ...styles.logo, color: "colored", fontSize } : { ...styles.logo, color: "colored" }}>AI</Heading>
      </Flex>
    </Link>
  )
}

export default Logo