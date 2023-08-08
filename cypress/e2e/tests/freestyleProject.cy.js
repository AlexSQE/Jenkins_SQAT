/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import FreestyleProjectRenamePage from "../../pageObjects/FreestyleProjectRenamePage";
import FreestyleProjectPage from "../../pageObjects/FreestyleProjectPage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import freestyleProjectPageData from "../../fixtures/pom_fixtures/freestyleProjectPage.json"
import DashboardBreadcrumbs from "../../pageObjects/DashboardBreadcrumbs";
import homePageData from "../../fixtures/pom_fixtures/homePage.json";
import freestyleProjectRenamePageData from "../../fixtures/pom_fixtures/freestyleProjectRenamePage.json";

describe('freestyleProject', () => {

    const homePage = new HomePage();
    const freestyleProjectPage = new FreestyleProjectPage();
    const freestyleProjectRenamePage = new FreestyleProjectRenamePage();
    const dashboardBreadcrumbs = new DashboardBreadcrumbs();

    it('AT_12.03_007 | Rename freestyle project using side menu', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .clickRenameSideMenuLink()
            .typeNewNameInputFild(freestyleProjectPageData.freestyleProjectNewName)
            .clickRenameBtn()
            .getFreestyleProjectHeader()
            .should('have.text', freestyleProjectPageData.headerText + freestyleProjectPageData.freestyleProjectNewName)
    });

    it('AT_12.06_001 | Freestyle project "Disable project" option exists', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .getFreestyleProjectHeader()
            .should('include.text', newItemPageData.freestyleProjectName)

        freestyleProjectPage
            .getDisableProjectBtn()
            .should('have.text', 'Disable Project')
            .and('be.visible')
            .and('be.enabled')
    });

    it('AT_12.03_002 | Verify that using the same name an error message is appeared', function () {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName)
        homePage
            .clickFreestyleProjectNameLink()
            .clickRenameSideMenuLink()
            .getNewNameInputFild()
            .should('have.value', newItemPageData.freestyleProjectName)
        freestyleProjectRenamePage
            .clickRenameBtn()

        freestyleProjectRenamePage
            .getErrorTitle()
            .should('have.text', freestyleProjectPageData.errorMessage)
            .and('be.visible')
        freestyleProjectRenamePage
            .getErrorMessage()
            .should('have.text', freestyleProjectPageData.message)
            .and('be.visible')
    });

    it('AT 12.02.006 | Delete Freestyle project using dropdown menu', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);

        homePage
            .clickProjectDrpDwnBtn()
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.freestyleProjectName)
            .selectDeleteMultiConfProjectDrpDwnMenuBtn()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_12.06_002 | Freestyle project. "This project is currently disabled" notification appears after clicking "Disable project" button in the project profile', () => {
        
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .getFreestyleProjectHeader()
            .should('include.text', newItemPageData.freestyleProjectName)

        freestyleProjectPage
            .clickDisableProjectBtn()
            .getDisabledProgectWarning()
            .should('be.visible')
            .and('include.text', freestyleProjectPageData.disabledProjectNotify)
    });

    it('AT_12.06_003 | Freestyle project. Project Status is changed to "Disabled" on Dashboard after clicking "Disable project" button', () => {
        homePage
            .clickNewItemSideMenuLink()
            .typeNewItemNameInputField(newItemPageData.freestyleProjectName)
            .selectFreestyleProjectItem()
            .clickOkBtnAndGoFreestyleProjectConfig()
            .clickSaveBtnAndGoFreestyleProject()
            .getFreestyleProjectHeader()
            .should('include.text', newItemPageData.freestyleProjectName)
        freestyleProjectPage
            .clickDisableProjectBtn()
        dashboardBreadcrumbs
            .clickDashboardLinkAndGoHomePage()
            .getProjectDisableIcon(newItemPageData.freestyleProjectName)
            .should('be.visible')
            .and('have.attr', 'title', 'Disabled')
    });

    it('AT_12.07_001 | Freestyle project> Edit description> Verify possiblity to type the text', function () {
  
        cy.createFreestyleProject(newItemPageData.freestyleProjectName)

        homePage
            .clickFreestyleProjectNameLink()
            .clickAddAndEditDescriptoinBtn()
            .typeDescriptionToInputField(freestyleProjectPageData.description)
            .clickSaveDescriptionBtn()
            .clickAddAndEditDescriptoinBtn()
            .clearDescriptionInputField()
            .typeDescriptionToInputField(freestyleProjectPageData.editDescription)
            .getDescriptionInputField()
            .should('have.value', freestyleProjectPageData.editDescription)
    });
        
    it('AC_12.01_007 | Freestyle project>check that the options is visible of the left side panel', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName)
        homePage
            .clickFreestyleProjectNameLink(newItemPageData.freestyleProjectName)
            .checkLengthOfOptionsSidePanel()
            .getSidePanelOptions().each(($el, idx) => {
                expect($el).to.include.text(freestyleProjectPageData.sidePanel[idx])})
    });

    it('AT_12.02_008 | Delete created project with inside menu', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName)

        homePage
            .clickFreestyleProjectNameLink()
            .clickDeleteSideMenuLink()
            .getProjectTable()
            .should('not.exist');
    });

    it('AT_20.03_006 | Verify length and name items of dropdown menu of the Freestyle project', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName)

        freestyleProjectPage
            .clickFreestyleProjectDrpDwnMenu()
            .checkFreestyleProjectDrpDwnMenuItemsName()
            .getFrestyleProjectDrpDwmMenuList()
            .should('have.length', freestyleProjectPageData.freestyleDropdownItems.length)
    })

    it('AT_12.02_005| Delete Freestyle project using dropdown menu_User_clicks_Cancel', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName)

        homePage
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.freestyleProjectName)
            .selectDeleteDrpDwnLink()
            .clickWindowConfirmCancel(homePageData.messages.windowConfirm)
        homePage       
            .getProjectTable()
            .should('contain', newItemPageData.freestyleProjectName)
    });

    it('AT_12.03_001 | Verify renaming freestyle project using dropdown menu', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName)

        homePage
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.freestyleProjectName)
            .clickProjectNameDropdownRenameLink()
            .typeNewNameInputFild(freestyleProjectPageData.freestyleProjectNewName)
            .clickRenameBtn()
            .getFreestyleProjectHeader()
            .should('have.text', freestyleProjectPageData.headerText + freestyleProjectPageData.freestyleProjectNewName)
    });

    it('AT_12.03.08 | Freestyle Project > Rename project from Project page using breadcrumbs dropdown menu', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);

        homePage
            .clickFreestyleProjectNameLink()
            .clickBreadcrumbsFreestyleProjectDrpDwnBtn()
            .selectRenameBreadcrumbsFreestyleProjectDrpDwnLink()
            .typeNewNameInputFild(freestyleProjectPageData.freestyleProjectNewName)
            .clickRenameBtn()
            .getFreestyleProjectHeader()
            .should('have.text', freestyleProjectPageData.headerText + freestyleProjectPageData.freestyleProjectNewName)
    });

    it('AT_12.03.09 | <Freestyle project> "Rename page" contains input field with the current name of the project', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);

        homePage
            .clickFreestyleProjectNameLink()
            .clickRenameSideMenuLink()
            .getNewNameInputFild().should('have.attr', 'value', newItemPageData.freestyleProjectName)
    });

    it('AT_12.03.10 | <Freestyle project> "Rename page" contains the text “The new name is the same as the current name.”', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);

        homePage
            .clickFreestyleProjectNameLink()
            .clickRenameSideMenuLink()
            .getRenameWarningMessage()
            .should('be.visible').and('have.text', freestyleProjectRenamePageData.freestyleProjectRenameWarningMessage)
    });

    freestyleProjectRenamePageData.invalidCharacters.forEach((invalidCharacters) => {
        it('AT_12.03.11 | <Freestyle project> Unable to rename project using invalid symbols', () => {
            cy.createFreestyleProject(newItemPageData.freestyleProjectName);

            homePage
                .clickFreestyleProjectNameLink()
                .clickRenameSideMenuLink()
                .typeNewNameInputFild(invalidCharacters)
                .clickRenameBtn();

            freestyleProjectRenamePage
                .getErrorMessage()
                .should('be.visible').and('contain', freestyleProjectRenamePageData.invalidCharacterMessage)
        });
    });

    it('AT_12.01.01 | Freestyle project > Navigate to project Status page from Homepage', () => {
        cy.createFreestyleProject(newItemPageData.freestyleProjectName);

        homePage
            .clickFreestyleProjectNameLink()
            .verifyFreestyleProjectStatusPageURL()
            .getFreestyleProjectHeader()
            .should('have.text', freestyleProjectPageData.headerText + newItemPageData.freestyleProjectName)
    });
});
