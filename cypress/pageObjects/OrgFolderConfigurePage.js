import OrgFolderPage from "./OrgFolderPage"

class OrgFolderConfigurePage {
    getProjectConfigSaveBtn = () => cy.get('button[name=Submit]');
    getEnableDisabledToggle = () => cy.get('.jenkins-toggle-switch__label');
    getDescriptionField = () => cy.get('textarea[name="_.description');
    getOrgFolderHeaderField = () => cy.get('input[name="_.displayNameOrNull"]');
    getSidePanelMenuItemsOrgFolderConfig = () => cy.get('#tasks .task');

    clickSaveBtnAndGoOrgFolder() {
        this.getProjectConfigSaveBtn().click();
        return new OrgFolderPage();
    }

    clickEnableDisabledToggle() {
        this.getEnableDisabledToggle().click();
        return this;
    }

    addDescription(description) {
        this.getDescriptionField().type(description);
        return this;
    }

    addDisplayName(displayName) {
        this.getOrgFolderHeaderField().type(displayName)
        return this
    }
}

export default OrgFolderConfigurePage;