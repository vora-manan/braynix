import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { Flex, Grid } from 'components/motionComponents'
import ButtonComponent from './Button'
import Card from './Card'

const Desktop = ({data}) => {
    const [selectedObj, setSelectedObj] = useState(data[0])
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        }
    };

    const listItem = {
        hidden: { x: 100 },
        show: { x: 0,
            transition: {
                type: "tween",
            } 
        }
    };

  return (
    <Grid columns={[null, null, null, 2, "1.5fr 1fr"]} my={60}>
        <Flex sx={{justifyContent: "center"}}>
            <AnimatePresence exitBeforeEnter>
                <Card data={selectedObj}/>
            </AnimatePresence>
        </Flex>
        <Flex sx={{flexDirection: "column"}} variants={container} initial="hidden" whileInView="show" viewport={{once: true}}>
            {data.map((element, index) => <Flex key={index} sx={{alignItems: "center", py: 10, justifyContent: "flex-end"}} variants={listItem}>
                <ButtonComponent key={index} setSelectedObj={setSelectedObj} selectedObj={selectedObj} data={element}/>
            </Flex>)}               
        </Flex>
    </Grid>
  )
}

export default Desktop