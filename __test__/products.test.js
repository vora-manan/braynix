import { render, screen } from "@testing-library/react"
import ProductCard from "sections/products/ProductCard";
import Client from "sections/products/Client";
import { ThemeProvider } from "@theme-ui/theme-provider";

const MockComponent = ({children}) => {
    return (
        <ThemeProvider theme={{}}>
           {children}
        </ThemeProvider>
    )
}

describe("tests product card", () => {
    beforeEach(() => render(<MockComponent> <ProductCard data={{ details: "Hello This is Detail", name: "testing", collabtoration: ["This is test description", "sfr", "fewrfrw", "fwsrfsrw"] }}/></MockComponent>, {}))

    it("tests heading", () => {
        const element = screen.getByRole("heading", {name: /testing/i})
        expect(element).toBeInTheDocument()
    })

    it("tests details", () => {
        const element = screen.getByTestId("productCard-detail")
        expect(element.innerHTML).toEqual("Hello This is Detail")
    })

    it("tests collaboration", () => {
        const elements = screen.getAllByTestId("productCard-coll")
        expect(elements).toHaveLength(4)
    })

    it("tests button", () => {
        const element = screen.getByRole("button", {name: "Explore More"})
        expect(element).toBeInTheDocument()
    })
})

describe("tests Client card", () => {
    beforeEach(() => render(<MockComponent> <Client data={{ img: "", name: "testing" }}/></MockComponent>, {}))

    it("tests details", () => {
        const element = screen.getByTestId("clientName")
        expect(element.innerHTML).toEqual("testing")
    })
    
    it("test there is only one img tag", () => {
        expect(screen.getByRole("img")).toBeInTheDocument()
    })

})