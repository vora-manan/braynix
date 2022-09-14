// /** @jsxImportSource theme-ui */
// import { Box, Card, Flex, Image, Paragraph, Text } from "theme-ui";

// const styles = {
//     card: {
//         padding: 20,
//         borderRadius: "40px",
//         zIndex: 1,
//         height: "100%",
//         justifySelf: "center"
//     },
//     mainBox: {
//         flexDirection: "column",
//         justifyContent: "space-between",
//         height: "100%",
//     },
//     para: {
//         color: "#fff",
//         maxWidth: "300px",
//         p: "0",
//         m: "0",
//         fontFamily: "body"
//     },
//     number: {
//         variant: "sectionOrder",
//         position: "relative"
//     }
// }

// export default function Testimonial({content, image, heading, designation, num}) {
//     return (
//         <Flex sx={styles.card}>
//                 {/* <Text sx={styles.number}>{num}</Text> */}
//                 <Flex sx={styles.mainBox}>
//                     <Paragraph sx={styles.para}> {content} </Paragraph>
//                     <Flex sx={{alignItems: "center", mt: 20}}>
//                         <Image sx={{ width: "60px", height: "60px", mr: 15 }} src={image} />
//                         <Box style={{ ml: 30 }}>
//                             <Text sx={{ color: "#fff", fontWeight: "bold", fontSize: "20px", fontFamily: "body" }}>{heading}</Text>
//                             <br />
//                             <Text sx={{ color: "#fff", fontFamily: "body"}}>{designation}</Text>
//                         </Box>
//                     </Flex>
//                 </Flex>
//                 {/* <Box style={{position :"absolute", top:"300px" ,left:"1px"}}>
//               <Image sx={{width:"360px" , ml:"20px"}} src={props.stroke}></Image>
//           </Box> */}
//         </Flex>
//     );
// }


/** @jsxImportSource theme-ui */
import { Box, Flex, Image, Paragraph, Text, Grid } from "theme-ui";

const styles = {
    card: {
        padding: 20,
        borderRadius: "40px",
        zIndex: 1,
        height: "100%",
        justifySelf: "center",
        justifyContent: "center",
    },
    mainBox: {
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        textAlign:'center'
    },
    para: {
        color: "#fff",
        maxWidth: "300px",
        p: "0",
        m: "0",
        fontFamily: "body"
    },
    number: {
        variant: "sectionOrder",
        position: "relative"
    }
}

export function Testimonial({ content, image, heading, designation, num }) {
    return (
        <Flex sx={styles.card}>
            {/* <Text sx={styles.number}>{num}</Text> */}
            <Flex sx={styles.mainBox}>
                <Grid columns="1fr 1fr">
                <Image sx={{ width: "30%",objectFit: 'cover', margin:'auto', marginRight:'0'}} src={image} />
                <Flex sx={{ alignItems: "center", mt: 20 }}>
                    <Box style={{ ml: 30 }}>
                    <Paragraph sx={styles.para}> {content} </Paragraph>
                        <Text sx={{ color: "#fff", fontWeight: "bold", fontSize: "20px", fontFamily: "body" }}>{heading}</Text>
                        <br />
                        <Text sx={{ color: "#fff", fontFamily: "body" }}>{designation}</Text>
                    </Box>
                </Flex>
                </Grid>
            </Flex>
            {/* <Box style={{position :"absolute", top:"300px" ,left:"1px"}}>
              <Image sx={{width:"360px" , ml:"20px"}} src={props.stroke}></Image>
          </Box> */}
        </Flex>
    );
}


export function TestimonialForMobile({ content, image, heading, designation, num }) {
        return (
            <Flex sx={styles.card}>
                    {/* <Text sx={styles.number}>{num}</Text> */}
                    <Flex sx={styles.mainBox}>
                        <Paragraph sx={styles.para}> {content} </Paragraph>
                        <Flex sx={{alignItems: "center",justifyContent:'center', mt: 20}}>
                            <Image sx={{ width: "60px", height: "60px", mr: 15 }} src={image} />
                            <Box style={{ ml: 30 }}>
                                <Text sx={{ color: "#fff", fontWeight: "bold", fontSize: "20px", fontFamily: "body" }}>{heading}</Text>
                                <br />
                                <Text sx={{ color: "#fff", fontFamily: "body"}}>{designation}</Text>
                            </Box>
                        </Flex>
                    </Flex>
                    {/* <Box style={{position :"absolute", top:"300px" ,left:"1px"}}>
                  <Image sx={{width:"360px" , ml:"20px"}} src={props.stroke}></Image>
              </Box> */}
            </Flex>
        );
    }