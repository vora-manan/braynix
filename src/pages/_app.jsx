/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import { Box } from 'components/motionComponents'
import theme from "../theme";
// import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import "../theme/globals.css"
import Particles from "react-tsparticles";
import particlesOptions from "components/particles";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import SplashScreen from "components/SplashScreen";

// const progressBar = new ProgressBar({
//   size: 3,
//   color: theme.colors.colored,
//   className: "router-progress",
//   delay: 100,
// });

// Router.events.on("routeChangeStart", progressBar.start);
// Router.events.on("routeChangeComplete", progressBar.finish);
// Router.events.on("routeChangeError", progressBar.finish);

function MyApp({ Component, pageProps }) {
  const [splashScreen, setSplashScreen] = useState(false)
  Router.events.on("routeChangeStart", () => setSplashScreen(true));
  Router.events.on("routeChangeComplete", () => setTimeout(() => setSplashScreen(false), 150));
  Router.events.on("routeChangeError", () => setTimeout(() => setSplashScreen(false), 150));

  // const unsetSplashScreen = () => {
  //   setTimeout(() => setSplashScreen(false), 100)
  // }

  // useEffect(() => {
  //   const timeOut = setTimeout(() => setSplashScreen(false), 500)
  //   return () => clearTimeout(timeOut)
  // }, [splashScreen])

  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => setSplashScreen(true));
  //   Router.events.on("routeChangeComplete", () => setSplashScreen(false));
  //   Router.events.on("routeChangeError", () => setSplashScreen(false));
  // }, [Router])

  return (
    <ThemeProvider theme={theme}>
      <Box backgroundColor="background">
        <Particles options={particlesOptions} />
        <AnimatePresence>
          {splashScreen ? <SplashScreen/> : <Component {...pageProps} />}
        </AnimatePresence>
      </Box>
    </ThemeProvider>
  )

}

export default MyApp