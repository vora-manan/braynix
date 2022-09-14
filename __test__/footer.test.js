import { render, screen, within } from "@testing-library/react"
import Footer from "components/Footer";
import { ThemeProvider } from "@theme-ui/theme-provider";

const MockComponent = () => {
    return (
        <ThemeProvider theme={{}}>
            <Footer />
        </ThemeProvider>
    )
}

describe("it tests footer", () => {
    beforeEach(() => render(<MockComponent/>, {}))
    
    it("tests for existence for logo", () => {
        const logo = screen.getByTestId(/logo/i)
        expect(logo).toBeInTheDocument()
    })
    
    it("tests for existence for socialAccountsContainer", () => {
        const socialAccountsContainer = screen.getByTestId(/socialAccountsContainer/i)
        expect(socialAccountsContainer).toBeInTheDocument()
    })
    
    it("tests for existence for socail account images within socialAccountsContainer", () => {
        const socialAccountsContainer = screen.getByTestId(/socialAccountsContainer/i)
        const accountImgs = within(socialAccountsContainer).getAllByRole("img")
        expect(accountImgs).toHaveLength(3)
    })
    
    it("tests for existence for link buttons within links-container", () => {
        const linksContainer = screen.getByTestId(/links-container/i)
        const buttons = within(linksContainer).getAllByRole("button")
        expect(buttons.length).toBeGreaterThan(1)
    })
    
    it("tests for existence for company details within links-container", () => {
        const details = screen.getByTestId(/footer-addressDetails/i)
        expect(details).toBeInTheDocument()
    })
})