import BuiltInNodePage from "./BuiltInNodePage";

class NodeConfigurePage {

    getNodeConfigurePageUrl = () => cy.url();
    nodePropertiesTitle = () => cy.get('.jenkins-form-item .jenkins-section__title');
    getNodeConfigSaveBtn = () =>  cy.get('[name="Submit"]');
    getNumberOfExecutorsField = () => cy.get('input[name="_.numExecutors"]');
    getLabelsField = () => cy.get('input[name="_.labelString"] ');

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

    clickNumberOfExecutorsField() {
        this.getNumberOfExecutorsField().click();
        return this;
    }

    typeValueNumberOfExecutorsIntoField(text) {
        this.getNumberOfExecutorsField().clear().type(text);
        return this;
    }

    clickLabelsField() {
        this.getLabelsField().click();
        return this;
    }
}

export default NodeConfigurePage;
