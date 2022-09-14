/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000'

const getByTestId = id => `[data-testid=${id}]`

describe("tests product page", () => {
    before(() => cy.visit(baseUrl + "/products"))

    it("tests our products section", () => {
        const section = getByTestId("productsSection")
        const heading = getByTestId("heading")
        const para = getByTestId("para")
        const prductDetail = getByTestId("prductDetail")
        const bgImg = getByTestId("bgImg")

        cy.get(section).within(() => {
            cy.get(heading).should("exist").and("be.visible").and("have.length", 1)
            cy.get(para).should("exist").and("be.visible").and("have.length", 1)
            cy.get(bgImg).should("have.length", 2)

            cy.get(prductDetail).should("exist").and("be.visible").and("have.length.greaterThan", 1)
            cy.get(prductDetail).within(() => {
                cy.get("h4").should("exist").and("be.visible")
                cy.get("p").should("exist").and("be.visible")
                cy.get("button").should("exist").and("be.visible").first().and("have.text", "Explore More")
            })
        })
    })
    it("tests trusted customers section", () => {
        const section = getByTestId("customersSection")
        const heading = getByTestId("heading")
        const para = getByTestId("para")
        const customerBox = getByTestId("customerBox")

        cy.get(section).scrollIntoView()
        cy.get(section).within(() => {
            cy.get(heading).should("exist").and("be.visible").and("have.length", 1)
            cy.get(para).should("exist").and("be.visible").and("have.length", 1)
            cy.get(customerBox).should("exist").and("be.visible").and("have.length.greaterThan", 1)
        })
    })
})