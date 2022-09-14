/** @jsxImportSource theme-ui */

import { useState } from "react"
import { Box, Button, Flex, Grid, Heading, Input, Label, Paragraph, Textarea } from "components/motionComponents"
import { slideUpAnimation } from "./motionAnimations"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import QueryString from "qs";

const styles = {
    grid: {
        p: [20, 20, 20, 40],
        backgroundColor: "accent",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 15px 20px rgba(0, 0, 0, 0.25)",
        ".Toastify__toast-body > div": {
            fontFamily: "body"
        }
    },
    heading: {
        color: "white",
        fontWeight: 700,
        fontSize: [40, 50, 55, 70],
        lineHeight: [1, 1, 1, 1, 1.5],
        mb: [20, 20, 20, 10]
    },
    inputBox: {
        mb: 20,
        label: {
            color: "white",
            fontFamily: "body",
            fontWeight: 400,
            fontSize: 20
        },
        input: {
            outline: "none",
            backgroundColor: "white",
            color: "black",
            fontFamily: "body",
            fontWeight: 400,
            fontSize: 15,
            width: "100%",
            boxShadow: 'inset 0px 0px 15px rgba(118, 118, 118, 0.5)',
            border: 0,
            borderRadius: 0
        },
        textarea: {
            outline: "none",
            backgroundColor: "white",
            color: "black",
            fontFamily: "body",
            fontWeight: 400,
            fontSize: 15,
            width: "100%",
            boxShadow: 'inset 0px 0px 15px rgba(118, 118, 118, 0.5)',
            border: 0,
            borderRadius: 0,
            height: 200,
            resize: "none"
        },
    },
    submitButton: {
        width: "100%",
        backgroundColor: "black",
        color: "white",
        fontFamily: "body",
        outline: "none",
        border: 0,
        borderRadius: 0,
        fontSize: 21,
        cursor: "pointer"
    }
}

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
  return (
    <Grid as="section" id="contactForm" data-testid="contactForm" columns={['none', 'none', 'none', 2]} gap={[32, 32, 32, 16]} sx={styles.grid} {...slideUpAnimation({duration: .3})}>
        <Flex variant="container.centeredFlexBox" sx={{zIndex: 1}}>
            <Box>
                <Heading data-testid="heading" sx={styles.heading} {...slideUpAnimation({})}>Want to start a project?</Heading>    
                <Paragraph data-testid="para" variant="sectionPara" {...slideUpAnimation({delay: .1})}>Built in collaboration with medical professionals, and trained on real-world datasets. Intelligent AI-based diagnosis that examines each scan for multiple complications at once.</Paragraph>
            </Box>
        </Flex>
        <Box as="form" sx={{zIndex: 1}}>
            <Box sx={styles.inputBox} {...slideUpAnimation({})}>
                <Label>Name</Label>
                <Input data-testid="name-input" value={name} onChange={e => setName(e.target.value)} autoComplete="name"/>
            </Box>
            <Box sx={styles.inputBox} {...slideUpAnimation({})}>
                <Label>Email</Label>
                <Input data-testid="email-input" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email"/>
            </Box>
            <Box sx={styles.inputBox} {...slideUpAnimation({})}>
                <Label>Message</Label>
                <Textarea data-testid="message-textarea" value={message} onChange={e => setMessage(e.target.value)}/>
            </Box>
            <Button type="submit" sx={styles.submitButton} {...slideUpAnimation({})}>Submit</Button>
        </Box>  
    </Grid>
  )
}


export default ContactForm