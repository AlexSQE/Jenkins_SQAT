import BuiltInNodePage from "./BuiltInNodePage";
import NodeDeletePage from "./NodeDeletePage";

class NodeConfigurePage {

    getNodeConfigurePageUrl = () => cy.url();
    nodePropertiesTitle = () => cy.get('.jenkins-form-item .jenkins-section__title');
    getNodeConfigSaveBtn = () =>  cy.get('[name="Submit"]');
    getNumberOfExecutorsField = () => cy.get('input[name="_.numExecutors"]');
    getLabelsField = () => cy.get('input[name="_.labelString"] ');
    getDeleteAgentLink = () => cy.get('#side-panel #tasks a[href*="/Node/delete"]');
    getErrorMessage = () => cy.get('.error');

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

    clearNumberOfExecutorsField() {
        this.getNumberOfExecutorsField().clear();
        return this;
    }

    clickLabelsField() {
        this.getLabelsField().click();
        return this;
    }

    clickDeleteAgentLink() {
        this.getDeleteAgentLink().click();
        return new NodeDeletePage();
    }
}

export default NodeConfigurePage;
