/// <reference types="cypress" />

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import userCredentialsPageData from "../../fixtures/pom_fixtures/userCredentialsPage.json";
import { sidePanelNameLink } from "../../fixtures/pom_fixtures/userConfigurePage.json"
import UserProfilePage from "../../pageObjects/UserProfilePage";
import userProfilePageData from "../../fixtures/pom_fixtures/userProfilePage.json";
import UserBuildsPage from "../../pageObjects/UserBuildsPage";
import HomePage from "../../pageObjects/HomePage";
import userConfigurePageData from "../../fixtures/pom_fixtures/userConfigurePage.json"

describe('profilePage', () => {

    const headerAndFooter = new HeaderAndFooter();
    const userProfilePage = new UserProfilePage();
    const userBuildsPage = new UserBuildsPage();
    const homePage = new HomePage();

    it('AT_18.03.001 | <Profile Page> Link to Users Builds', () => {
        headerAndFooter
        .clickUserNameLink()

        userProfilePage 
        .clickOnBuildsSubMenuLink()

        userBuildsPage
        .getUserBuildsHeader()
        .should('contain', "Builds for " + Cypress.env("local.admin.username").toLowerCase());
    });

    it('AT_18.02.01 | <Profile Page> Verify that the User is able to edit the description to the Created User profile', () => {
        cy.createUser(
            userProfilePageData.user.name,
            userProfilePageData.user.password,
            userProfilePageData.user.confirmPassword,
            userProfilePageData.user.emailAddress
          );

        cy.createUserDescription(userProfilePageData.description, userProfilePageData.user.name);

        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink(userProfilePageData.user.name)
            .clickEditUserDescriptionBtn(userProfilePageData.editDescriptionBtnText)
            .typeUserDescriptionInputField(userProfilePageData.editDescription)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userProfilePageData.editDescription);
    });

    it('AT_18.01.05| Verify the User is able to see Admin ID on the User page with his name.', () => {
        headerAndFooter
            .clickUserNameLink()
            .verifyUserPagesUrl(Cypress.env('local.admin.username'))
            .verifyStatusBtn()
            .getUserId().should('contain', Cypress.env('local.admin.username'))
    })

    it('AT_18.06.002 | <Profile Page> Link to User`s credentials (by dropdown menu)', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .clickUserDropDownMenuCredentials()
            .checkUrlCredentialsPage(userCredentialsPageData.credentialsPageUrl)
            .getCredentialsHeader()
            .should('have.text', userCredentialsPageData.credentialsPageHeader)
    });

    it('AT_18.02.03 | Verify that the User is able to add the description to the Admin profile', () => {
        cy.deleteUserDescription();

        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink()
            .checkUserDescriptionTextNotExists()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(userProfilePageData.description)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userProfilePageData.description);
    });

    it("AT_18.02.04 Verify that the User is able to add the description to the Created User profile", () => {
        cy.createUser(
          userProfilePageData.user.name,
          userProfilePageData.user.password,
          userProfilePageData.user.confirmPassword,
          userProfilePageData.user.emailAddress
        );
    
        homePage
          .clickPeopleSideMenuLink()
          .clickUserNameLink(userProfilePageData.user.name)
          .checkUserDescriptionTextNotExists()
          .clickUserDescriptionBtn()
          .typeUserDescriptionInputField(userProfilePageData.user.description)
          .clickUserDescriptionSaveBtn()
          .getUserDescriptionText()
          .should("have.text", userProfilePageData.user.description);
      });

      it('AT_18.02.05 | Verify that the User is able to edit the description to the Admin profile', () => {
        cy.createUserDescription(userProfilePageData.description);
        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink()
            .clickEditUserDescriptionBtn(userProfilePageData.editDescriptionBtnText)
            .typeUserDescriptionInputField(userProfilePageData.editDescription)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userProfilePageData.editDescription);
    });  

    it('AT_18.02.06 | Verify that the User is able to see [Plain text] Preview option during printing the desciption', () => {
        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink()
            .clickUserDescriptionBtn()
            .verifyPreviewBox()
            .getPreviewLink()            
            .should('have.text', 'Preview');
    });

    it('AT_18.01.03 | Profile Page | Verify Profile Name on the page', () => {
        headerAndFooter
        .getUserNameOnThePage().then((userName) => {
            headerAndFooter
            .clickUserNameLink()          
            .trimUserPageHeaderName()
            .should('eq', userName)
        })        
    });
    
    it('AT_18.04.03 | Verify User is be able to add user description', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserConfigureMenu()
            .typeUserConfigDescription(userConfigurePageData.userDescription)
            .clickUserConfigSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userConfigurePageData.userDescription)
    });

    it('AT_18.04.04 | Verify that the User is be able to edit user description', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserConfigureMenu()
            .typeUserConfigDescription(userConfigurePageData.userDescription)
            .clickUserConfigSaveBtn()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(userProfilePageData.editDescription)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userProfilePageData.editDescription);
    });

    it('AT_18.01.02 | Profile Page | Verify Profile Icon on the page', () => {
        headerAndFooter
            .clickUserNameLink()
            .getUserIcon()
            .should("be.visible")
    })

    it('AT_18.01.06 | Left side bar contains 6 elements( People, Status, Builds, Configure, MyViews, Credentials) in Admin Profile page', () => {
        headerAndFooter
            .clickUserNameLink()
            .getSideMenuItemsNames()
            .should("have.length", userConfigurePageData.SidePanelAdminTasks.amountTasks)
            .and("deep.equal", userConfigurePageData.SidePanelAdminTasks.Names)
    });

    it('AT_18.04.05 Header>Verify user can visit Configure Page and delete user information', () => {
        headerAndFooter
            .clickUserDropDownBtn()
            .selectUserConfigureMenu()
            .typeUserConfigDescription(userConfigurePageData.userDescription)
            .clickUserConfigSaveBtn()
            .clickUserDescriptionBtn()
            .clearUserStatusDescription()
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionBtn()
            .should('contain', userProfilePageData.userAddDescriptionBtn);
    });

    
    it('AT_18.06.03 | Verify credantials table has 6 columns with names (T P Store  ↓ Domain, ID, Name)', () => {
        headerAndFooter
            .clickUserNameLink()
            .clickUserCredentialsLink()
            .verifyCredentialTableColumnNamesText()
            .should("have.length", userCredentialsPageData.credentialTableColumnNames.length)
            .and("deep.eq", userCredentialsPageData.credentialTableColumnNames)
    });

    it('AT_18.01.07 | Verify that the Status Tab in side menu is highlighted after redirection to User page', () => {
        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink()
            .getUserStatusLinks().within(($el) => {
                cy.window().then((win) => {
                    const beforeElement = win.getComputedStyle($el[0], "::before");
                    const background = beforeElement.getPropertyValue("background-color");
                    expect(background).to.equal("rgba(175, 175, 207, 0.224)");
                });
            });            
    });

    it('AT_18.01.08 | <Profile Page> Left side bar contains 6 elements(People, Status, Builds, Configure, MyViews, Delete) in User Profile page', () => {
        
        cy.createUser(
            userProfilePageData.user.name,
            userProfilePageData.user.password,
            userProfilePageData.user.confirmPassword,
            userProfilePageData.user.emailAddress
          );
          
        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink(userProfilePageData.user.name)
            .getSideMenuItemsNames()
            .should("have.length", userConfigurePageData.SidePanelUserTasks.amountTasks)
            .and("deep.equal", userConfigurePageData.SidePanelUserTasks.Names);
    });

    it("AT_18.04.06 | Verify that the User is able to redirect to base url .../user/<username>/configure endpoint", () => {
        cy.createUser(
          userProfilePageData.user.name,
          userProfilePageData.user.password,
          userProfilePageData.user.confirmPassword,
          userProfilePageData.user.emailAddress
        );
    
        homePage
          .clickPeopleSideMenuLink()
          .clickUserNameLink(userProfilePageData.user.name)
          .clickUserConfigureLink(userProfilePageData.user.name.toLowerCase())
          .getConfigurePageUrl(userProfilePageData.user.name)
          .should("contain", userProfilePageData.user.name.toLowerCase());
      });

})
