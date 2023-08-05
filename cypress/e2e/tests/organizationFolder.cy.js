import HomePage from "../../pageObjects/HomePage";
import newItemPageData from "../../fixtures/pom_fixtures/newItemPage.json";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import resultSearchBoxData from "../../fixtures/pom_fixtures/resultSearchBox.json"
import OrgFolderRenamePage from "../../pageObjects/OrgFolderRenamePage";

describe('orgFolder', () => {

    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();
    const orgFolderRenamePage = new OrgFolderRenamePage();
 
    it('AT_17.02.01 |<Organization Folder> Rename Organization Folder on the Jenkins dashboard', function() {
        cy.createOrganizationFolderProject(newItemPageData.orgFolderName)

        homePage
          .hoverAndClickProjectDrpDwnBtn(newItemPageData.orgFolderName)
          .clickRenameOrgFolderDrpDwnBtn()

        orgFolderRenamePage
          .clearNewNameInputField()
          .typeNewOrgFolderName()
          .clickRenameOrgFolderBtn()

        headerAndFooter
            .clickJenkinsHomeLink()

        homePage
            .getgetDashboardMainPanel()
            .should('contain.text', newItemPageData.newOrgFolderName)
    })

    it('AT_17.05.02|<Organization Folder> Verify possibility to enable Organization Folder', function () {
        cy.createOrganizationFolderProject(newItemPageData.orgFolderName)

        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
            .clickDisableOrgFolderBtn()
            .clickEnableOrgFolderBtn()
            .getDisableOrgFolderBtn()
            .should('exist')
    })

    it('AT_17.05.01|<Organization Folder> Verify possibility to disable Organization Folder', function () {
        cy.createOrganizationFolderProject(newItemPageData.orgFolderName)

        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
            .clickDisableOrgFolderBtn()
            .getEnableProjectForm()
            .should('contain.text', newItemPageData.disabledMessage)
    })

    it('AT_17.04.04 | Verify the moved Organization Folder existence on the Jenkins dashboard', function () {
        cy.createFolderProject(newItemPageData.folderName)
        cy.createOrganizationFolderProject(newItemPageData.orgFolderName)

        homePage
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.orgFolderName)
            .clickProjectNameDropdownMoveLink()
            .selectDestinationMoveJob(newItemPageData.folderName)
            .clickMoveButton()

        headerAndFooter
            .clickJenkinsHomeLink()

        homePage
            .getgetDashboardMainPanel()
            .should('not.contain.text', newItemPageData.orgFolderName)
    })

    it('AT_17.04.02 | Move Organization Folder into Folder', () => {
        cy.createOrganizationFolderProject(newItemPageData.orgFolderName)
        cy.createFolderProject(newItemPageData.folderName);
        homePage
            .clickOrgFolderNameLink(newItemPageData.orgFolderName)
            .clickMoveInSideMenuLink()
            .selectDestinationMoveJob(newItemPageData.folderName)
            .clickMoveButton()
        headerAndFooter
            .clickJenkinsHomeLink()
            .clickFolderNameLink(newItemPageData.folderName)
            .checkJobMoveInsideFolder(newItemPageData.orgFolderName)
    })

    it('AT_17.03.01| Delete organization folder within the selected organization folder', () => {
        cy.createOrganizationFolderProject(newItemPageData.orgFolderName)
        homePage
            .clickProjectDrpDwnBtn()
            .clickDeleteOrgFolderDrpDwnMenuBtn()
            .clickDeleteButton()
        headerAndFooter
            .searchTextSearchBox(newItemPageData.orgFolderName)
            .getResultNoMatch()
            .should('have.text', resultSearchBoxData.resultSearchNoMatchMsg)
    });

    it('AT_17.04.01 | Verify that user can move the organization folder through the Jenkins dashboard', function () {
        cy.createFolderProject(newItemPageData.folderName)
        cy.createOrganizationFolderProject(newItemPageData.orgFolderName)

        homePage
            .hoverAndClickProjectDrpDwnBtn(newItemPageData.orgFolderName)
            .clickProjectNameDropdownMoveLink()
            .selectDestinationMoveJob(newItemPageData.folderName)
            .clickMoveButton()

        headerAndFooter
            .clickJenkinsHomeLink()
            .clickFolderNameLink(newItemPageData.folderName)
            .checkJobMoveInsideFolder(newItemPageData.orgFolderName)
    })
})
