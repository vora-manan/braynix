import { render, screen } from "@testing-library/react"
import ServiceDetailBox from "sections/services/ServiceDetailBox";
import { ThemeProvider } from "@theme-ui/theme-provider";

const MockComponent = () => {
    return (
        <ThemeProvider theme={{}}>
            <ServiceDetailBox data={{ img: "", name: "testing", detail: "This is test description" }} number={3}/>
        </ThemeProvider>
    )
}

describe("it tests serivice detail box of service page", () => {
    beforeEach(() => render(<MockComponent/>))

    it("tests heading", () => {
        const element = screen.getByRole("heading", {name: "testing"})
        expect(element).toBeInTheDocument()
    })
    it("tests para", () => {
        const element = screen.getByTestId("service-card-details")
        expect(element.innerHTML).toEqual("This is test description")
    })
    it("tests number", () => {
        const element = screen.getByTestId("service-card-number")
        expect(element.innerHTML).toEqual("3")
    })
    it("test there is only one img tag", () => {
        expect(screen.getByRole("img")).toBeInTheDocument()
    })
})