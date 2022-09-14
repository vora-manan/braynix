/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000/'

const getByTestId = id => `[data-testid=${id}]`

describe("it tests contact form", () => {
    before(() => {
        cy.visit(baseUrl)
        cy.get("#contactForm").scrollIntoView().should("exist").and("be.visible")
    })
    it("tests heading and paragrah and inputs", () => {
        const heading = getByTestId("heading")
        const para = getByTestId("para")
        const name = getByTestId("name-input")
        const email = getByTestId("email-input")
        const message = getByTestId("message-textarea")

        cy.get(`#contactForm ${heading}`).should("exist").and("be.visible")
        cy.get(`#contactForm ${para}`).should("exist").and("be.visible")
        cy.get(`#contactForm ${name}`).should("exist").and("be.visible")
        cy.get(`#contactForm ${email}`).should("exist").and("be.visible")
        cy.get(`#contactForm ${message}`).should("exist").and("be.visible")
    })
    it("types into inputs and validtes", () => {
        const name = getByTestId("name-input")
        const email = getByTestId("email-input")
        const message = getByTestId("message-textarea")
        cy.get(`#contactForm ${name}`).type("name123", {force: true}).should("have.value", "name123")
        cy.get(`#contactForm ${email}`).type("name123@xyz.com", {force: true}).should("have.value", "name123@xyz.com")
        cy.get(`#contactForm ${message}`).type("This is a message").should("have.value", "This is a message")
    })
})