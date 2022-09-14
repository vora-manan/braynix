import { render, screen, fireEvent } from "@testing-library/react"
import Navbar from "components/Navbar";
import { ThemeProvider } from "@theme-ui/theme-provider";

jest.mock('next/router', () => ({
    useRouter() {
        return ({
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn()
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null)
        });
    },
}));

const MockComponent = () => {
    return (
        <ThemeProvider theme={{}}>
            <Navbar />
        </ThemeProvider>
    )
}

// describe("testing navbar", () => { // window.resizeTo(width, height)
//     beforeEach(() => {
//         // window.innerWidth = 1326;
//         // window.innerHeight = 528;
//         // window.resizeTo(1326, 528)   
//         // Change the viewport to 500px.
//         // global.innerWidth = 1080;
//         // // Trigger the window resize event.
//         // global.dispatchEvent(new Event('resize'));
//         Object.defineProperty(window, 'innerHeight', {
//             writable: true,
//             configurable: true,
//             value: 150,
//         });

//         window.dispatchEvent(new Event('resize'));

//         expect(window.innerHeight).toBe(150);
//         render(<MockComponent />, {})
//     })

//     it("checks for logo", () => {
//         const logo = screen.getByTestId(/logo/i)
//         expect(logo).not.toBeInTheDocument()
//     })

//     it("checks for Home Link button", () => {
//         const linkBtn = screen.getByRole("button", { name: /home/i })
//         expect(linkBtn).not.toBeInTheDocument()
//     })

//     it("checks for About link button", () => {
//         const linkBtn = screen.getByRole("button", { name: /about/i })
//         expect(linkBtn).not.toBeInTheDocument()
//     })

//     it("checks for Services link button", () => {
//         const linkBtn = screen.getByRole("button", { name: /services/i })
//         expect(linkBtn).not.toBeInTheDocument()
//     })

//     it("checks for Products link button", () => {
//         const linkBtn = screen.getByRole("button", { name: /products/i })
//         expect(linkBtn).not.toBeInTheDocument()
//     })

//     it("checks for Careers link button", () => {
//         const linkBtn = screen.getByRole("button", { name: /careers/i })
//         expect(linkBtn).not.toBeInTheDocument()
//     })

//     it("checks for Contcat link button", () => {
//         const linkBtn = screen.getByRole("button", { name: /contact/i })
//         expect(linkBtn).not.toBeInTheDocument()
//     })
// })

describe("testing navbar after clicking menu button", () => {
    beforeEach(() => {
        render(<MockComponent />, {})
        fireEvent.click(screen.getByTestId(/menubutton/i))
    })

    it("checks for navbar-menu to be in the document", () => {
        const Menu = screen.getByTestId(/navbar-menu/i)
        expect(Menu).toBeInTheDocument()
    })

    it("checks for logo to be in the document", () => {
        const logo = screen.getByTestId(/logo/i)
        expect(logo).toBeInTheDocument()
    })

    it("checks for logo to not be visible", () => {
        const logo = screen.getByTestId(/logo/i)
        setTimeout(() => {
            expect(logo).not.toBeVisible()
        }, 500);
    })

    it("checks for Home Link button", () => {
        const linkBtn = screen.getByRole("button", { name: /home/i })
        expect(linkBtn).toBeInTheDocument()
    })

    it("checks for About link button", () => {
        const linkBtn = screen.getByRole("button", { name: /about/i })
        expect(linkBtn).toBeInTheDocument()
    })

    it("checks for Services link button", () => {
        const linkBtn = screen.getByRole("button", { name: /services/i })
        expect(linkBtn).toBeInTheDocument()
    })

    it("checks for Products link button", () => {
        const linkBtn = screen.getByRole("button", { name: /products/i })
        expect(linkBtn).toBeInTheDocument()
    })

    it("checks for Careers link button", () => {
        const linkBtn = screen.getByRole("button", { name: /careers/i })
        expect(linkBtn).toBeInTheDocument()
    })

    it("checks for Contcat link button", () => {
        const linkBtn = screen.getByRole("button", { name: /contact/i })
        expect(linkBtn).toBeInTheDocument()
    })

    it("checks that logo is in the doc and visible as well after clicking close button", () => {
        const closeButton = screen.getByTestId(/closeButton/i)
        fireEvent.click(closeButton)
        const logo = screen.getByTestId(/logo/i)
        expect(logo).toBeVisible()
    })

    it("checks that Menu is not in the doc after clicking close button", () => {
        const closeButton = screen.getByTestId(/closeButton/i)
        fireEvent.click(closeButton)
        const Menu = screen.getByTestId(/navbar-menu/i)
        setTimeout(() => {
            expect(Menu).not.toBeInTheDocument()
        }, 500);
    })
})