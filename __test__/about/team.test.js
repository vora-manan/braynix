import { render, screen, waitFor } from "@testing-library/react"
import Button from "sections/about/team/Button";
import Card from "sections/about/team/Card";
import { ThemeProvider } from "@theme-ui/theme-provider";

const MockComponent = ({children}) => {
    return (
        <ThemeProvider theme={{}}>
            {children}
        </ThemeProvider>
    )
}

describe("tests button", () => {
    describe("tests button which is not selected", () => {
        beforeEach(() => render(<MockComponent><Button setSelectedObj={jest.fn(() => null)} selectedObj={{id: 3}} data={{id: 1, img: "", name: "testing", position: "hello"}}/></MockComponent>, {}))
        it("test button's name to be in the document", () => {
            expect(screen.getByTestId(/member-name/i)).toBeInTheDocument()
        })
        it("test button's name to be visible", () => {
            expect(screen.getByTestId(/member-name/i)).toBeVisible()
        })
        it("test button's name is equal to the one passed in the data", () => {
            expect(screen.getByTestId(/member-name/i).innerHTML).toEqual("testing")
        })
        // it("test button's position is not in the document", () => {
        //     expect(screen.getByTestId(/member-position/i)).not.toBeInTheDocument()
        // })
        it("test there is only one img tag", () => {
            expect(screen.getByRole("img")).toBeInTheDocument()
        })
    })
    it("tests button to be in doc when it is selected", () => {
        render(<MockComponent><Button setSelectedObj={jest.fn(() => null)} selectedObj={{id: 1}} data={{id: 1, img: "", name: "testing", position: "hello"}}/></MockComponent>, {})
        expect(screen.getByTestId(/member-position/i)).toBeInTheDocument()
    })
    it("tests button to be vsible when it is selected", () => {
        render(<MockComponent><Button setSelectedObj={jest.fn(() => null)} selectedObj={{id: 1}} data={{id: 1, img: "", name: "testing", position: "hello"}}/></MockComponent>, {})
        waitFor(() => expect(screen.getByTestId(/member-position/i)).toBeVisible(), {timeout: 500})
    })
})

describe("tests card", () => {
    beforeEach(() => render(<MockComponent><Card data={{id: 1, img: "", name: "Testing", position: "Hello", description: "Wonderful"}}/></MockComponent>, {}))

    it("tests heading/name", () => {
        const element = screen.getByRole("heading", {name: /testing/i})
        expect(element).toBeInTheDocument()
    })
    it("tests memberCard-Role", () => {
        const element = screen.getByTestId("memberCard-Role")
        expect(element.innerHTML).toEqual("(Hello)")
    })
    it("tests description", () => {
        const element = screen.getByTestId("memberCard-description")
        expect(element.innerHTML).toEqual("Wonderful")
    })
    it("test there is only one img tag", () => {
        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})