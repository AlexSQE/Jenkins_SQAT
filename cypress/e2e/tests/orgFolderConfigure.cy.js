import HomePage from '../../pageObjects/HomePage';
import newItemPageData from '../../fixtures/pom_fixtures/newItemPage.json';
import OrgFolderConfigurePageData from '../../fixtures/pom_fixtures/orgFolderConfigurePage.json';
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import OrgFolderPage from "../../pageObjects/OrgFolderPage";
import OrgFolderConfigurePage from "../../pageObjects/OrgFolderConfigurePage";


describe('orgFolderConfigure', () => {
    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();
    const orgFolderPage = new OrgFolderPage();
    const orgFolderConfigurePage = new OrgFolderConfigurePage();

    it('AT_17.01.001 | Change status folder to disable', () => {
        cy.createOrgFolderProject(newItemPageData.orgFolderName)
         
        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
            .clickConfigureTheProjectLink()
            .clickEnableDisabledToggle()
            .clickSaveBtnAndGoOrgFolder()
            .getEnableProjectForm()
            .should('contain.text', OrgFolderConfigurePageData.disableMessage);
    });

    it('AT_17.01.002 | Add description to the Organization Folder via Configure the project', () => {
        cy.createOrgFolderProject(newItemPageData.orgFolderName)

        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
            .clickConfigureTheProjectLink()
            .addDescription(OrgFolderConfigurePageData.description)
            .clickSaveBtnAndGoOrgFolder()
            .getDescription()
            .should('contain.text', OrgFolderConfigurePageData.description);
    });

    it('AT_17.01.003 | Add Display Name to the Organization Folder via Configure', () => {
        cy.createOrgFolderProject(newItemPageData.orgFolderName)

        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
            .clickConfigureTheProjectLink()
            .addDisplayName(OrgFolderConfigurePageData.displayName)
            .clickSaveBtnAndGoOrgFolder()
            .getOrgFolderHeader()
            .should('contain.text', OrgFolderConfigurePageData.displayName);
    });

    it('AT_17.01.04 | <Organization folder > Verify the user`s ability to enable the current Organization folder via Configure', () => {
        cy.createOrgFolderProject(newItemPageData.orgFolderName)  
        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
            .clickConfigureTheProjectLink()
            .clickEnableDisabledToggle()
            .clickSaveBtnAndGoOrgFolder()
        headerAndFooter
            .clickJenkinsHomeLink()

        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
        orgFolderPage
            .clickConfigureInSideMenuLinkOrgFolder()
        orgFolderConfigurePage
            .clickEnableDisabledToggle()
            .clickSaveBtnAndGoOrgFolder()
        orgFolderPage
            .verifyDissableOrgFolderBtn()
    })
});
