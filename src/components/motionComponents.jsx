import * as themeui from 'theme-ui'
import {motion} from 'framer-motion'

// Conerting Theme UI Components to framer motion components so to access properties of both themeui(sx) and framer motion (initial,animate,etc)
const Flex = motion(themeui.Flex)
const Box = motion(themeui.Box)
const Grid = motion(themeui.Grid)
const Input = motion(themeui.Input)
const Paragraph = motion(themeui.Paragraph)
const Image = motion(themeui.Image)
const Heading = motion(themeui.Heading)
const Button = motion(themeui.Button)
const Label = motion(themeui.Label)
const IconButton = motion(themeui.IconButton)
const Textarea = motion(themeui.Textarea)
const Text = motion(themeui.Text)

export {Flex, Box, Grid, Input, Paragraph, Image, Heading, Button, Label, IconButton, Textarea, Text}