import { render, screen } from "@testing-library/react"
import Button from "sections/about/whoAreWe/Button";
import Card from "sections/about/whoAreWe/Card";
import { ThemeProvider } from "@theme-ui/theme-provider";

const MockComponent = ({children}) => {
    return (
        <ThemeProvider theme={{}}>
            {children}
        </ThemeProvider>
    )
}

describe("tests button", () => {
    beforeEach(() => render(<MockComponent><Button setSelectedObj={jest.fn(() => null)} selectedObj={{id: 3}} data={{id: 1, name: "testing"}}/></MockComponent>, {}))
    it("test button's name to be in the document", () => {
        expect(screen.getByRole("button", {name: "testing"})).toBeInTheDocument()
    })
    it("test there is only one img tag", () => {
        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})

describe("tests card", () => {
    beforeEach(() => render(<MockComponent><Card data={{id: 1, name: "Testing", details: "Hello", collabtoration: ["Wonderful", "22", "33"]}}/></MockComponent>, {}))

    it("tests heading/name", () => {
        const element = screen.getByRole("heading", {name: /testing/i})
        expect(element).toBeInTheDocument()
    })
    it("tests card-details", () => {
        const element = screen.getByTestId("card-details")
        expect(element.innerHTML).toEqual("Hello")
    })
    it("tests description", () => {
        const elements = screen.getAllByTestId("card-coll-array")
        expect(elements).toHaveLength(3)
    })
})