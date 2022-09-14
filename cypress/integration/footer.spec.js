/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000/'

const getByTestId = id => `[data-testid=${id}]`

describe("it tests footer", () => {
    before(() => {
        cy.visit(baseUrl)
        cy.get("#footer").scrollIntoView().should("exist").and("be.visible")
    })
    it("tests heading and paragrah and inputs", () => {
        const logo = getByTestId("logo")
        const socialAccountsContainer = getByTestId("socialAccountsContainer")
        const Home = getByTestId("footer-Home")
        const About = getByTestId("footer-About")
        const Services = getByTestId("footer-Services")
        const Products = getByTestId("footer-Products")
        const bottomStrip = getByTestId("footer-bottomStrip")
        const addressDetails = getByTestId("footer-addressDetails")

        cy.get(`#footer ${logo}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`#footer ${socialAccountsContainer}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`#footer ${Home}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`#footer ${About}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`#footer ${Services}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`#footer ${Products}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`#footer ${addressDetails}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(bottomStrip).should("exist").and("be.visible").and("have.length", 1)
    })
    it("should navigate to About page on clicking about", () => {
        const About = getByTestId("footer-About")

        cy.get(About).click()
        cy.url().should("include", "/about")
    })
    it("should navigate to services page on clicking about", () => {
        const Services = getByTestId("footer-Services")

        cy.get(Services).click()
        cy.url().should("include", "/services")
    })
    it("should navigate to products page on clicking about", () => {
        const Products = getByTestId("footer-Products")

        cy.get(Products).click()
        cy.url().should("include", "/products")
    })
    it("should navigate to home page on clicking about", () => {
        const Home = getByTestId("footer-Home")

        cy.get(Home).click()
        cy.url().should("include", "/")
    })
})