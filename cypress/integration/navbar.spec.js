/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000/'

const getByTestId = id => `[data-testid=${id}]`

describe("it tests Navbar", () => {
    describe("on web version", () => {
        beforeEach(() => {
            cy.visit(baseUrl)
        })
        it("renders navbar elements", () => {
            cy.get(getByTestId("logo-navbar")).should("exist").and("be.visible")
            cy.get(getByTestId("home")).should("exist").and("be.visible")
            cy.get(getByTestId("about")).should("exist").and("be.visible")
            cy.get(getByTestId("products")).should("exist").and("be.visible")
            cy.get(getByTestId("services")).should("exist").and("be.visible")
            cy.get(getByTestId("contact")).should("exist").and("be.visible")
            cy.get(getByTestId("careers")).should("exist").and("be.visible")
            cy.get(getByTestId("menuButton")).should("not.be.visible")
        })
        it("navigates to about page", () => {
            cy.get(getByTestId("about")).click()
            cy.url().should("include", "/about")
        })
        it("navigates to products page", () => {
            cy.get(getByTestId("products")).click()
            cy.url().should("include", "/products")
        })
        it("navigates to services page", () => {
            cy.get(getByTestId("services")).click()
            cy.url().should("include", "/services")
        })
        it("navigates to careers page", () => {
            cy.get(getByTestId("careers")).click()
            cy.url().should("include", "/careers")
        })
        it("if on careers page, clicking to contact must navigate to homepage", () => {
            cy.get(getByTestId("careers")).click()
            cy.get(getByTestId("contact")).click()
            cy.url().should("include", "/")
        })
        it("if on different page, clicking on logo must navigate to homepage", () => {
            cy.get(getByTestId("about")).click()
            cy.get(getByTestId("logo-navbar")).click()
            cy.url().should("include", "/")
        })
        it("if on different page, clicking on home button on navbar must navigate to homepage", () => {
            cy.get(getByTestId("services")).click()
            cy.get(getByTestId("home")).click()
            cy.url().should("include", "/")
        })
    })

    describe("when responsive", () => {
        before(() => cy.visit(baseUrl))
        beforeEach(() => {
            cy.viewport(400, 615)
        })

        it("renders ", () => {
            cy.get(getByTestId("logo-navbar")).should("exist").and('be.visible')
            cy.get(getByTestId("menuButton")).should("exist").and('be.visible')
            cy.get(getByTestId("navbar-menu")).should("not.exist")
            cy.get(getByTestId("home")).should("not.exist")
            cy.get(getByTestId("about")).should("not.exist")
            cy.get(getByTestId("products")).should("not.exist")
            cy.get(getByTestId("services")).should("not.exist")
            cy.get(getByTestId("contact")).should("not.exist")
            cy.get(getByTestId("careers")).should("not.exist")
        })
        it("clicks menuButton and does checks", () => {
            cy.get(getByTestId("menuButton")).click()
            cy.get(getByTestId("navbar-menu")).should("exist").and("be.visible")
            cy.get(getByTestId("menuButton")).should("not.be.visible")
            cy.get(getByTestId("closeButton")).should("exist").and("be.visible")
            cy.get(getByTestId("home")).should("exist").and("be.visible")
            cy.get(getByTestId("about")).should("exist").and("be.visible")
            cy.get(getByTestId("products")).should("exist").and("be.visible")
            cy.get(getByTestId("services")).should("exist").and("be.visible")
            cy.get(getByTestId("contact")).should("exist").and("be.visible")
            cy.get(getByTestId("careers")).should("exist").and("be.visible")
        })
        it("clicks menuButton and then clicks close button icon to close it and menu must not exist then", () => {
            cy.get(getByTestId("menuButton")).click()
            cy.get(getByTestId("navbar-menu")).should("exist").and("be.visible")
            cy.get(getByTestId("menuButton")).should("not.be.visible")
            cy.get(getByTestId("closeButton")).should("exist").and("be.visible").click()
            cy.get(getByTestId("navbar-menu")).should("not.exist")
            cy.get(getByTestId("menuButton")).should("be.visible")
        })
    })
})