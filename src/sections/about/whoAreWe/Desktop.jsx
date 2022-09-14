import { AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Box, Flex, Grid, Image } from 'components/motionComponents'
import ButtonComp from './Button'
import Card from './Card'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({overwrite:"auto"});


const styles = {
    bubble: {
        position: "absolute",
        bottom: -100,
        right: 0,
        img: {
            width: 300
        }
    }
}

const Desktop = ({ data }) => {
    const [selectedMoto, setSelectedMoto] = useState(data[0])
    const bubbleRef = useRef()

    useEffect(() => {
        let tl = gsap.timeline()
        tl.to(bubbleRef.current, {
            scrollTrigger: {
                trigger: bubbleRef.current,
                scrub: 2,
                start: "top 20%"
            },
            y: 300
        })
        return () => tl.kill()
    },[])
    
    return ( 
        <Box sx={{ position: "relative" }}>
            <Box sx={styles.bubble} ref={bubbleRef}><Image src='/images/bubble.png' /></Box>
            <Grid columns="1fr 1.5fr" my={60} sx={{overflow: "hidden"}}>
                <Flex sx={{ flexDirection: "column" }}>
                    {data.map((element, index) => <Flex key={index} sx={{ alignItems: "center", py: 10 }}>
                        <ButtonComp key={index} selectedObj={selectedMoto} setSelectedObj={setSelectedMoto} data={element} index={index}/>
                    </Flex>)}
                </Flex>
                <Flex sx={{ justifyContent: "center" }}>
                    <AnimatePresence exitBeforeEnter>
                        <Card data={selectedMoto} />
                    </AnimatePresence>
                </Flex>
            </Grid>
        </Box>
    )
}

export default Desktop