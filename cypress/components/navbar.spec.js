/// <reference types="cypress" />

import { mount } from "@cypress/react";
import Navbar from "components/Navbar";
import NavLinks from "components/NavLinks";
import { ThemeProvider } from "@theme-ui/theme-provider";
import theme from 'theme/index'
import { useRouter } from 'next/router'


const MockComponent = () => {
    return <ThemeProvider theme={theme}><NavLinks /></ThemeProvider>
}

it("renders navbar", () => {
    // spyOn("next/router", "useRouter").and.returnValue = {
    //     route: "/",
    //     pathname: "",
    //     query: "",
    //     asPath: ""
    // }
    // cy.stub(useRouter, () => {
    //     return ({
    //         route: '/',
    //         pathname: '',
    //         query: '',
    //         asPath: '',
    //         push: cy.stub(),
    //         events: {
    //             on: cy.stub(),
    //             off: cy.stub()
    //         },
    //         beforePopState: jest.fn(() => null),
    //         prefetch: jest.fn(() => null)
    //     })
    // })
    cy.viewport(1024, 768)
    cy.stub(NavLinks, "useRouter").returns({
        route: '/',
        pathname: '',
        query: '',
        asPath: '',
        push: () => {},
        // events: {
        //     on: cy.stub(),
        //     off: cy.stub()
        // },
        // beforePopState: jest.fn(() => null),
        // prefetch: jest.fn(() => null)
    })
    mount(<MockComponent />)
    cy.findByTestId(/logo/i).should('exist')
})