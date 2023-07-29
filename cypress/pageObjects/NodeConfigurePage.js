class NodeConfigurePage {

    getNodeConfigurePageUrl = () => cy.url();
    nodePropertiesTitle = () => cy.get('.jenkins-form-item .jenkins-section__title');

    getNodePropertiesTitle() {
        return this.nodePropertiesTitle()
            .should('be.visible')
            .invoke('text')
            .then((text) => text.trim());
    };
}

export default NodeConfigurePage;
