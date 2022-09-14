import { render, screen, waitFor, within } from "@testing-library/react"
import OurProducts from "sections/index/OurProducts";
import { ThemeProvider } from "@theme-ui/theme-provider";

const MockComponent = () => {
    return (
        <ThemeProvider theme={{}}>
            <OurProducts />
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

    it("tests productsCarousel Container to Be in the document", () => {
        const productsCarousel = screen.getByTestId("productsCarousel")
        expect(productsCarousel).toBeInTheDocument()
    })

    it("tests productCarouselBox to Be in the document", () => {
        const productCarouselBoxs = screen.getAllByTestId("productCarouselBox")
        expect(productCarouselBoxs.length).toBeGreaterThan(1)
    })

    describe("tests element within a productCarouselBox", () => {
        it("number to be visible", () => {
            const productCarouselBox = screen.getAllByTestId("productCarouselBox")
            const number = within(productCarouselBox[0]).getByTestId("carousel-number")
            expect(number).toBeVisible()
        })
        it("img to be visible", () => {
            const productCarouselBox = screen.getAllByTestId("productCarouselBox")
            const img = within(productCarouselBox[0]).getByTestId("carousel-img")
            expect(img).toBeVisible()
        })
        it("heading to be visible", () => {
            const productCarouselBox = screen.getAllByTestId("productCarouselBox")
            const heading = within(productCarouselBox[0]).getByTestId("carousel-heading")
            expect(heading).toBeVisible()
        })
        it("para to be visible", () => {
            const productCarouselBox = screen.getAllByTestId("productCarouselBox")
            const para = within(productCarouselBox[0]).getByTestId("carousel-para")
            expect(para).toBeVisible()
        })
    })
})