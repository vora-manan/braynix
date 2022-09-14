/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000'

const getByTestId = id => `[data-testid=${id}]`

describe("tests services page", () => {
    before(() => cy.visit(baseUrl + '/services'))

    it('tests renders', () => {
        const servicesSection = getByTestId("servicesSection")
        const pageHeading = getByTestId("heading")
        const pagePara = getByTestId("para")
        const serviceCards = getByTestId("service-card")
        const serviceCardNumber = getByTestId("service-card-number")

        cy.get(servicesSection).within(() => {
            cy.viewport(1080, 720)
            cy.get(pageHeading).should("exist").and("be.visible").and("have.length", 1)
            cy.get(pagePara).should("exist").and("be.visible").and("have.length", 1)

            cy.get(serviceCards).should("exist").and("have.length.greaterThan", 1)
            cy.get(serviceCardNumber).should("exist").and("have.length.greaterThan", 1)

            cy.get(`${serviceCards} h4`).should("not.be.visible")
            cy.get(`${serviceCards} h3`).should("exist").and("have.length.greaterThan", 1)
            cy.get(`${serviceCards} p`).should("exist").and("have.length.greaterThan", 1)
            cy.get(`${serviceCards} img`).should("exist").and("have.length.greaterThan", 1)

            cy.get(`${serviceCards} h3`).should("be.visible")
            cy.get(`${serviceCards} p`).should("be.visible")
            cy.get(`${serviceCards} img`).should("be.visible")
        })
    })

    it('tests in responsive state', () => {
        cy.viewport(640, 720)
        const servicesSection = getByTestId("servicesSection")
        const serviceCards = getByTestId("service-card")

        cy.get(servicesSection).within(() => {
            cy.get(serviceCards).should("exist").and("have.length.greaterThan", 1)

            cy.get(`${serviceCards} h3`).should("not.be.visible")
            cy.get(`${serviceCards} h4`).should("exist").and("have.length.greaterThan", 1)
        })
    })
})