import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Flex } from "theme-ui"
import ButtonComp from "./Button"
import Card from "./Card"

const Responsive = ({ data }) => {
  const [selectedMoto, setSelectedMoto] = useState(data[0])
  return (
    data.map((obj, index) => <Strip key={index} selectedMoto={selectedMoto} setSelectedMoto={setSelectedMoto} obj={obj} index={index} />
    )
  )
}

const Strip = ({ obj, index, selectedMoto, setSelectedMoto }) => {
  return (
    <motion.div key={obj.id} style={{overflow: "hidden"}}>
      <Flex py={10} sx={{ justifyContent: index % 2 ? "flex-end" : "start" }}>
        <ButtonComp selectedObj={selectedMoto} setSelectedObj={setSelectedMoto} data={obj} index={index} responsive/>
      </Flex>
      {selectedMoto.id === obj.id &&
        <Flex sx={{ justifyContent: 'center', my: 20 }}>
          <AnimatePresence>
            {selectedMoto.id === obj.id &&
              <Card data={selectedMoto} slideDirection={index % 2 ? "100vw": "-100vw"}/>}
          </AnimatePresence>
        </Flex>
      }
    </motion.div>
  )
}


export default Responsive