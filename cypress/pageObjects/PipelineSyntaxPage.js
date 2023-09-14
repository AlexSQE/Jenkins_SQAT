import PipelineDeclarativeDirectiveGeneratorPage from "./PipelineDeclarativeDirectiveGeneratorPage"
import PipelineStepsReferenceOverviewPage from "./PipelineStepsReferenceOverviewPage"
import PipelineGlobalVariablesReferenceOverviewPage from "./PipelineGlobalVariablesReferenceOverviewPage"

class PipelineSyntaxPage {
    getDeclarativeOnlineDocumentationOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(4)');
    getDeclarativeOnlineDocumentationPageUrl = () =>cy.url();
    getDeclarativeDirectiveGeneratorOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(3)');
    getStepsReferenceOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(5)');
    getOnlineDocumentationOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(7)');
    getOnlineDocumentationPageUrl = () =>cy.url();
    getGlobalVariablesReferenceOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(6)');

    clickDeclarativeOnlineDocumentationPageLink() {
        this.getDeclarativeOnlineDocumentationOptionLink().click();
        return this;
    }

    clickDeclarativeDirectiveGeneratorOptionLink() {
        this.getDeclarativeDirectiveGeneratorOptionLink().click();
        return new PipelineDeclarativeDirectiveGeneratorPage();
    }

    clickStepsReferenceOptionLink() {
        this.getStepsReferenceOptionLink().click();
        return new PipelineStepsReferenceOverviewPage();
    }

    clickOnlineDocumentationOptionLink() {
        this.getOnlineDocumentationOptionLink().click();
        return this;
    }

    clickGlobalVariablesReferenceOptionLink() {
        this.getGlobalVariablesReferenceOptionLink().click();
        return new PipelineGlobalVariablesReferenceOverviewPage();
    }

};

export default PipelineSyntaxPage