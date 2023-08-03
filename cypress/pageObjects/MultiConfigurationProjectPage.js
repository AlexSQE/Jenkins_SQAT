import HomePage from "./HomePage";
import MultiConfigurationProjectConfigurePage from "./MultiConfigurationProjectConfigurePage";
import MultiConfProjectRenamePage from "./MultiConfProjectRenamePage";

class MultiConfigurationProjectPage {
    getDeleteSideMenuLink = () => cy.get('a[data-message^="Delete"]');
    getMultiConfigurationProjectHeader = () => cy.get('#main-panel h1');
    getConfigureSideMenuLink = () => cy.get('[href$="configure"]');
    getDeleteMultiConfProject = () => cy.get('a[data-url$=doDelete]');
    getDescriptionField = () => cy.get('#description div:first-child');
    getDisableProjectBtn = () => cy.get('button.jenkins-button  ');
    getDisableProjectMsg = () => cy.get('.warning form');
    getEnableBtn = () => cy.get('.warning form [name ="Submit"]');
    getMultiConfigProjectDropdwnBreadcrumb = () => cy.get('a[href*="job"] button.jenkins-menu-dropdown-chevron');
    getMultiConfigProjectBreadcrumb = () => cy.get('#breadcrumb-menu-target li ');
    getDeleteBtnConfigProjectBreadcrumd = () => cy.get('#breadcrumb-menu .icon-edit-delete');
    getAddDescriptionBtn = () => cy.get('a#description-link.jenkins-button.jenkins-button--tertiary');
    getDescriptionInputField = () => cy.get('#description textarea.jenkins-input');
    getSaveDescriptionBtn = () => cy.get('button.jenkins-button.jenkins-button--primary ');
    getRenameBtnMultiConfPrj = () => cy.get('a[href*="rename"]')
    getAddEditDescriptionBnt = () => cy.get('a#description-link.jenkins-button--tertiary');

    clickDeleteSideMenuLink() {
        this.getDeleteSideMenuLink().click();
        return new HomePage();
    };

    clickConfigureSideMenuLink() {
        this.getConfigureSideMenuLink().click();
        return new MultiConfigurationProjectConfigurePage;
    };

    clickDeleteMultiConfigurationProject() {
        this.getDeleteMultiConfProject().click()
        return new HomePage
    };

    clickDisableProjectBtn() {
        this.getDisableProjectBtn().click();
        return this;
    };

    clickEnableBtn() {
        this.getEnableBtn().click();
        return this;
    };

    clickMultiConfigProjectDropdwnBreadcrumb() {
        this.getMultiConfigProjectDropdwnBreadcrumb().realHover().click();
        return this;
    };

    selectDeleteBtnMultiConfigProjectDropdownBreadcrumb () {
        this.getDeleteBtnConfigProjectBreadcrumd().click()
        return new HomePage;
    };

    clickAddDescriptionBtn() {
        this.getAddDescriptionBtn().click();
        return this;
    };

    typeDescriptionInputField(text) {
        this.getDescriptionInputField().clear().type(text);
        return this;
    };

    clickSaveDescriptionBtn() {
        this.getSaveDescriptionBtn().click();
        return this;
    };

    clickRenameBtnMultiConfPrj() {
        this.getRenameBtnMultiConfPrj().click();
        return new MultiConfProjectRenamePage
    };

    clickAddEditDescriptionBtn() {
        this.getAddEditDescriptionBnt().click();
        return this;
    };
}
export default MultiConfigurationProjectPage;
