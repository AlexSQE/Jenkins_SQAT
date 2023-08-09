/// <reference types = "cypress"/>
import HomePage from '../../pageObjects/HomePage'
import BuildHistoryPage from '../../pageObjects/BuildHistoryPage'
import IconLegendsPage from '../../pageObjects/IconLegendsPage'
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import iconLegendsData from '../../fixtures/pom_fixtures/iconLegends.json'
import homePageData from "../../fixtures/pom_fixtures/homePage.json"

describe('iconLegends', () => {
    const homePage = new HomePage();
    const buildHistory = new BuildHistoryPage();
    const iconLegends = new IconLegendsPage();

    it('AT_20.05_003 | Icon legend`s quantity by groups', () => {
        homePage.clickBuildHistoryLink();
        buildHistory.clickIconLegendsButton();
        
        iconLegends
            .getStatusIconsGroup()
            .should('have.length', iconLegendsData.statusDescriptions.length);
        iconLegends
            .getProjectHealthIconsGroup()
            .should('have.length', iconLegendsData.projectHealthDescriptions.length)
    })

    it("AT_20.05.005 | Verify User is able to see Project Health statuses", function () {
        homePage.clickBuildHistoryLink();
        buildHistory.clickIconLegendsButton();

        iconLegends
            .getProjectHealthGroupHeader()
            .should("be.visible")
            .and("have.text", iconLegendsData.headers[1]);

        iconLegends.getProjectHealthStatuses().each(($el, idx) => {
            cy.wrap($el)
                .invoke("text")
                .then((text) => {
                    expect(text.trim()).to.includes(
                        iconLegendsData.projectHealthDescriptions[idx]
                    );
                });
        });
    });

    it("AT_20.05.006.01 | Icons visibility verification - Status", function () {
        homePage
            .clickBuildHistoryLink()
            .clickIconLegendsButton()

            .getStatusIcons()
            .each(($el) => {
                cy.wrap($el).should('be.visible');
            })          
    })
    
    it("AT_20.05.006.02 | Icons visibility verification - Project Health", function () {
        homePage
            .clickBuildHistoryLink()
            .clickIconLegendsButton()

            .getProjectHealthIcons()
            .each(($el) => {
                cy.wrap($el).should('be.visible');
            })
    })

    it("AT_20.05.01 | Dashboard Icon legend | Verify Icon legend button redirects to Icon legend Page", () => {
      cy.createFreestyleProject(newItemPageData.freestyleProjectName);

      homePage
        .clickIconLegendButton()
        .verifyIconLegendPageTitle()
        .getIconLegendPageUrl()
        .should("contain", iconLegendsData.iconLegendPageUrl);
    });

    it("AT_20.05.07 | Dashboard Icon legend | Verify visibility of The Icon legend button on the Dashboard", () => {
      cy.createFreestyleProject(newItemPageData.freestyleProjectName);

      homePage
        .getIconLegendButton()
        .should("be.visible")
        .and("have.text", homePageData.IconLegendName)
    });

    it("AT_20.05.08 | Dashboard Icon legend | Verify The Icon legend button is hoverable", () => {
      cy.createFreestyleProject(newItemPageData.freestyleProjectName);

        homePage
            .getIconLegendButton()
            .should("have.css", "cursor", "pointer");
    });

});