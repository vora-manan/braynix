import { render, screen, waitFor } from "@testing-library/react"
import OurServices from "sections/index/OurServices";
import { ThemeProvider } from "@theme-ui/theme-provider";

const MockComponent = () => {
    return (
        <ThemeProvider theme={{}}>
            <OurServices />
        </ThemeProvider>
    )
}

describe("tests banner of index page", () => {
    beforeEach(() => render(<MockComponent/>, {}))

    it("tests for heading to Be In The Document", () => {
        const heading = screen.getByTestId("heading")
        expect(heading).toBeInTheDocument()
    })

    it("tests for heading to Be Visible", () => {
        const heading = screen.getByTestId("heading")
        waitFor(() => expect(heading).toBeVisible(), {timeout: 500})
    })

    it("tests for para to Be In The Document", () => {
        const para = screen.getByTestId("para")
        expect(para).toBeInTheDocument()
    })

    it("tests for para to Be Visible", () => {
        const para = screen.getByTestId("para")
        waitFor(() => expect(para).toBeVisible(), {timeout: 500})
    })

    // it("tests servicesContainer not to Be in the document", () => {
    //     const servicesContainer = screen.getByTestId("servicesContainer")
    //     expect(servicesContainer).not.toBeInTheDocument()
    // })

    it("tests servicesCaraousel Container to Be in the document", () => {
        const servicesCaraousel = screen.getByTestId("servicesCaraousel")
        expect(servicesCaraousel).toBeInTheDocument()
    })

    it("tests serviceCaraouselBox to Be in the document", () => {
        const serviceCaraouselBoxs = screen.getAllByTestId("serviceCaraouselBox")
        expect(serviceCaraouselBoxs.length).toBeGreaterThan(1)
    })
})