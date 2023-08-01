/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import newItemPage from "../../fixtures/pom_fixtures/newItemPage.json"
import multiConfProjectPageData from "../../fixtures/pom_fixtures/multiConfProjectPage.json";
import multiConfigurationProjectConfigurePage from "../../fixtures/pom_fixtures/multiConfigurationProjectConfigurePage.json"
import MultiConfigurationProjectPage from "../../pageObjects/MultiConfigurationProjectPage";
import headerAndFooter from "../../pageObjects/HeaderAndFooter";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";

describe("multiConfigurationProject", () => {
    const homePage = new HomePage();
    const multiConfigurationProjectPage = new MultiConfigurationProjectPage();
    const headerAndFooter = new HeaderAndFooter();

    it("AT_14.07.01 | Verify Multi-configuration project deleted within itself", () => {
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
            .clickMultiConfigProjectNameLink(newItemPageData.multiConfigurationProjectName)
            .clickDeleteSideMenuLink()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.07.02 | Delete Multi-configuration project from dropdown menu inside MC Project', () => {
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
            .selectDeleteMultiConfProjectDrpDwnMenuBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_14.06.003 | Rename Multi-configuration project with the current name', () =>{
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.multiConfigurationProjectName)
            .selectRenameMultiConfProjectDrpDwnMenuBtn()
            .typeMultiConfProjectNameInputField(newItemPageData.multiConfigurationProjectName)
            .clickMultiConfProjectRenameBtn()
            .getErrorTextMessage()
            .should('contain.text', multiConfProjectPageData.currentNameMsg)
    })

    it('AT_14.06.004 | Multi-configuration project>Rename Multi-configuration project', () => {
        cy.createMultiConfigurationProject(newItemPageData.multiConfigurationProjectName);
        homePage
        .hoverProjectNameLink()
        .clickProjectDrpDwnBtn()
        .selectRenameMultiConfProjectDrpDwnMenuBtn()
        .typeMultiConfProjectNameInputField(newItemPageData.newMultiConfigurationProjectName)
        .clickRenameBtnMultiConfProject()
        .clickGoHome()
        .getNameMulticonfigProjectName()
        .should('have.text', newItemPageData.newMultiConfigurationProjectName)
    })

    it('AT_14.04_001 | Multi-configuration project verify adding description', () => {
        homePage
        .clickCreateJobLink()
        .typeNewItemNameInputField(newItemPageData.multiConfigurationProjectName)
        .selectMultiConfigurationProjectItem()
        .clickOkBtnAndGoMultiConfProjectConfig()
        .typeDescriptionInputField()
        .clickSaveButton()
        .getDescriptionField().should('have.text',multiConfigurationProjectConfigurePage.descriptionText);
    })

    it('AT_14.02_001 |MultiConfigurationProject | Verify that the user is able to Disable Project', () => {
        cy.createMultiConfigurationProject(newItemPage.multiConfigurationProjectName);
        
        homePage
        .clickMultiConfigProjectNameLink(newItemPageData.multiConfigurationProjectName)
        .clickDisableProjectBtn()
        .getDisableProjectMsg().should('contain', multiConfProjectPageData.disableProjectMsg)
        multiConfigurationProjectPage
        .getEnableBtn().should('be.visible').and('have.text', multiConfProjectPageData.enableBtnText);
    })

    it('AT_14.02_002 |MultiConfigurationProject | Verify that the user is able to Enable Disabled Project', () => {
        cy.createMultiConfigurationProject(newItemPage.multiConfigurationProjectName);
        homePage
        .clickMultiConfigProjectNameLink(newItemPageData.multiConfigurationProjectName)
        .clickDisableProjectBtn();
        headerAndFooter
        .clickJenkinsHomeLink();

        homePage
        .clickMultiConfigProjectNameLink(newItemPageData.multiConfigurationProjectName)
        .clickEnableBtn()
        .getDisableProjectMsg().should('not.exist', multiConfProjectPageData.disableProjectMsg)
        multiConfigurationProjectPage
        .getDisableProjectBtn().should('be.visible').and('have.text', multiConfProjectPageData.disableBtnText);
    })

    it('AT_14.07.04 | Delete Multi-configuration project within breadcrums menu', () => {
        cy.createMultiConfigurationProject(newItemPage.multiConfigurationProjectName);
        
        homePage
        .clickMultiConfigProjectNameLink(newItemPageData.multiConfigurationProjectName)
        .clickMultiConfigProjectDropdwnBreadcrumb() 
        .selectDeleteBtnMultiConfigProjectDropdownBreadcrumb()
        .getProjectTable()
        .should('not.exist');
    })

    it('AT_14.03.01 | <Multi-configuration project> Verify possibility to add description by clicking Add Description', () => {
        cy.createMultiConfigurationProject(newItemPage.multiConfigurationProjectName);

        homePage
        .clickMultiConfigProjectNameLink(newItemPageData.multiConfigurationProjectName)
        .clickAddDescriptionBtn()
        .typeDescriptionInputField(multiConfigurationProjectConfigurePage.descriptionText)
        .clickSaveDescriptionBtn()
        .getDescriptionField().should('have.text', multiConfigurationProjectConfigurePage.descriptionText)
    })

    multiConfProjectPageData.invalidCharacters.forEach((invalidCharacters) =>{
    it(`AT_14.06.01 | Rename Multi-configuration project by entering invalid symbols ${invalidCharacters}`, () => {     
        cy.createMultiConfigurationProject(newItemPage.multiConfigurationProjectName);
        
        homePage
        .clickMultiConfigProjectNameLink(newItemPageData.multiConfigurationProjectName)
        .clickRenameBtnMultiConfPrj()
        .typeMultiConfProjectNameInputField(invalidCharacters)
        .clickMultiConfProjectRenameBtn()
        .getErrorTextMessage()
        .should('contain', multiConfProjectPageData.invalidCharactersMsg)
    })
 }) 

})