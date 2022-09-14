import { render, screen, within } from "@testing-library/react"
import Acordian from "sections/careers/Acordian";
import { ThemeProvider } from "@theme-ui/theme-provider";

const dummyData = { type: "cdcdfwcf", detail: "Vwfrvr", positions: [
    {
        job: "cwdcfwd",
        location: "vfvfdv",
    },
    {
        job: "dgthrnfgbnfgyfdbfgnbfhnht",
        location: "bvdbfgdfbgf",
    },
    {
        job: "cwdchrtgfbhdhbrfwd",
        location: "gtdrthfryhj",
    },
] }

const MockComponent = () => {
    return (
        <ThemeProvider theme={{}}>
           <Acordian data={dummyData} isSelected={true} selectOpening={jest.fn()}/>
        </ThemeProvider>
    )
}

describe("tests accordian", () => {
    beforeEach(() => render(<MockComponent/>, {}))

    it("tests heading", () => {
        const element = screen.getByTestId("heading")
        expect(element.innerHTML).toEqual(dummyData.type)
    })

    it("tests detail/para", () => {
        const element = screen.getByTestId("jobOpening-para")
        expect(element.innerHTML).toEqual(dummyData.detail)
    })

    it("tests position points length", () => {
        const element = screen.getAllByTestId("jobOpening-position-detail")
        expect(element).toHaveLength(dummyData.positions.length)
    })

    it("tests within a postion: jobtype", () => {
        const positions = screen.getAllByTestId("jobOpening-position-detail")
        const element = within(positions[0]).getByTestId("jobType")
        expect(element).toBeInTheDocument()
    })
    
    it("tests within a postion: jobLocation", () => {
        const positions = screen.getAllByTestId("jobOpening-position-detail")
        const element = within(positions[0]).getByTestId("jobLocation")
        expect(element).toBeInTheDocument()
    })

    it("tests within a postion: image(arrow-right)", () => {
        const positions = screen.getAllByTestId("jobOpening-position-detail")
        const element = within(positions[0]).getByRole("img", {name: "arrow-right"})
        expect(element).toBeInTheDocument()
    })
})