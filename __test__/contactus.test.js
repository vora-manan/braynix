import { render, screen, fireEvent } from "@testing-library/react"
import ContactForm from "components/ContactForm";
import { ThemeProvider } from "@theme-ui/theme-provider";

const MockComponent = () => {
    return (
        <ThemeProvider theme={{}}>
            <ContactForm />
        </ThemeProvider>
    )
}

describe("tests contact us form", () => {
    beforeEach(() => render(<MockComponent />, {}))

    it("tests if contact form is in the document", () => {
        const form = screen.getByTestId(/contactForm/i)
        expect(form).toBeInTheDocument()
    })

    it("tests if name input is in the document", () => {
        const input = screen.getByTestId(/name-input/i)
        expect(input).toBeInTheDocument()
    })

    it("tests if email input is in the document", () => {
        const input = screen.getByTestId(/email-input/i)
        expect(input).toBeInTheDocument()
    })

    it("tests if message-textarea is in the document", () => {
        const textarea = screen.getByTestId(/message-textarea/i)
        expect(textarea).toBeInTheDocument()
    })

    it("checks if submit btn is in the document", () => {
        const submitBtn = screen.getByRole("button", {name: /Submit/i})
        expect(submitBtn).toBeInTheDocument()
    })

    it("tests by typing into name input", () => {
        const input = screen.getByTestId(/name-input/i)
        fireEvent.change(input, {target: {value: "It Is Name"}})
        expect(input.value).toBe("It Is Name")
    })

    it("tests by typing into email input", () => {
        const input = screen.getByTestId(/email-input/i)
        fireEvent.change(input, {target: {value: "xyz@email.com"}})
        expect(input.value).toBe("xyz@email.com")
    })

    it("tests by typing into message-textarea", () => {
        const textarea = screen.getByTestId(/message-textarea/i)
        fireEvent.change(textarea, {target: {value: "This is message"}})
        expect(textarea.value).toBe("This is message")
    })
})