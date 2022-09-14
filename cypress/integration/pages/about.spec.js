/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000/about'

const getByTestId = id => `[data-testid=${id}]`

describe("tests about page", () => {
    before(() => {
        cy.visit(baseUrl)
    })

    it("tests headig, para, butons , card of who are we section", () => {
        cy.viewport(1040, 615)
        const section = getByTestId("whoAreWeSection")
        const heading = getByTestId("heading")
        const para = getByTestId("para")
        const card = getByTestId("card")
       
        cy.get(section).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${heading}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${para}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${card}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} button`).first().then($btn => {
            const firstBtnText = $btn.text()
            cy.get(`${section} ${card} h3`).should("exist").and("be.visible").and("have.length", 1).and("have.text", firstBtnText)
        })
    //    cy.get(`${section} button`).last().click()
    //    cy.get(`${section} button`).last().then($btn => {
    //         const lastBtnText = $btn.text()
    //         cy.get(`${section} ${card} h3`).should("exist").and("be.visible").and("have.length", 1).and("have.text", lastBtnText)
    //     })
    })
    it("tests everything of team section", () => {
        cy.viewport(1040, 615)
        const section = getByTestId("teamSection")
        const heading = getByTestId("heading")
        const para = getByTestId("para")
        const card = getByTestId("card")
        const role = getByTestId("member-position")
        const roleInCard = getByTestId("memberCard-Role")

        cy.get(section).scrollIntoView()
        cy.get(section).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${heading}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${para}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${card}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${role}`).first().then($el => {
            const memberRole = $el.text()
            cy.get(roleInCard).should("have.text", memberRole)
        })
        cy.get(`${section} button`).last().within(() => cy.get(role).should("not.exist"))
        cy.get(`${section} button`).last().click({force: true})
        cy.get(`${section} button`).first().within(() => cy.get(role).should("not.exist"))
        cy.get(`${section} ${role}`).last().then($el => {
            const memberRole = $el.text()
            cy.get(roleInCard).should("have.text", memberRole)
        })
    })
})