import { render, screen } from "@testing-library/react"
import DetailsGrid from "sections/careers/DetailsGrid";
import { ThemeProvider } from "@theme-ui/theme-provider";

const dummyData = {top: "This is top heading", heading: "This is heading", img: "", detail: "This is Detail", bulletPoints: ["wrferg", "ferfer", "cwerfw"]}

const MockComponent = () => {
    return (
        <ThemeProvider theme={{}}>
           <DetailsGrid data={dummyData} index={1}/>
        </ThemeProvider>
    )
}

describe("tests detail grid", () => {
    beforeEach(() => render(<MockComponent/>, {}))

    it("tests top heading", () => {
        const element = screen.getByTestId("grid-topHeading")
        expect(element.innerHTML).toEqual(dummyData.top)
    })

    it("tests heading", () => {
        const element = screen.getByTestId("grid-heading")
        expect(element.innerHTML).toEqual(dummyData.heading)
    })

    it("tests image box", () => {
        const element = screen.getByTestId("grid-img")
        expect(element).toBeInTheDocument()
    })
    
    it("tests detail para", () => {
        const element = screen.getByTestId("grid-para")
        expect(element.innerHTML).toEqual(dummyData.detail)
    })

    it("tests bullet points length", () => {
        const element = screen.getAllByTestId("grid-bulletPoint")
        expect(element).toHaveLength(dummyData.bulletPoints.length)
    })
})