import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Box, Flex } from "components/motionComponents"
import ButtonComp from "./Button"
import Card from "./Card"

const Responsive = ({ data }) => {
  const [selectedObj, setSelectedObj] = useState(data[0])

  return (
    <Box>
      {data.map((obj, index) => <Strip key={index} selectedObj={selectedObj} setSelectedObj={setSelectedObj} obj={obj} index={index} />)}
    </Box>
  )
}

const Strip = ({ obj, index, selectedObj, setSelectedObj }) => {
  const listItem = {
    hidden: { x: index % 2 ? -100 : 100 },
    show: {
      x: 0,
      transition: {
        type: "tween",
      }
    }
  };
  return (
    <Box key={obj.id}>
      <Flex py={10} sx={{ justifyContent: index % 2 ? "start" : "flex-end" }} variants={listItem} initial="hidden" whileInView="show" viewport={{once: true}}>
        <ButtonComp direction={index % 2 ? "row-reverse" : "row"} selectedObj={selectedObj} setSelectedObj={setSelectedObj} data={obj} />
      </Flex>
      {selectedObj.id === obj.id &&
        <Flex sx={{ justifyContent: 'center', my: [10, 10, 10, 20] }}>
          <AnimatePresence exitBeforeEnter>
            {selectedObj.id === obj.id &&
              <Card data={selectedObj} slideDirection={index % 2 ? "-100vw" : "100vw"} />}
          </AnimatePresence>
        </Flex>
      }
    </Box>
  )
}


export default Responsive