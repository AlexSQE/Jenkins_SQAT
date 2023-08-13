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

    getNodeSaveBtn() {
        return this.getNodeConfigSaveBtn().click();
    };
}

export default NodeConfigurePage;
