import { Button, Image } from "components/motionComponents"

const styles = {
    button: {
        variant: "container.glassBackground",
        outline: "none",
        border: 0,
        borderRadius: 0,
        fontSize: 22,
        p: [15, 15, 20, 20, 20, 30],
        width: ["80%", "80%", "80%", "55%"],
        color: "white",
        fontFamily: "body",
        display: "flex",
        alignItems: "center",
        fontWeight: 600,
        justifyContent: "center",
        cursor: "pointer",
        transition: ".2s",
        img: {
            mx: "5px"
        },
        "&.active": {
            width: ["95%", "95%", "95%", "80%"],
            backgroundColor: "deepBlue"
        }
    },
}

// , variants  variants={variants}
const ButtonComp = ({selectedObj, setSelectedObj, data, index, responsive}) => {
    const variant = {
        hidden: {x: responsive ? index % 2 ? 100 : -100 : -100, opacity: 0},
        show: {x: 0, opacity: 1}
    }
  return (
    <Button key={data.id} sx={styles.button} onClick={() => setSelectedObj(data)} className={selectedObj.id === data.id ? "active" : ""} variants={variant} initial="hidden" whileInView="show" transition={{delay: responsive ? 0 : .1*index, type: "tween"}}>
        {data.name} 
        <Image src='/icons/dart.svg'/>
    </Button>
  )
}

export default ButtonComp