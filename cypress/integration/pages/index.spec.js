/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000/'

const getByTestId = id => `[data-testid=${id}]`

describe("it tests banner", () => {
    before(() => cy.visit(baseUrl))
    
    it("tests if banner section exists", () => {
        cy.get(getByTestId("banner")).should("exist").and("be.visible")
    })

    it("tests if banner image exts and visible", () => {
        const banner = getByTestId("banner")
        const bannerImg = getByTestId("bannerImg")
        cy.get(`${banner} ${bannerImg}`).should("exist").and("be.visible")
    })

    it("tests if banner headings and button exists and is visible", () => {
        const banner = getByTestId("banner")
        cy.get(`${banner} h1`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${banner} h2`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${banner} h3`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${banner} button`).should("exist").and("be.visible").and("have.length", 1)
    })
})

describe("tests who are we section", () => {
    before(() => cy.visit(baseUrl))

    it("tests if sections renders", () => {
        cy.get(getByTestId("whoAreWeSection")).scrollIntoView().should("exist").and("be.visible")
    })

    it("tests if section heading and paragraph exists and are visible", () => {
        const section = getByTestId("whoAreWeSection")
        const heading = getByTestId("heading")
        const para = getByTestId("para")

        cy.get(section).scrollIntoView()
        cy.get(`${section} ${heading}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${para}`).should("exist").and("be.visible").and("have.length", 1)
    })

    it("tests cloud/bubble image on web version", () => {
        const section = getByTestId("whoAreWeSection")
        const bannerImg = getByTestId("bannerImg")
        const bannerImgResponsive = getByTestId("bannerImgResponsive")

        cy.get(section).scrollIntoView()
        cy.get(`${section} ${bannerImg}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${bannerImgResponsive}`).should("not.be.visible")
    })

    it("tests cloud/bubble image on mobile version", () => {
        cy.viewport(400, 615)
        const section = getByTestId("whoAreWeSection")
        const bannerImg = getByTestId("bannerImg")
        const bannerImgResponsive = getByTestId("bannerImgResponsive")

        cy.get(section).scrollIntoView()
        cy.get(`${section} ${bannerImgResponsive}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${bannerImg}`).should("not.be.visible")
    })
})

describe("tests Our Services section", () => {
    before(() => cy.visit(baseUrl))

    it("tests if sections renders", () => {
        cy.get(getByTestId("ourServicesSection")).scrollIntoView().should("exist").and("be.visible")
    })

    it("tests if section heading and paragraph exists and are visible", () => {
        const section = getByTestId("ourServicesSection")
        const heading = getByTestId("heading")
        const para = getByTestId("para")

        cy.get(section).scrollIntoView()
        cy.get(`${section} ${heading}`).should("exist").and("be.visible").and("have.length", 1)
        cy.get(`${section} ${para}`).should("exist").and("be.visible").and("have.length", 1)
    })

    describe("web version", () => {
        it("tests for services grid container and carausel must not exist", () => {
            const section = getByTestId("ourServicesSection")
            const servicesContainer = getByTestId("servicesContainer")
            const servicesCaraousel = getByTestId("servicesCaraousel")
    
            cy.get(section).scrollIntoView()
            cy.get(servicesContainer).should("exist").and("be.visible").and("have.length", 1)
            cy.get(servicesCaraousel).should("not.exist")
        })
    
        it("tests for services detail boxes", () => {
            const section = getByTestId("ourServicesSection")
            const serviceDetailBox = getByTestId("serviceDetailBox")
    
            cy.get(section).scrollIntoView()
            cy.get(serviceDetailBox).should("exist").and("be.visible").and("have.length.greaterThan", 2)
        })
    })

    it("mobile version -> tests for services carousel and grid container must not exist", () => {
        cy.viewport(400, 615)
        const section = getByTestId("ourServicesSection")
        const servicesContainer = getByTestId("servicesContainer")
        const servicesCaraousel = getByTestId("servicesCaraousel")

        cy.get(section).scrollIntoView()
        cy.get(servicesCaraousel).should("exist").and("be.visible").and("have.length", 1)
        cy.get(servicesContainer).should("not.exist")
    })
})

describe("our products section", () => {
    before(() => cy.visit(baseUrl))
    beforeEach(() => {
        const section = getByTestId("ourProductsSection")
        cy.get(section).should("exist").and("be.visible").scrollIntoView()
    })

    it("checks for heading", () => {
        const section = getByTestId("ourProductsSection")
        const heading = getByTestId("heading")
        cy.get(`${section} ${heading}`).should("exist").and("be.visible").and("have.length", 1)
    })

    it("checks grid container in web version", () => {
        const section = getByTestId("ourProductsSection")
        const product = getByTestId("product")
        const productHeading = getByTestId("productHeading")
        const productPara = getByTestId("productPara")
        const productNumber = getByTestId("productNumber")
        const productsCarousel = getByTestId("productsCarousel")
        cy.get(productsCarousel).should("not.exist")
        cy.get(`${section} ${product}`).should("exist").and("have.length.greaterThan", 1)
        cy.get(productHeading).should("exist").and("be.visible")
        cy.get(productPara).should("exist").and("be.visible")
        cy.get(productNumber).should("exist").and("be.visible")
    })

    it("checks product carousel in mobile version", () => {
        cy.viewport(400, 615)
        const product = getByTestId("product")
        const productsCarousel = getByTestId("productsCarousel")
        cy.get(productsCarousel).should("exist").and("be.visible").and("have.length", 1)
        cy.get(product).should("not.exist")
    })
})