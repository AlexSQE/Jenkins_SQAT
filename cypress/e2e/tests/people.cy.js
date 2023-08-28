/// <reference types="cypress" />

import HomePage from "../../pageObjects/HomePage";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import userProfilePageData from "../../fixtures/pom_fixtures/userProfilePage.json";
import peoplePageData from "../../fixtures/pom_fixtures/peoplePage.json";

describe('people', () => {

    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter();
    
    it('AT_06.04.05 | Edit User description', () => {
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

    it('AT_06.02.009 | Verify Possibility to Add Description to a User', () => {
        homePage
            .clickPeopleSideMenuLink()
            .clickUserNameLink()
            .clickUserDescriptionBtn()
            .typeUserDescriptionInputField(userProfilePageData.description)
            .clickUserDescriptionSaveBtn()
            .getUserDescriptionText()
            .should('have.text', userProfilePageData.description);
    });

    it('AT_06.01_002 | Verify People page tab is redirecting to right page', () => {
        homePage
            .clickPeopleSideMenuLink()
            .trimPeoplePageHeader()
            .should('eq', peoplePageData.peoplePageHeader)
    });

    it('AT_06.03.01 | <People>Sort people list', () => {
        homePage
            .clickPeopleSideMenuLink()
            .clickSortHeaderMenu()
    });

    it('AT_06.01.08 | Verify that the User ID is displayed in the People table on the People page after creating a new User', () => {
        homePage
            .clickPeopleSideMenuLink()
            .getPeopleTableBody()
            .should('not.have.text', peoplePageData.newUserName);
        
        headerAndFooter
            .clickJenkinsHomeLink();
        cy.createUser(
            userProfilePageData.user.name,
            userProfilePageData.user.password,
            userProfilePageData.user.confirmPassword,
            userProfilePageData.user.emailAddress
            );

        homePage
            .clickPeopleSideMenuLink()
            .getPeopleTableBody()
            .should('contain', peoplePageData.newUserName);
    });

    it('AT_6.01.03 | People tab should be visible in the left side bar', () => {
        homePage
            .getPeopleSideMenuLink()
            .should("be.visible")
            .and("contain.text",peoplePageData.peopleTabText)
    });
});
