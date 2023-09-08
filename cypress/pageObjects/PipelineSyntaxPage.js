import PipelineDeclarativeDirectiveGeneratorPage from "./PipelineDeclarativeDirectiveGeneratorPage"
import PipelineStepsReferenceOverviewPage from "./PipelineStepsReferenceOverviewPage"

class PipelineSyntaxPage {
    getDeclarativeOnlineDocumentationOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(4)');
    getDeclarativeOnlineDocumentationPageUrl = () =>cy.url();
    getDeclarativeDirectiveGeneratorOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(3)');
    getStepsReferenceOptionLink = () => cy.get('#side-panel>:nth-child(1)>:nth-child(5)');

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
};

export default PipelineSyntaxPage