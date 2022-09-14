/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000'

const getByTestId = id => `[data-testid=${id}]`

describe("it tests careers page", () => {
    before(() => cy.visit(baseUrl + '/careers'))

    it('does basic checks', () => {
        const heading = getByTestId("heading")
        const para = getByTestId("para")
        const gridBox = getByTestId("gridBox")
        const jobOpenings = getByTestId("jobOpenings")

        cy.get(getByTestId("pageHeadingContainer")).should("exist").and("be.visible").and("have.length", 1).within(() => {
            cy.get(heading).should("exist").and("be.visible").and("have.length", 1)
            cy.get(para).should("exist").and("be.visible").and("have.length", 1)
        })
        cy.get(gridBox).should("exist").and("be.visible").and("have.length", 2).first().scrollIntoView().within(() => {
            cy.get(getByTestId("grid-heading")).and("be.visible").and("have.length", 1)
            cy.get(getByTestId("grid-para")).and("be.visible").and("have.length", 1)
            cy.get(getByTestId("grid-img")).and("be.visible").and("have.length", 1)
        })
        cy.get(jobOpenings).scrollIntoView().should("exist").and("be.visible").and("have.length", 1).within(() => {
            cy.get(getByTestId("jobOpeningsHeadingContainer")).should("exist").and("be.visible").and("have.length", 1).within(() => {
                cy.get(heading).should("exist").and("be.visible").and("have.length", 1)
                cy.get(para).should("exist").and("be.visible").and("have.length", 1)
            })
            cy.get(getByTestId("jobOpening-accordian")).should("exist").and("be.visible").and("have.length", 3).first().within(() => {
                cy.get(heading).should("exist").and("be.visible").and("have.length", 1)
                cy.get(getByTestId("jobOpening-details")).should("exist").and("be.visible").and("have.length", 1)
            })
            cy.get(getByTestId("jobOpening-accordian")).last().scrollIntoView().within(() => {
                cy.get(heading).should("exist").and("be.visible").and("have.length", 1)
                cy.get(getByTestId("jobOpening-details")).should("not.exist")
            })
        })
    })

    it("clicks the accordian", () => {
        const accordian = getByTestId("jobOpening-accordian")

        cy.get(accordian).last().scrollIntoView().within(() => {
            const title = getByTestId("jobOpening-accordianTitle")
            const details = getByTestId("jobOpening-details")
            cy.get(title).click({force: true})
            cy.get(details).should("exist").and("be.visible").and("have.length", 1)
        })
        cy.get(accordian).first().scrollIntoView().within(() => {
            const details = getByTestId("jobOpening-details")
            cy.get(details).should("not.exist")
        })
    })
})