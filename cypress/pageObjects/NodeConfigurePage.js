import BuiltInNodePage from "./BuiltInNodePage";

class NodeConfigurePage {

    getNodeConfigurePageUrl = () => cy.url();
    nodePropertiesTitle = () => cy.get('.jenkins-form-item .jenkins-section__title');
    getNodeConfigSaveBtn = () =>  cy.get('[name="Submit"]');

    getNodePropertiesTitle() {
        return this.nodePropertiesTitle()
            .should('be.visible')
            .invoke('text')
            .then((text) => text.trim());
    };

    clickNodeConfigureSaveBtn() {
        this.getNodeConfigSaveBtn().click();
        return new BuiltInNodePage();
    };
}

export default NodeConfigurePage;
