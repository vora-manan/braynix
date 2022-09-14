import { render, screen, waitFor } from "@testing-library/react"
import Banner from "sections/index/Banner";
import { ThemeProvider } from "@theme-ui/theme-provider";

const MockComponent = () => {
    return (
        <ThemeProvider theme={{}}>
            <Banner />
        </ThemeProvider>
    )
}

describe("tests banner of index page", () => {
    beforeEach(() => render(<MockComponent/>, {}))

    it("tests for banner image to Be In The Document", () => {
        const img = screen.getByTestId(/bannerImg/i)
        expect(img).toBeInTheDocument()
    })
    
    it("tests for banner image to Be In The Visible", () => {
        const img = screen.getByTestId(/bannerImg/i)
        waitFor(() => expect(img).toBeVisible(), {timeout: 500})
        
    })

    it("tests for headings to Be In The Document", () => {
        const headings = screen.getAllByRole("heading")
        expect(headings).toHaveLength(3)
    })

    it("tests for button to Be In The Document", () => {
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })

    it("tests for button to Be In The Visible", () => {
        const button = screen.getByRole("button")
        waitFor(() => expect(button).toBeVisible(), {timeout: 500})
    })
})