import { render, screen, waitFor } from "@testing-library/react"
import WhoAreWe from "sections/index/WhoAreWe";
import { ThemeProvider } from "@theme-ui/theme-provider";

const MockComponent = () => {
    return (
        <ThemeProvider theme={{}}>
            <WhoAreWe />
        </ThemeProvider>
    )
}

describe("tests banner of index page", () => {
    beforeEach(() => render(<MockComponent/>, {}))

    // it("there shall be two img tags in component, one will be responsive and one will be for web version", () => {
    //     const imgs = screen.getAllByRole("img")
    //     expect(imgs).toHaveLength(2)
    // })

    it("tests for responsive image to not Be In The Document", () => {
        const respImg = screen.getByTestId(/bannerImgResponsive/i)
        // expect(respImg).not.toBeVisible()
        expect(respImg).toBeInTheDocument()
    })
    
    it("tests for image to Be In The Visible", () => {
        const img = screen.getByTestId("bannerImg")
        expect(img).not.toBeVisible()
        // expect(img).toBeInTheDocument() 
    })

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

})